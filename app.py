"""
SafeContact - Emergency Safety Platform Backend
Python Flask REST API & Static Server
Author: SafeContact Team
"""

import os
import json
import time
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder=".")
CORS(app)  # Enable Cross-Origin requests for Live Server compatibility

# In-memory application state with default initial structure
DATA_FILE = os.path.join(os.path.dirname(__file__), "safecontact_state.json")

def get_default_state():
    return {
        "user": {
            "name": "Jane Doe",
            "phone": "+91 98765 43210",
            "email": "jane.doe@example.com",
            "age": 22,
            "emergencyContactName": "Robert Doe (Father)",
            "emergencyContactPhone": "+91 98765 43211",
            "registered": True,
            "hasPin": False,
            "pin": ""
        },
        "sos": {
            "isActive": False,
            "activationTime": None,
            "alertId": None,
            "triggerSource": None,
            "status": "SECURE",  # "SECURE", "ACTIVE", "RESOLVED"
            "resolutionTime": None
        },
        "location": {
            "isSharing": False,
            "latitude": 28.6139,
            "longitude": 77.2090,
            "accuracy": 15.0,
            "lastUpdated": None,
            "addressNote": "Connaught Place, New Delhi (Default / Demo)"
        },
        "contacts": [
            {
                "id": "c1",
                "name": "Robert Doe",
                "phone": "+91 98765 43211",
                "relationship": "Father",
                "receivesSOS": True,
                "isPrimary": True
            },
            {
                "id": "c2",
                "name": "Ananya Sharma",
                "phone": "+91 98765 88990",
                "relationship": "Campus Friend",
                "receivesSOS": True,
                "isPrimary": False
            }
        ],
        "events": []
    }

def load_state():
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Warning] Failed to load {DATA_FILE}: {e}")
    return get_default_state()

def save_state(state):
    try:
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2)
    except Exception as e:
        print(f"[Warning] Failed to save {DATA_FILE}: {e}")

# Global state
app_state = load_state()

def add_event(event_type, description, details=None):
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    event = {
        "id": f"evt-{int(time.time() * 1000)}",
        "type": event_type,
        "description": description,
        "timestamp": now_str,
        "details": details or {}
    }
    app_state["events"].insert(0, event)
    # Keep last 50 events
    app_state["events"] = app_state["events"][:50]
    save_state(app_state)
    return event

# ----------------- STATIC ROUTES -----------------
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:path>")
def static_files(path):
    if os.path.exists(os.path.join(".", path)):
        return send_from_directory(".", path)
    return jsonify({"error": "Not Found"}), 404

# ----------------- REST API ROUTES -----------------
@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status": "ok",
        "service": "SafeContact Backend API",
        "timestamp": datetime.now().isoformat(),
        "mode": "Demonstration Prototype Mode",
        "smsProvider": "Simulated Gateway (Twilio Ready)"
    })

@app.route("/api/state", methods=["GET"])
def get_state():
    return jsonify(app_state)

@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    required = ["name", "phone", "email", "age", "emergencyContactName", "emergencyContactPhone"]
    for field in required:
        if field not in data or not str(data[field]).strip():
            return jsonify({"success": False, "error": f"Field '{field}' is required"}), 400

    app_state["user"]["name"] = data["name"].strip()
    app_state["user"]["phone"] = data["phone"].strip()
    app_state["user"]["email"] = data["email"].strip()
    app_state["user"]["age"] = int(data.get("age", 20))
    app_state["user"]["emergencyContactName"] = data["emergencyContactName"].strip()
    app_state["user"]["emergencyContactPhone"] = data["emergencyContactPhone"].strip()
    app_state["user"]["registered"] = True

    # Ensure emergency contact exists in contacts list
    if not app_state["contacts"]:
        app_state["contacts"].append({
            "id": f"c-{int(time.time())}",
            "name": data["emergencyContactName"].strip(),
            "phone": data["emergencyContactPhone"].strip(),
            "relationship": "Primary Emergency Contact",
            "receivesSOS": True,
            "isPrimary": True
        })

    add_event("PROFILE_UPDATE", f"Profile updated for {app_state['user']['name']}", {"user": app_state["user"]["name"]})
    save_state(app_state)
    return jsonify({"success": True, "user": app_state["user"]})

