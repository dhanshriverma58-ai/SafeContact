# SafeContact — Emergency Safety Platform Prototype

> **“Your Safety, Always Within Reach!”**

SafeContact is a modern, responsive, user-friendly personal emergency safety platform designed for rapid response, trusted guardian monitoring, consent-based live location sharing, and comprehensive first-aid preparedness.

Built as an academic and college project demonstration prototype, it features a complete client frontend (`index.html`, `style.css`, `script.js`) and an optional Python Flask REST backend (`app.py`).

---

## 🎨 Color Palette & Design System

The application strictly follows an elegant, soft blue theme with high readability and accessible contrast:

* **Pastel Blue (`#8CC7C4`):** Header, primary brand elements, accent highlights, map overlays.
* **Dark Navy Blue (`#111844`):** High-contrast headings, readable text, action buttons, footer.
* **Medium Blue (`#4B5694`):** Interactive buttons, active state indicators, telemetry cards.
* **Soft Off-White (`#FFF6F6`):** Clean background, cards, and modal dialogs.
* **Controlled Status Colors:** Non-excessive, dignified alert accents (`#DE5D53`) and safe green (`#2B8A3E`) without bright red walls or overwhelming warning colors.

---

## 🌟 Key Features

### 1. Dual Dashboard Presentation Mode
* **Dual View (Side-by-Side):** Displays the **User Safety Dashboard** and the **Emergency Contact Live Monitor** simultaneously on laptops and presentation screens.
* Ideal for project presentations: evaluators can watch an SOS alert triggered on the left and see the guardian receive it with live coordinates and maps on the right in real time!
* **Single View Modes:** Toggle to *User Only* or *Monitor Only* for focused demonstration.

### 2. Initial Registration & Profile Management
* Automatically welcomes first-time visitors with a registration modal.
* Collects: Full Name, Phone, Email, Age, Primary Emergency Contact Name & Phone.
* Strict client-side validation for phone and email formats.
* Saves to browser `localStorage` and syncs with the Flask backend.
* Clear privacy notice regarding local demonstration storage.

### 3. Multilingual Support (6 Languages)
Translate all major interface labels, headings, buttons, alerts, emergency services, and first-aid cards:
1. **English**
2. **हिंदी (Hindi)**
3. **मराठी (Marathi)**
4. **বাংলা (Bengali)**
5. **తెలుగు (Telugu)**
6. **தமிழ் (Tamil)**

### 4. Optional Security PIN Protection
* Set an optional 4-digit PIN with confirmation.
* Protects the user dashboard from unauthorized local viewing.
* Auto-advancing digit input boxes with shake animations on incorrect entry.
* Transparent educational notice explaining local UI lock vs. production server authentication.

### 5. Instant SOS Emergency Alert Workflow
* Distinctive, accessible SOS button with soft radiating rings.
* 3-second safety countdown confirmation to prevent accidental activation.
* Generates an official Alert ID (e.g., `#SC-SOS-84912`) and exact timestamp.
* Broadcasts to authorized emergency contacts and the live monitor feed.
* Prompts the user: *"Share Live GPS Location with Emergency Contacts?"*
* Instant resolution / cancellation button to mark the user safe.

### 6. Consent-Based Live Location Sharing
* Uses the browser **Geolocation API** (`navigator.geolocation.watchPosition`).
* Pre-permission rationale card explaining why location is needed.
* Location streaming starts **only** upon explicit user consent.
* Real-time coordinates telemetry: Latitude, Longitude, Accuracy (meters), and Last Updated time.
* Prominent **STOP LIVE LOCATION** button that halts tracking immediately.
* **Interactive Leaflet + OpenStreetMap:** Auto-panning marker and accuracy halo.
* **Simulate Live Move (Demo Mode):** Simulates movement across a campus route for indoor laptop presentations without hardware GPS.

### 7. Direct Emergency Services & Specialized Helplines
* **Institutional Services (One-Tap Clickable `tel:` links):**
  * Police — `112`
  * Ambulance — `108`
  * Fire Brigade — `101`
  * National Emergency (ERSS) — `112`
* **Specialized Helplines:**
  * Women Helpline — `181`
  * Child Helpline — `1098`
  * Senior Citizen Helpline — `14567`

### 8. Emergency Contact Management (CRUD)
* Add, edit, and delete trusted guardians.
* Fields: Full Name, Phone, Relationship, and "Receives SOS Broadcasts" toggle.
* Primary contact badge and SOS recipient indicators.
* Phone masking support.

### 9. First Aid Knowledge Base (8 Complete Topics)
Clicking any card opens a detailed modal with step-by-step procedures, critical "DO NOT" warnings, and when to call `108`/`112`:
1. Cuts and Bleeding
2. Burns & Scalds
3. Fainting & Syncope
4. Choking (Heimlich Maneuver)
5. Fractures & Sprains
6. Nosebleeds
7. Electric Shock
8. CPR & Emergency Cardiac Response