@app.route("/api/sos", methods=["POST"])
def toggle_sos():
    data = request.get_json() or {}
    action = data.get("action", "trigger")  # "trigger" or "resolve"

    if action == "trigger":
        alert_id = f"SC-SOS-{int(time.time()) % 100000}"
        now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        app_state["sos"]["isActive"] = True
        app_state["sos"]["activationTime"] = now_str
        app_state["sos"]["alertId"] = alert_id
        app_state["sos"]["triggerSource"] = data.get("source", "Web Client SOS Button")
        app_state["sos"]["status"] = "ACTIVE"
        app_state["sos"]["resolutionTime"] = None

        event = add_event(
            "SOS_TRIGGERED",
            f"EMERGENCY SOS triggered by {app_state['user']['name']}",
            {
                "alertId": alert_id,
                "activationTime": now_str,
                "contactsNotified": [c["name"] for c in app_state["contacts"] if c.get("receivesSOS")]
            }
        )
        save_state(app_state)
        return jsonify({
            "success": True,
            "sos": app_state["sos"],
            "event": event,
            "simulatedSMS": {
                "dispatchedTo": len([c for c in app_state["contacts"] if c.get("receivesSOS")]),
                "status": "Simulated Delivery (Prototype Mode)",
                "note": "To enable real carrier SMS, configure TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN in production."
            }
        })
    elif action == "resolve":
        now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        app_state["sos"]["isActive"] = False
        app_state["sos"]["status"] = "RESOLVED"
        app_state["sos"]["resolutionTime"] = now_str

        # Stop location if sharing was active
        if app_state["location"]["isSharing"]:
            app_state["location"]["isSharing"] = False

        event = add_event(
            "SOS_RESOLVED",
            f"SOS Alert {app_state['sos'].get('alertId', '')} marked RESOLVED / SAFE by user",
            {"resolutionTime": now_str}
        )
        save_state(app_state)
        return jsonify({"success": True, "sos": app_state["sos"], "event": event})

    return jsonify({"success": False, "error": "Invalid action"}), 400

@app.route("/api/location", methods=["POST"])
def update_location():
    data = request.get_json() or {}
    try:
        lat = float(data.get("latitude", app_state["location"]["latitude"]))
        lng = float(data.get("longitude", app_state["location"]["longitude"]))
        accuracy = float(data.get("accuracy", 10.0))
        is_sharing = bool(data.get("isSharing", True))

        app_state["location"]["latitude"] = lat
        app_state["location"]["longitude"] = lng
        app_state["location"]["accuracy"] = accuracy
        app_state["location"]["isSharing"] = is_sharing
        app_state["location"]["lastUpdated"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        if data.get("addressNote"):
            app_state["location"]["addressNote"] = data["addressNote"]

        save_state(app_state)
        return jsonify({"success": True, "location": app_state["location"]})
    except (ValueError, TypeError) as e:
        return jsonify({"success": False, "error": f"Invalid coordinate data: {e}"}), 400

@app.route("/api/stop-location", methods=["POST"])
def stop_location():
    app_state["location"]["isSharing"] = False
    app_state["location"]["lastUpdated"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    add_event("LOCATION_STOPPED", f"Live location sharing stopped by {app_state['user']['name']}")
    save_state(app_state)
    return jsonify({"success": True, "location": app_state["location"]})

@app.route("/api/contacts", methods=["GET", "POST"])
def handle_contacts():
    if request.method == "GET":
        return jsonify({"contacts": app_state["contacts"]})

    data = request.get_json() or {}
    action = data.get("action", "add")

    if action == "add":
        name = data.get("name", "").strip()
        phone = data.get("phone", "").strip()
        relationship = data.get("relationship", "Trusted Contact").strip()
        receives_sos = bool(data.get("receivesSOS", True))

        if not name or not phone:
            return jsonify({"success": False, "error": "Name and phone are required"}), 400

        contact = {
            "id": f"c-{int(time.time() * 1000)}",
            "name": name,
            "phone": phone,
            "relationship": relationship,
            "receivesSOS": receives_sos,
            "isPrimary": False
        }
        app_state["contacts"].append(contact)
        add_event("CONTACT_ADDED", f"Added trusted contact: {name} ({relationship})")
        save_state(app_state)
        return jsonify({"success": True, "contact": contact, "contacts": app_state["contacts"]})

    elif action == "update":
        cid = data.get("id")
        for c in app_state["contacts"]:
            if c["id"] == cid:
                c["name"] = data.get("name", c["name"]).strip()
                c["phone"] = data.get("phone", c["phone"]).strip()
                c["relationship"] = data.get("relationship", c["relationship"]).strip()
                c["receivesSOS"] = bool(data.get("receivesSOS", c["receivesSOS"]))
                save_state(app_state)
                return jsonify({"success": True, "contact": c, "contacts": app_state["contacts"]})
        return jsonify({"success": False, "error": "Contact not found"}), 404

    elif action == "delete":
        cid = data.get("id")
        before = len(app_state["contacts"])
        app_state["contacts"] = [c for c in app_state["contacts"] if c["id"] != cid]
        if len(app_state["contacts"]) < before:
            add_event("CONTACT_REMOVED", f"Removed contact id {cid}")
            save_state(app_state)
            return jsonify({"success": True, "contacts": app_state["contacts"]})
        return jsonify({"success": False, "error": "Contact not found"}), 404

    return jsonify({"success": False, "error": "Unknown action"}), 400

@app.route("/api/events", methods=["GET"])
def get_events():
    return jsonify({"events": app_state["events"]})

@app.route("/api/reset", methods=["POST"])
def reset_state():
    global app_state
    app_state = get_default_state()
    save_state(app_state)
    return jsonify({"success": True, "message": "State reset to defaults", "state": app_state})

if __name__ == "__main__":
    print("=" * 60)
    print(" SafeContact Flask Server Starting...")
    print(" URL: http://127.0.0.1:5000")
    print(" API: http://127.0.0.1:5000/api/health")
    print(" Mode: Local Prototype & College Project Demo")
    print("=" * 60)
    app.run(host="127.0.0.1", port=5000, debug=True)