### 10. Emergency Contact Live Monitor (Guardian View)
* Connected user profile details.
* Live SOS status badge (`Normal` vs. `EMERGENCY ACTIVE`).
* Location feed telemetry and dedicated Leaflet guardian map.
* Clear notice when location sharing is stopped by the user.
* Chronological Emergency Activity Audit Log.
* Quick response action toolbar (Call Police, Call Ambulance, Open Google Maps Directions).

---

## 📁 Project Structure

```text
safecontact/
├── index.html              # Complete semantic, accessible HTML5 structure
├── style.css               # Clean modular CSS with variables, grid, and animations
├── script.js               # Application logic, translations, Leaflet maps, SOS engine
├── app.py                  # Python Flask REST API backend & static file server
├── requirements.txt        # Backend dependencies (Flask, Flask-CORS)
└── README.md               # Project documentation and guide
```

---

## 🚀 How to Run the Website

You can run SafeContact in either of two modes:

### Option A: Using Python Flask Backend (Recommended for Full Functionality)

1. Open PowerShell or Terminal in the project directory:
   ```powershell
   cd "C:\Users\Dhanshri Verma\.gemini\antigravity\scratch\safecontact"
   ```

2. Install dependencies (if not already installed):
   ```powershell
   python -m pip install -r requirements.txt
   ```

3. Start the Flask server:
   ```powershell
   python app.py
   ```

4. Open your web browser and navigate to:
   ```text
   http://127.0.0.1:5000
   ```

The application will show **"Flask API Online"** in the top header pill.

---

### Option B: Using VS Code Live Server (Frontend Only)

1. Open the `safecontact` folder in Visual Studio Code.
2. Right-click on `index.html` and select **"Open with Live Server"** (or use port `5500`).
3. SafeContact automatically detects that the Flask backend is offline and seamlessly runs in **Local Browser Demo Mode**.
4. Cross-tab synchronization is handled via `BroadcastChannel` and `localStorage`, so opening two browser windows side-by-side demonstrates live synchronization with zero external configuration!

---

## 📱 Responsive Testing & Screen Breakpoints

SafeContact is built with CSS Grid, Flexbox, and responsive units (`rem`, `%`, `vw`):

| Device Type | Width | Layout Behavior |
| :--- | :--- | :--- |
| **Mobile Phones** | `360px` – `390px` | Single-column stack, touch targets ≥ 48px, compact navigation, accessible SOS button |
| **Tablets** | `768px` – `991px` | Two-column grid, responsive cards, balanced spacing |
| **Laptops / Desktops** | `1024px` – `1440px` | Dual-view split dashboard (User on Left, Guardian on Right) |
| **Presentation Displays** | `1920px` | Centered maximum container (`1680px`), crisp typography, presentation ready |

---

## 🎓 College Presentation Demo Script

Here is an effective 4-minute demonstration flow for professors or project evaluators:

1. **Introduction (30s):**
   * Introduce SafeContact and the tagline: *“Your Safety, Always Within Reach!”*
   * Highlight the dual-dashboard presentation layout (User on Left, Guardian Monitor on Right).
2. **Profile & Language (30s):**
   * Demonstrate multilingual capability: switch from English to Hindi or Marathi and show how all labels instantly update.
3. **Trigger Emergency SOS (1m):**
   * Press the **SOS** button on the User Dashboard.
   * Point out the 3-second accidental-click prevention dialog.
   * Watch the Guardian Monitor immediately flag an **EMERGENCY SOS ALERT** with the timestamp and alert ID.
4. **Consent-Based Location & Interactive Map (1m):**
   * Show the consent modal asking the user to approve location sharing.
   * Approve or click **"Simulate Live Move"** to demonstrate real-time GPS coordinate streaming and Leaflet map tracking.
   * Press **"STOP LIVE LOCATION"** and highlight how the guardian view immediately reflects that location sharing has ended.
5. **Preparedness & Resolution (1m):**
   * Open the **First Aid** guide (e.g., CPR or Choking) to demonstrate preliminary medical instructions.
   * Resolve the SOS alert to return the system to safe status.

---

## 🔒 Production Deployment Roadmap

To transition this college prototype into a production service:

1. **SMS Gateway:** Configure a Twilio account (`TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`) in `app.py` to trigger cellular SMS and WhatsApp emergency dispatch.
2. **HTTPS Requirement:** Deploy with an SSL/TLS certificate (e.g., via Let's Encrypt or Render/Vercel) so mobile browsers grant full Geolocation permissions outside `localhost`.
3. **Database & Auth:** Connect Firebase Authentication or Supabase for multi-device guardian accounts and encrypted user record storage.

---

## 📄 License
Academic and College Project Demonstration Prototype. Open for educational use.
