/**
 * SafeContact — Emergency Safety Platform Prototype
 * "Your Safety, Always Within Reach!"
 * Comprehensive JavaScript Application Logic
 */

(function () {
  "use strict";

  // =========================================================================
  // 1. MULTILINGUAL TRANSLATION DICTIONARIES (6 LANGUAGES)
  // =========================================================================
  const TRANSLATIONS = {
    en: {
      tagline: "“Your Safety, Always Within Reach!”",
      statusProtected: "System Protected",
      statusSosActive: "SOS Alert Active",
      dualView: "Dual View",
      userView: "User",
      monitorView: "Monitor",
      pinNav: "PIN",
      sosActiveAlert: "EMERGENCY SOS ALERT ACTIVE!",
      resolveSos: "Resolve Alert",
      pinLockedHeading: "SafeContact Protected Area",
      pinLockedDesc: "Enter your 4-digit Security PIN to access your safety dashboard.",
      pinIncorrect: "Incorrect PIN. Please try again.",
      unlock: "Unlock Dashboard",
      pinNote: "Prototype Lock: Local PIN validation for project demonstration. Use verified server auth in production.",
      userDashboardTitle: "User Safety Dashboard",
      userDashboardSubtitle: "Immediate emergency access and personal safety controls",
      activeUser: "Active Profile",
      emergencyTriggerEyebrow: "EMERGENCY ASSISTANCE",
      sosButtonTitle: "Instant Emergency SOS",
      sosButtonSubtitle: "Notifies your registered emergency contacts and dispatches your alert. Location sharing is requested with explicit consent.",
      sosStatusLabel: "Current SOS State:",
      statusSecure: "SAFE / INACTIVE",
      statusActive: "ACTIVE EMERGENCY",
      sosPressAction: "TAP TO ALERT",
      sosConfirmHint: "Includes confirmation step to prevent accidental clicks",
      cancelSosBtn: "Resolve / Cancel SOS",
      liveLocationTitle: "Consent-Based Live Location",
      liveLocationSubtitle: "Share your GPS coordinates only when you explicitly choose to",
      locStatusOff: "Location Sharing: OFF",
      locStatusOn: "Location Sharing: ACTIVE",
      locStatusStopped: "Location Sharing: STOPPED",
      whyLocationTitle: "Why location permission is requested:",
      whyLocationDesc: "SafeContact uses the browser Geolocation API to transmit your exact coordinates to your designated emergency contacts during an emergency. We never track or share your position without your explicit consent.",
      latitudeLabel: "Latitude",
      longitudeLabel: "Longitude",
      accuracyLabel: "Accuracy",
      lastUpdatedLabel: "Last Updated",
      mapStandby: "Location sharing inactive. Click \"Share Live Location\" below.",
      btnStartLocation: "Share Live Location",
      btnStopLocation: "STOP LIVE LOCATION",
      btnSimulateLoc: "Simulate Live Move (Demo)",
      servicesTitle: "Direct Emergency Services",
      servicesSubtitle: "One-tap telephone links for immediate institutional assistance",
      policeBadge: "Law Enforcement",
      policeTitle: "Police Department",
      policeDesc: "For immediate security, crime prevention, and emergency response.",
      ambulanceBadge: "Medical Support",
      ambulanceTitle: "Medical Ambulance",
      ambulanceDesc: "Paramedic assistance, patient transport, and trauma emergencies.",
      fireBadge: "Fire & Rescue",
      fireTitle: "Fire Brigade",
      fireDesc: "Fire outbreaks, trapped rescue operations, and hazardous hazards.",
      allInOneBadge: "All-in-One Helpline",
      emergencyTitle: "National Emergency",
      emergencyDesc: "Single emergency response number (ERSS) across India.",
      helplinesTitle: "Specialized Helplines",
      helplinesSubtitle: "Dedicated support lines for vulnerable and specific groups",
      womenHelplineTitle: "Women Helpline",
      womenHelplineDesc: "24/7 confidential safety & crisis assistance for women",
      childHelplineTitle: "Child Helpline",
      childHelplineDesc: "Emergency support for children in need of care and protection",
      seniorHelplineTitle: "Senior Citizen Helpline",
      seniorHelplineDesc: "Support, safety, and elder abuse intervention services",
      contactsTitle: "Trusted Emergency Contacts",
      contactsSubtitle: "Verified guardians and contacts who receive your SOS broadcasts",
      addContactBtn: "Add Contact",
      contactsNotice: "Only contacts with the \"Receives SOS\" badge receive alert broadcasts. In prototype mode, broadcasts appear in the live monitoring area.",
      firstAidTitle: "Emergency First Aid Guidance",
      firstAidSubtitle: "Reliable, step-by-step guidance for critical medical situations",
      faCuts: "Cuts and Bleeding",
      faCutsShort: "Direct pressure, cleaning, and wound dressing",
      faBurns: "Burns & Scalds",
      faBurnsShort: "Cool running water, protecting skin, blisters",
      faFainting: "Fainting & Syncope",
      faFaintingShort: "Elevating legs, recovery position, airflow",
      faChoking: "Choking",
      faChokingShort: "Back blows, Heimlich maneuver, clearing airway",
      faFractures: "Fractures & Sprains",
      faFracturesShort: "Immobilization, cold compress, support splints",
      faNosebleeds: "Nosebleeds",
      faNosebleedsShort: "Lean forward, pinch soft cartilage, cold pack",
      faShock: "Electric Shock",
      faShockShort: "Cut power source safely, check breathing, call 108",
      faCpr: "CPR & Emergency Response",
      faCprShort: "Chest compressions, 100-120 bpm, rescue breaths",
      viewGuide: "View Guide",
      firstAidDisclaimer: "Important Notice: This guidance is for preliminary first-aid reference only. In life-threatening emergencies, immediately call 108 (Ambulance) or 112. It does not replace professional medical diagnosis or clinical treatment.",
      monitorTitle: "Emergency Contact Live Monitor",
      monitorSubtitle: "Real-time status view as seen by your designated guardians",
      syncedLive: "Live Feed Synced",
      statusNormal: "Normal / Protected",
      alertBroadcastTitle: "SOS Broadcast State",
      noEmergencyTitle: "No Emergency Reported",
      noEmergencyDesc: "User has not activated emergency SOS. System monitoring on standby.",
      activeEmergencyTitle: "DISTRESS SOS BROADCAST RECEIVED!",
      activeEmergencyDesc: "User triggered emergency distress alert. Check coordinates and dispatch response.",
      sharedLocationTitle: "User Live Location Feed",
      sharedLocationSubtitle: "Real-time GPS stream when user grants location sharing consent",
      sharingStopped: "Sharing Stopped",
      sharingActiveStream: "Live Streaming GPS",
      monLat: "Latitude",
      monLng: "Longitude",
      monAccuracy: "Accuracy",
      monReceived: "Updated",
      monMapStandby: "Awaiting user location broadcast. Coordinates appear here once consented.",
      callPoliceBtn: "Call Police (112)",
      callAmbulanceBtn: "Call Ambulance (108)",
      getDirectionsBtn: "Open Navigation",
      eventLogTitle: "Emergency Activity Audit Log",
      eventLogSubtitle: "Chronological log of alerts, location toggles, and safety updates",
      footerDesc: "SafeContact is an emergency safety platform designed for academic demonstration and personal preparedness. Developed as a prototype to demonstrate emergency contact access, consent-based location sharing, and safety information.",
      quickHelplines: "Quick Helplines",
      demoArch: "Architecture & Tech",
      footerCopyright: "© 2026 SafeContact Platform. Designed with care for College Project Demonstration. Local prototype mode active.",
      collegeReady: "College Project Demonstration Edition",
      regTitle: "Welcome to SafeContact",
      regSubtitle: "Complete your emergency safety profile to get started",
      regPrivacyNote: "Local Privacy Notice: This prototype securely stores your profile details locally in your browser storage (or syncs with your configured Flask backend). We do not collect unnecessary tracking data.",
      lblFullName: "Full Name",
      lblPhone: "Phone Number",
      lblEmail: "Email Address",
      lblAge: "Age",
      lblEmergencyContactHeader: "Primary Emergency Contact",
      lblEmContactName: "Emergency Contact Name",
      lblEmContactPhone: "Emergency Contact Phone Number",
      btnSaveContinue: "Save & Continue",
      sosConfirmHeader: "Confirm Emergency SOS",
      sosConfirmSubtitle: "This will alert your registered emergency contacts",
      sosConfirmBody: "Are you sure you want to trigger an Emergency SOS Alert? This will broadcast an immediate distress status to your primary contacts and monitoring dashboard.",
      autoConfirmIn: "Activating in",
      btnCancel: "Cancel",
      btnConfirmSosNow: "Yes, Trigger SOS Now",
      locConsentHeader: "Share Live Location?",
      locConsentSubtitle: "Consent required for emergency transmission",
      locConsentBody: "SafeContact requests permission to access and stream your GPS location coordinates. This allows your emergency contacts to see your precise location on a live interactive map during this alert.",
      consentBullet1: "Location is shared only with your authorized contacts.",
      consentBullet2: "You can tap \"STOP LIVE LOCATION\" at any moment to immediately halt sharing.",
      consentBullet3: "No location data is permanently saved or tracked without authorization.",
      btnNotNow: "Not Now",
      btnAgreeShare: "Agree & Share Location",
      pinConfigHeader: "Security PIN Protection",
      pinConfigSubtitle: "Set an optional 4-digit PIN for user area access",
      lblCreatePin: "New 4-Digit PIN",
      lblConfirmPin: "Confirm 4-Digit PIN",
      pinLocalNote: "This PIN provides browser-level interface privacy during presentations. Real-world deployment uses authenticated multi-factor accounts.",
      btnRemovePin: "Remove PIN",
      btnSavePin: "Save PIN",
      addContactTitle: "Add Emergency Contact",
      addContactSubtitle: "Enter contact details for emergency notifications",
      lblName: "Name",
      lblRelationship: "Relationship",
      lblReceivesSos: "Send SOS distress broadcasts to this contact",
      btnSaveContact: "Save Contact",
      faStepByStep: "Immediate Step-by-Step Action:",
      faDoNot: "What NOT To Do (Crucial Warnings):",
      faWhenToCall: "When to Call 108 / 112 Immediately:",
      btnClose: "Close Guide"
    },

    hi: {
      tagline: "“आपकी सुरक्षा, सदैव आपकी पहुँच में!”",
      statusProtected: "प्रणाली सुरक्षित है",
      statusSosActive: "एसओएस अलर्ट सक्रिय",
      dualView: "संयुक्त दृश्य",
      userView: "उपयोगकर्ता",
      monitorView: "निगरानी",
      pinNav: "पिन",
      sosActiveAlert: "आपातकालीन एसओएस अलर्ट सक्रिय है!",
      resolveSos: "अलर्ट हल करें",
      pinLockedHeading: "सुरक्षित संपर्क संरक्षित क्षेत्र",
      pinLockedDesc: "सुरक्षा डैशबोर्ड तक पहुँचने के लिए अपना 4-अंकीय सुरक्षा पिन दर्ज करें।",
      pinIncorrect: "गलत पिन। कृपया पुन: प्रयास करें।",
      unlock: "डैशबोर्ड अनलॉक करें",
      pinNote: "प्रोटोटाइप लॉक: प्रस्तुति के लिए स्थानीय पिन सत्यापन। उत्पादन में सर्वर प्रमाणीकरण आवश्यक है।",
      userDashboardTitle: "उपयोगकर्ता सुरक्षा डैशबोर्ड",
      userDashboardSubtitle: "तत्काल आपातकालीन सहायता एवं व्यक्तिगत सुरक्षा नियंत्रण",
      activeUser: "सक्रिय प्रोफ़ाइल",
      emergencyTriggerEyebrow: "आपातकालीन सहायता",
      sosButtonTitle: "त्वरित आपातकालीन एसओएस",
      sosButtonSubtitle: "आपके पंजीकृत आपातकालीन संपर्कों को सूचित करता है। स्थान साझाकरण सहमति पर आधारित है।",
      sosStatusLabel: "वर्तमान स्थिति:",
      statusSecure: "सुरक्षित / निष्क्रिय",
      statusActive: "सक्रिय आपातकाल",
      sosPressAction: "अलर्ट हेतु दबाएं",
      sosConfirmHint: "गलती से दबने से रोकने के लिए पुष्टिकरण शामिल है",
      cancelSosBtn: "एसओएस रद्द / हल करें",
      liveLocationTitle: "सहमति-आधारित लाइव स्थान",
      liveLocationSubtitle: "अपना जीपीएस स्थान केवल अपनी स्पष्ट अनुमति से साझा करें",
      locStatusOff: "स्थान साझाकरण: बंद",
      locStatusOn: "स्थान साझाकरण: सक्रिय",
      locStatusStopped: "स्थान साझाकरण: रोक दिया गया",
      whyLocationTitle: "स्थान की अनुमति क्यों मांगी जाती है:",
      whyLocationDesc: "आपातकाल के समय आपके अधिकृत संरक्षकों को सटीक स्थान दिखाने हेतु अनुमति आवश्यक है। बिना सहमति कोई स्थान ट्रैक नहीं होता।",
      latitudeLabel: "अक्षांश (Lat)",
      longitudeLabel: "देशांतर (Lng)",
      accuracyLabel: "सटीकता",
      lastUpdatedLabel: "अंतिम अपडेट",
      mapStandby: "स्थान साझाकरण निष्क्रिय है। नीचे दिए गए बटन से प्रारंभ करें।",
      btnStartLocation: "लाइव स्थान साझा करें",
      btnStopLocation: "लाइव स्थान तुरंत रोकें",
      btnSimulateLoc: "स्थान अनुकरण करें (डेमो)",
      servicesTitle: "सीधी आपातकालीन सेवाएं",
      servicesSubtitle: "संस्थागत सहायता हेतु एक-टैप टेलीफोन लिंक",
      policeBadge: "कानून व्यवस्था",
      policeTitle: "पुलिस विभाग",
      policeDesc: "तत्काल सुरक्षा, अपराध रोकथाम और आपातकालीन सहायता हेतु।",
      ambulanceBadge: "चिकित्सा सहायता",
      ambulanceTitle: "चिकित्सा एम्बुलेंस",
      ambulanceDesc: "पैरामेडिक सहायता, रोगी परिवहन और आघात आपात स्थिति के लिए।",
      fireBadge: "अग्निशमन व बचाव",
      fireTitle: "अग्निशामक दल",
      fireDesc: "आग बुझाने, बचाव कार्यों और खतरनाक दुर्घटनाओं के लिए।",
      allInOneBadge: "अखिल भारतीय हेल्पलाइन",
      emergencyTitle: "राष्ट्रीय आपातकालीन नंबर",
      emergencyDesc: "पूरे भारत में एकीकृत आपातकालीन नंबर (ERSS)।",
      helplinesTitle: "विशिष्ट हेल्पलाइन",
      helplinesSubtitle: "विशिष्ट समूहों हेतु समर्पित सहायता केंद्र",
      womenHelplineTitle: "महिला हेल्पलाइन",
      womenHelplineDesc: "महिलाओं के लिए 24/7 गोपनीय सुरक्षा व संकट सहायता",
      childHelplineTitle: "चाइल्ड हेल्पलाइन",
      childHelplineDesc: "देखभाल व सुरक्षा की आवश्यकता वाले बच्चों हेतु आपातकालीन सहायता",
      seniorHelplineTitle: "वरिष्ठ नागरिक हेल्पलाइन",
      seniorHelplineDesc: "बुजुर्गों की सुरक्षा, दुर्व्यवहार रोकथाम व कानूनी सहायता",
      contactsTitle: "विश्वसनीय आपातकालीन संपर्क",
      contactsSubtitle: "सत्यापित संरक्षक जिन्हें आपके एसओएस संदेश प्राप्त होंगे",
      addContactBtn: "संपर्क जोड़ें",
      contactsNotice: "केवल \"एसओएस प्राप्तकर्ता\" बैज वाले संपर्कों को ही आपातकालीन संदेश भेजा जाता है।",
      firstAidTitle: "आपातकालीन प्राथमिक चिकित्सा",
      firstAidSubtitle: "गंभीर परिस्थितियों के लिए विश्वसनीय चरणबद्ध मार्गदर्शन",
      faCuts: "घाव और रक्तस्राव",
      faCutsShort: "दबाव बनाना, सफाई और पट्टी बांधना",
      faBurns: "जलना और झुलसना",
      faBurnsShort: "ठंडा पानी, त्वचा की सुरक्षा, फफोले",
      faFainting: "बेहोशी और चक्कर",
      faFaintingShort: "पैर ऊपर उठाना, रिकवरी स्थिति, ताजी हवा",
      faChoking: "गले में अटकना (दम घुटना)",
      faChokingShort: "पीठ पर थपकी, हेमलिच तकनीक, श्वासनली खोलना",
      faFractures: "हड्डी टूटना और मोच",
      faFracturesShort: "अंग स्थिर रखना, बर्फ की सिंकाई, सहारा देना",
      faNosebleeds: "नाक से खून बहना",
      faNosebleedsShort: "आगे झुकना, नाक दबाना, ठंडा सेक",
      faShock: "बिजली का झटका",
      faShockShort: "पावर कट करना, सांस जांचना, 108 डायल करना",
      faCpr: "सीपीआर एवं आपातकालीन प्रतिक्रिया",
      faCprShort: "छाती का दबाव (100-120 प्रति मिनट), कृत्रिम सांस",
      viewGuide: "मार्गदर्शन देखें",
      firstAidDisclaimer: "महत्वपूर्ण सूचना: यह केवल प्राथमिक चिकित्सा मार्गदर्शन है। गंभीर स्थिति में तुरंत 108 (एम्बुलेंस) या 112 पर कॉल करें।",
      monitorTitle: "आपातकालीन संपर्क लाइव निगरानी",
      monitorSubtitle: "अभिभावकों व संपर्कों को दिखने वाला वास्तविक समय दृश्य",
      syncedLive: "लाइव फीड सिंक",
      statusNormal: "सामान्य / सुरक्षित",
      alertBroadcastTitle: "एसओएस प्रसारण स्थिति",
      noEmergencyTitle: "कोई आपात स्थिति नहीं",
      noEmergencyDesc: "उपयोगकर्ता सुरक्षित है। आपातकालीन निगरानी स्टैंडबाय पर है।",
      activeEmergencyTitle: "संकट एसओएस प्रसारण प्राप्त हुआ!",
      activeEmergencyDesc: "उपयोगकर्ता ने आपातकालीन अलर्ट सक्रिय किया है। स्थान की जांच करें।",
      sharedLocationTitle: "उपयोगकर्ता लाइव स्थान फीड",
      sharedLocationSubtitle: "उपयोगकर्ता द्वारा स्थान साझा करने पर वास्तविक समय जीपीएस",
      sharingStopped: "स्थान साझाकरण रुका हुआ है",
      sharingActiveStream: "लाइव जीपीएस स्ट्रीमिंग चालू",
      monLat: "अक्षांश",
      monLng: "देशांतर",
      monAccuracy: "सटीकता",
      monReceived: "अपडेट समय",
      monMapStandby: "उपयोगकर्ता के स्थान प्रसारण की प्रतीक्षा है।",
      callPoliceBtn: "पुलिस को कॉल करें (112)",
      callAmbulanceBtn: "एम्बुलेंस को कॉल करें (108)",
      getDirectionsBtn: "नेविगेशन खोलें",
      eventLogTitle: "आपातकालीन गतिविधि ऑडिट लॉग",
      eventLogSubtitle: "अलर्ट, स्थान एवं सुरक्षा बदलावों का कालानुक्रमिक विवरण",
      footerDesc: "SafeContact एक आपातकालीन सुरक्षा मंच है जिसे कॉलेज प्रोजेक्ट और व्यक्तिगत सुरक्षा हेतु विकसित किया गया है।",
      quickHelplines: "त्वरित हेल्पलाइन",
      demoArch: "तकनीकी संरचना",
      footerCopyright: "© 2026 SafeContact Platform. कॉलेज प्रोजेक्ट प्रदर्शन हेतु निर्मित।",
      collegeReady: "कॉलेज प्रोजेक्ट प्रदर्शन संस्करण",
      regTitle: "SafeContact में आपका स्वागत है",
      regSubtitle: "आरंभ करने हेतु अपनी सुरक्षा प्रोफ़ाइल पूर्ण करें",
      regPrivacyNote: "गोपनीयता सूचना: यह प्रोटोटाइप आपका विवरण स्थानीय ब्राउज़र स्टोरेज में सुरक्षित रखता है। कोई अनावश्यक डेटा एकत्र नहीं किया जाता।",
      lblFullName: "पूरा नाम",
      lblPhone: "फ़ोन नंबर",
      lblEmail: "ईमेल पता",
      lblAge: "आयु",
      lblEmergencyContactHeader: "प्राथमिक आपातकालीन संपर्क",
      lblEmContactName: "आपातकालीन संपर्क का नाम",
      lblEmContactPhone: "आपातकालीन संपर्क का फ़ोन नंबर",
      btnSaveContinue: "सुरक्षित करें एवं आगे बढ़ें",
      sosConfirmHeader: "एसओएस सक्रियण की पुष्टि करें",
      sosConfirmSubtitle: "यह आपके पंजीकृत संपर्कों को अलर्ट भेजेगा",
      sosConfirmBody: "क्या आप वाकई आपातकालीन एसओएस अलर्ट सक्रिय करना चाहते हैं? इससे आपके संपर्कों को संकट संदेश प्रसारित होगा।",
      autoConfirmIn: "सक्रिय हो रहा है",
      btnCancel: "रद्द करें",
      btnConfirmSosNow: "हाँ, तुरंत एसओएस सक्रिय करें",
      locConsentHeader: "लाइव स्थान साझा करें?",
      locConsentSubtitle: "आपातकालीन प्रसारण हेतु सहमति आवश्यक है",
      locConsentBody: "SafeContact आपके जीपीएस स्थान तक पहुंचने की अनुमति मांगता है ताकि आपातकाल के दौरान आपके संपर्क मानचित्र पर आपका स्थान देख सकें।",
      consentBullet1: "स्थान केवल आपके अधिकृत संपर्कों के साथ साझा किया जाता है।",
      consentBullet2: "आप किसी भी समय \"लाइव स्थान रोकें\" दबाकर साझाकरण बंद कर सकते हैं।",
      consentBullet3: "बिना अनुमति कोई डेटा संग्रहीत नहीं किया जाता है।",
      btnNotNow: "अभी नहीं",
      btnAgreeShare: "सहमति दें एवं साझा करें",
      pinConfigHeader: "सुरक्षा पिन सुरक्षा",
      pinConfigSubtitle: "डैशबोर्ड सुरक्षा हेतु 4-अंकीय पिन सेट करें",
      lblCreatePin: "नया 4-अंकीय पिन",
      lblConfirmPin: "पिन की पुष्टि करें",
      pinLocalNote: "यह पिन प्रस्तुति के दौरान ब्राउज़र-स्तरीय गोपनीयता प्रदान करता है।",
      btnRemovePin: "पिन हटाएं",
      btnSavePin: "पिन सहेजें",
      addContactTitle: "आपातकालीन संपर्क जोड़ें",
      addContactSubtitle: "आपातकालीन सूचनाओं हेतु संपर्क विवरण दर्ज करें",
      lblName: "नाम",
      lblRelationship: "संबंध",
      lblReceivesSos: "इस संपर्क को एसओएस संदेश भेजें",
      btnSaveContact: "संपर्क सहेजें",
      faStepByStep: "तत्काल चरणबद्ध कदम:",
      faDoNot: "क्या न करें (महत्वपूर्ण चेतावनियाँ):",
      faWhenToCall: "तुरंत 108 / 112 कब डायल करें:",
      btnClose: "मार्गदर्शिका बंद करें"
    },

    mr: {
      tagline: "“तुमची सुरक्षितता, नेहमी तुमच्या हातात!”",
      statusProtected: "प्रणाली सुरक्षित आहे",
      statusSosActive: "एसओएस अलर्ट सक्रिय",
      dualView: "संयुक्त दृश्य",
      userView: "वापरकर्ता",
      monitorView: "निरीक्षण",
      pinNav: "पिन",
      sosActiveAlert: "आपत्कालीन एसओएस अलर्ट सक्रिय आहे!",
      resolveSos: "अलर्ट सोडवा",
      pinLockedHeading: "सुरक्षित संपर्क संरक्षित क्षेत्र",
      pinLockedDesc: "डॅशबोर्डमध्ये प्रवेश करण्यासाठी आपला 4-अंकी सुरक्षा पिन टाका.",
      pinIncorrect: "चुकीचा पिन. कृपया पुन्हा प्रयत्न करा.",
      unlock: "डॅशबोर्ड उघडा",
      pinNote: "प्रोटोटाइप लॉक: सादरीकरणासाठी स्थानिक पिन पडताळणी.",
      userDashboardTitle: "वापरकर्ता सुरक्षा डॅशबोर्ड",
      userDashboardSubtitle: "त्वरित आपत्कालीन मदत आणि वैयक्तिक सुरक्षा नियंत्रणे",
      activeUser: "सक्रिय प्रोफाइल",
      emergencyTriggerEyebrow: "आपत्कालीन सहाय्यता",
      sosButtonTitle: "झटपट आपत्कालीन एसओएस",
      sosButtonSubtitle: "आपल्या नोंदणीकृत संपर्कांना सावध करतो. स्थान सामायिकरण संमतीवर अवलंबून आहे.",
      sosStatusLabel: "सध्याची स्थिती:",
      statusSecure: "सुरक्षित / निष्क्रिय",
      statusActive: "सक्रिय आणीबाणी",
      sosPressAction: "अलर्टसाठी दाबा",
      sosConfirmHint: "चुकून दाबले जाऊ नये म्हणून पडताळणी समाविष्ट आहे",
      cancelSosBtn: "एसओएस रद्द / सोडवा",
      liveLocationTitle: "संमती-आधारित थेट स्थान",
      liveLocationSubtitle: "आपले जीपीएस स्थान केवळ आपल्या स्पष्ट संमतीने सामायिक करा",
      locStatusOff: "स्थान सामायिकरण: बंद",
      locStatusOn: "स्थान सामायिकरण: सुरू",
      locStatusStopped: "स्थान सामायिकरण: थांबवले",
      whyLocationTitle: "स्थानाची परवानगी का आवश्यक आहे:",
      whyLocationDesc: "संकटसमयी आपल्या विश्वासू पालकांना थेट स्थान दाखवण्यासाठी ही परवानगी आवश्यक आहे. संमतीशिवाय स्थान ट्रॅक केले जात नाही.",
      latitudeLabel: "अक्षांश",
      longitudeLabel: "रेखांश",
      accuracyLabel: "अचूकता",
      lastUpdatedLabel: "शेवटचे अपडेट",
      mapStandby: "स्थान सामायिकरण बंद आहे. सुरू करण्यासाठी खालील बटण दाबा.",
      btnStartLocation: "थेट स्थान सामायिक करा",
      btnStopLocation: "थेट स्थान त्वरित थांबवा",
      btnSimulateLoc: "स्थान सिम्युलेट करा (डेमो)",
      servicesTitle: "थेट आपत्कालीन सेवा",
      servicesSubtitle: "त्वरित संस्थात्मक मदतीसाठी फोन लिंक्स",
      policeBadge: "कायदा व सुव्यवस्था",
      policeTitle: "पोलीस दल",
      policeDesc: "त्वरित सुरक्षा, गुन्हेगारी प्रतिबंध आणि आपत्कालीन मदतीसाठी.",
      ambulanceBadge: "वैद्यकीय मदत",
      ambulanceTitle: "रुग्णवाहिका",
      ambulanceDesc: "रुग्ण वाहतूक, प्राथमिक उपचार आणि गंभीर परिस्थितीसाठी.",
      fireBadge: "अग्निशमन व बचाव",
      fireTitle: "अग्निशामक दल",
      fireDesc: "आग विझवणे, बचाव कार्य आणि आपत्ती निवारणासाठी.",
      allInOneBadge: "अखिल भारतीय हेल्पलाइन",
      emergencyTitle: "राष्ट्रीय आपत्कालीन क्रमांक",
      emergencyDesc: "संपूर्ण भारतात एकाच क्रमांकावर सर्व आपत्कालीन सेवा (ERSS).",
      helplinesTitle: "विशेष हेल्पलाइन",
      helplinesSubtitle: "विशिष्ट घटकांसाठी समर्पित मदत कक्ष",
      womenHelplineTitle: "महिला हेल्पलाइन",
      womenHelplineDesc: "महिलांसाठी २४/७ गोपनीय सुरक्षा व संकट निवारण",
      childHelplineTitle: "चाइल्ड हेल्पलाइन",
      childHelplineDesc: "गरजू आणि संकटातील मुलांसाठी २४ तास मोफत मदत",
      seniorHelplineTitle: "ज्येष्ठ नागरिक हेल्पलाइन",
      seniorHelplineDesc: "ज्येष्ठांची सुरक्षा, छळ प्रतिबंध आणि समुपदेशन",
      contactsTitle: "विश्वासू आपत्कालीन संपर्क",
      contactsSubtitle: "आपत्कालीन एसओएस संदेश प्राप्त करणारे निवडक संपर्क",
      addContactBtn: "संपर्क जोडा",
      contactsNotice: "केवळ एसओएस बॅज असलेल्या संपर्कांनाच थेट अलर्ट संदेश पाठवले जातात.",
      firstAidTitle: "आपत्कालीन प्रथमोपचार",
      firstAidSubtitle: "गंभीर वैद्यकीय परिस्थितीसाठी टप्प्याटप्प्याने मार्गदर्शन",
      faCuts: "जखमा आणि रक्तस्त्राव",
      faCutsShort: "दाब देणे, जखम स्वच्छ करणे आणि पट्टी बांधणे",
      faBurns: "भाजणे आणि होरपळणे",
      faBurnsShort: "थंड पाणी, त्वचेचे रक्षण, फोड न फोडणे",
      faFainting: "चक्कर येणे आणि बेशुद्धी",
      faFaintingShort: "पाय वर उचलणे, मोकळी हवा, रिकव्हरी पोझिशन",
      faChoking: "घशात अडकणे (श्वास रोखणे)",
      faChokingShort: "पाठीवर थाप मारणे, हेमलिख पद्धत",
      faFractures: "हाड मोडणे आणि लचक",
      faFracturesShort: "हालचाल न करणे, बर्फ लावणे, आधार देणे",
      faNosebleeds: "नाकातून रक्त येणे",
      faNosebleedsShort: "पुढे वाकणे, नाक दाबून धरणे",
      faShock: "विजेचा धक्का",
      faShockShort: "वीज प्रवाह बंद करणे, श्वास तपासणे, १०८ ला कॉल",
      faCpr: "सीपीआर व कृत्रिम श्वासोच्छ्वास",
      faCprShort: "छातीवर योग्य दाब (१००-१२० प्रति मिनिट)",
      viewGuide: "मार्गदर्शन पहा",
      firstAidDisclaimer: "महत्त्वाची सूचना: हे केवळ प्राथमिक मार्गदर्शनासाठी आहे. गंभीर स्थितीत लगेच १०८ किंवा ११२ वर कॉल करा.",
      monitorTitle: "आपत्कालीन संपर्क थेट निरीक्षण",
      monitorSubtitle: "पालकांना दिसणारे थेट निरीक्षण पॅनेल",
      syncedLive: "थेट डेटा सिंक",
      statusNormal: "सामान्य / सुरक्षित",
      alertBroadcastTitle: "एसओएस प्रसारण स्थिती",
      noEmergencyTitle: "कोणतीही आणीबाणी नाही",
      noEmergencyDesc: "वापरकर्ता सुरक्षित आहे. प्रणाली सज्ज आहे.",
      activeEmergencyTitle: "संकट एसओएस संदेश प्राप्त!",
      activeEmergencyDesc: "वापरकर्त्याने अलर्ट सुरू केला आहे. त्वरित कारवाई करा.",
      sharedLocationTitle: "थेट स्थान फीड",
      sharedLocationSubtitle: "वापरकर्त्याने संमती दिल्यानंतर थेट जीपीएस स्थान",
      sharingStopped: "स्थान सामायिकरण थांबवले आहे",
      sharingActiveStream: "थेट जीपीएस सुरू",
      monLat: "अक्षांश",
      monLng: "रेखांश",
      monAccuracy: "अचूकता",
      monReceived: "अपडेट वेळ",
      monMapStandby: "वापरकर्त्याच्या स्थानाची प्रतीक्षा आहे.",
      callPoliceBtn: "पोलिसांना कॉल करा (११२)",
      callAmbulanceBtn: "रुग्णवाहिका बोलवा (१०८)",
      getDirectionsBtn: "दिशानिर्देश उघडा",
      eventLogTitle: "सुरक्षा ऑडीट लॉग",
      eventLogSubtitle: "सर्व घडामोडींची वेळोवेळी नोंद",
      footerDesc: "SafeContact हे कॉलेज प्रकल्प आणि वैयक्तिक सुरक्षेसाठी तयार केलेले व्यासपीठ आहे.",
      quickHelplines: "महत्त्वाचे क्रमांक",
      demoArch: "तंत्रज्ञान संरचना",
      footerCopyright: "© 2026 SafeContact Platform. कॉलेज प्रोजेक्ट प्रदर्शनासाठी तयार.",
      collegeReady: "कॉलेज प्रोजेक्ट डेमो आवृत्ती",
      regTitle: "SafeContact मध्ये आपले स्वागत आहे",
      regSubtitle: "सुरक्षा प्रोफाइल पूर्ण करून सुरुवात करा",
      regPrivacyNote: "गोपनीयता सूचना: माहिती स्थानिक ब्राऊजरमध्ये सुरक्षित राहते.",
      lblFullName: "पूर्ण नाव",
      lblPhone: "फोन नंबर",
      lblEmail: "ईमेल पत्ता",
      lblAge: "वय",
      lblEmergencyContactHeader: "मुख्य आपत्कालीन संपर्क",
      lblEmContactName: "संपर्काचे नाव",
      lblEmContactPhone: "संपर्काचा फोन नंबर",
      btnSaveContinue: "जतन करा आणि पुढे जा",
      sosConfirmHeader: "एसओएस सक्रियतेची पुष्टी करा",
      sosConfirmSubtitle: "हे आपल्या संपर्कांना सावध करेल",
      sosConfirmBody: "आपण नक्की आपत्कालीन एसओएस अलर्ट पाठवू इच्छिता?",
      autoConfirmIn: "सक्रिय होत आहे",
      btnCancel: "रद्द करा",
      btnConfirmSosNow: "होय, आत्ताच पाठवा",
      locConsentHeader: "थेट स्थान सामायिक करावे का?",
      locConsentSubtitle: "संकटात स्थान पाठवण्यासाठी संमती आवश्यक आहे",
      locConsentBody: "SafeContact आपल्या जीपीएस स्थानाची परवानगी मागत आहे जेणेकरून आपले संपर्क नकाशावर आपले स्थान पाहू शकतील.",
      consentBullet1: "स्थान केवळ आपल्या अधिकृत संपर्कांसोबत सामायिक केले जाते.",
      consentBullet2: "आपण कधीही स्थान सामायिकरण थांबवू शकता.",
      consentBullet3: "संमतीशिवाय कोणताही डेटा साठवला जात नाही.",
      btnNotNow: "नंतर",
      btnAgreeShare: "संमती द्या आणि पाठवा",
      pinConfigHeader: "सुरक्षा पिन संरक्षण",
      pinConfigSubtitle: "४-अंकी पिन सेट करा",
      lblCreatePin: "नवीन ४-अंकी पिन",
      lblConfirmPin: "पिनची पुष्टी करा",
      pinLocalNote: "सादरीकरणासाठी स्थानिक पिन सुविधा.",
      btnRemovePin: "पिन काढा",
      btnSavePin: "पिन जतन करा",
      addContactTitle: "आपत्कालीन संपर्क जोडा",
      addContactSubtitle: "संपर्काचे तपशील नोंदवा",
      lblName: "नाव",
      lblRelationship: "नाते / संबंध",
      lblReceivesSos: "या संपर्काला एसओएस संदेश पाठवा",
      btnSaveContact: "संपर्क जतन करा",
      faStepByStep: "त्वरित कृती:",
      faDoNot: "काय करू नये:",
      faWhenToCall: "१०८ / ११२ ला कधी कॉल करावा:",
      btnClose: "मार्गदर्शिका बंद करा"
    },

    bn: {
      tagline: "“আপনার সুরক্ষা, সর্বদা আপনার হাতের নাগালে!”",
      statusProtected: "সিস্টেম সুরক্ষিত",
      statusSosActive: "এসওএস সতর্কতা সক্রিয়",
      dualView: "দ্বৈত দৃশ্য",
      userView: "ব্যবহারকারী",
      monitorView: "মনিটর",
      pinNav: "পিন",
      sosActiveAlert: "জরুরি এসওএস সতর্কতা সক্রিয় হয়েছে!",
      resolveSos: "সতর্কতা সমাধান করুন",
      pinLockedHeading: "সুরক্ষিত এলাকা",
      pinLockedDesc: "ড্যাশবোর্ড অ্যাক্সেস করতে আপনার ৪-সংখ্যার পিন লিখুন।",
      pinIncorrect: "ভুল পিন। আবার চেষ্টা করুন।",
      unlock: "আনলক করুন",
      pinNote: "প্রোটোটাইপ লক: উপস্থাপনার জন্য লোকাল পিন যাচাই।",
      userDashboardTitle: "ব্যবহারকারী সুরক্ষা ড্যাশবোর্ড",
      userDashboardSubtitle: "জরুরি সেবা এবং ব্যক্তিগত সুরক্ষা নিয়ন্ত্রণ",
      activeUser: "সক্রিয় প্রোফাইল",
      emergencyTriggerEyebrow: "জরুরি সহায়তা",
      sosButtonTitle: "তাত্ক্ষণিক জরুরি এসওএস",
      sosButtonSubtitle: "জরুরি পরিচিতিদের সতর্ক করে। অবস্থান শেয়ারিং সম্মতির ভিত্তিতে হয়।",
      sosStatusLabel: "বর্তমান অবস্থা:",
      statusSecure: "নিরাপদ / নিষ্ক্রিয়",
      statusActive: "সক্রিয় জরুরি অবস্থা",
      sosPressAction: "সতর্ক করতে চাপুন",
      sosConfirmHint: "ভুলবশত ক্লিক রোধ করতে নিশ্চিতকরণ যুক্ত",
      cancelSosBtn: "এসওএস সমাধান / বাতিল",
      liveLocationTitle: "সম্মতি-ভিত্তিক লাইভ অবস্থান",
      liveLocationSubtitle: "শুধুমাত্র স্পষ্ট অনুমতি সাপেক্ষে জিপিএস অবস্থান শেয়ার করুন",
      locStatusOff: "অবস্থান শেয়ারিং: বন্ধ",
      locStatusOn: "অবস্থান শেয়ারিং: সক্রিয়",
      locStatusStopped: "অবস্থান শেয়ারিং: স্থগিত",
      whyLocationTitle: "কেন অবস্থানের অনুমতি চাওয়া হয়:",
      whyLocationDesc: "বিপদের সময় আপনার মনোনীত অভিভাবকদের সঠিক অবস্থান প্রদর্শনের জন্য অনুমতি প্রয়োজন।",
      latitudeLabel: "অক্ষাংশ",
      longitudeLabel: "দ্রাঘিমাংশ",
      accuracyLabel: "নির্ভুলতা",
      lastUpdatedLabel: "সর্বশেষ আপডেট",
      mapStandby: "অবস্থান শেয়ারিং নিষ্ক্রিয়। নিচে ক্লিক করে শুরু করুন।",
      btnStartLocation: "লাইভ অবস্থান শেয়ার করুন",
      btnStopLocation: "লাইভ অবস্থান বন্ধ করুন",
      btnSimulateLoc: "অবস্থান সিমুলেট করুন (ডেমো)",
      servicesTitle: "সরাসরি জরুরি পরিষেবা",
      servicesSubtitle: "তাত্ক্ষণিক সহায়তার জন্য এক-ক্লিকে ফোন লিঙ্ক",
      policeBadge: "আইন প্রয়োগকারী",
      policeTitle: "পুলিশ বিভাগ",
      policeDesc: "নিরাপত্তা ও অপরাধ দমনে জরুরি সহায়তার জন্য।",
      ambulanceBadge: "চিকিৎসা সেবা",
      ambulanceTitle: "অ্যাম্বুলেন্স পরিষেবা",
      ambulanceDesc: "রোগী পরিবহন এবং জরুরি চিকিৎসার জন্য।",
      fireBadge: "অগ্নি ও উদ্ধার",
      fireTitle: "দমকল বাহিনী",
      fireDesc: "অগ্নিকাণ্ড ও বিপজ্জনক উদ্ধার অভিযানের জন্য।",
      allInOneBadge: "সার্বজনীন হেল্পলাইন",
      emergencyTitle: "জাতীয় জরুরি নম্বর",
      emergencyDesc: "সারা দেশে সমন্বিত জরুরি নম্বর (১১২)।",
      helplinesTitle: "বিশেষ হেল্পলাইন",
      helplinesSubtitle: "নির্দিষ্ট দলগুলির জন্য নিবেদিত সহায়তা",
      womenHelplineTitle: "নারী হেল্পলাইন",
      womenHelplineDesc: "নারীদের ২৪/৭ গোপনীয় নিরাপত্তা ও সংকট সহায়তা",
      childHelplineTitle: "চাইল্ড হেল্পলাইন",
      childHelplineDesc: "সুরক্ষা প্রয়োজন এমন শিশুদের জন্য জরুরি সহায়তা",
      seniorHelplineTitle: "প্রবীণ নাগরিক হেল্পলাইন",
      seniorHelplineDesc: "প্রবীণদের সুরক্ষা ও সহায়তা পরিষেবা",
      contactsTitle: "বিশ্বস্ত জরুরি পরিচিতি",
      contactsSubtitle: "জরুরি এসওএস বার্তা প্রাপ্তির জন্য মনোনীত ব্যক্তি",
      addContactBtn: "পরিচিতি যোগ করুন",
      contactsNotice: "শুধুমাত্র এসওএস ব্যাজ থাকা পরিচিতিদের বার্তা পাঠানো হয়।",
      firstAidTitle: "জরুরি প্রাথমিক চিকিৎসা",
      firstAidSubtitle: "সংকটজনক পরিস্থিতির জন্য নির্ভরযোগ্য গাইডলাইন",
      faCuts: "কাটাছেঁড়া ও রক্তপাত",
      faCutsShort: "চাপ দেওয়া, পরিষ্কার করা ও ব্যান্ডেজ",
      faBurns: "পোড়া ও ঝলসে যাওয়া",
      faBurnsShort: "ঠান্ডা জল, চামড়ার সুরক্ষা",
      faFainting: "অজ্ঞান হয়ে যাওয়া",
      faFaintingShort: "পা উঁচুতে রাখা, বাতাস চলাচল",
      faChoking: "শ্বাসরোধ বা গলায় আটকানো",
      faChokingShort: "পিঠে চাপড়, হাইমলিখ পদ্ধতি",
      faFractures: "হাড় ভাঙা ও মচকে যাওয়া",
      faFracturesShort: "অঙ্গ স্থির রাখা, বরফ দেওয়া",
      faNosebleeds: "নাক দিয়ে রক্ত পড়া",
      faNosebleedsShort: "সামনে ঝুঁকে নাক চেপে ধরা",
      faShock: "বৈদ্যুতিক শক",
      faShockShort: "বিদ্যুৎ সংযোগ বন্ধ করা, শ্বাস পরীক্ষা, ১০৮ এ কল",
      faCpr: "সিপিআর জরুরি প্রতিক্রিয়া",
      faCprShort: "বুকে সংকোচন (প্রতি মিনিটে ১০০-১২০ বার)",
      viewGuide: "গাইড দেখুন",
      firstAidDisclaimer: "সতর্কতা: এটি প্রাথমিক নির্দেশিকা। গুরুতর অবস্থায় অবিলম্বে ১০৮ বা ১১২ নম্বরে ফোন করুন।",
      monitorTitle: "জরুরি পরিচিতি লাইভ মনিটর",
      monitorSubtitle: "অভিভাবকদের জন্য রিয়েল-টাইম মনিটরিং স্ক্রিন",
      syncedLive: "লাইভ ফিড সিঙ্কড",
      statusNormal: "স্বাভাবিক / সুরক্ষিত",
      alertBroadcastTitle: "এসওএস সম্প্রচার অবস্থা",
      noEmergencyTitle: "কোনো জরুরি অবস্থা নেই",
      noEmergencyDesc: "ব্যবহারকারী নিরাপদ আছেন। সিস্টেম প্রস্তুত রয়েছে।",
      activeEmergencyTitle: "বিপদ সংকেত প্রাপ্ত হয়েছে!",
      activeEmergencyDesc: "ব্যবহারকারী এসওএস সক্রিয় করেছেন। অবস্থান পরীক্ষা করুন।",
      sharedLocationTitle: "লাইভ অবস্থান ফিড",
      sharedLocationSubtitle: "ব্যবহারকারী সম্মতি দিলে রিয়েল-টাইম অবস্থান দৃশ্যমান হয়",
      sharingStopped: "শেয়ারিং বন্ধ রয়েছে",
      sharingActiveStream: "লাইভ জিপিএস চলছে",
      monLat: "অক্ষাংশ",
      monLng: "দ্রাঘিমাংশ",
      monAccuracy: "নির্ভুলতা",
      monReceived: "আপডেট সময়",
      monMapStandby: "অবস্থানের জন্য অপেক্ষা করা হচ্ছে।",
      callPoliceBtn: "পুলিশকে কল করুন (১১২)",
      callAmbulanceBtn: "অ্যাম্বুলেন্স কল করুন (১০৮)",
      getDirectionsBtn: "দিকনির্দেশ খুলুন",
      eventLogTitle: "জরুরি কার্যক্রম লগ",
      eventLogSubtitle: "সতর্কতা এবং কার্যক্রমের বিবরণ",
      footerDesc: "SafeContact কলেজ প্রকল্প এবং জরুরি প্রস্তুতির জন্য তৈরি একটি প্ল্যাটফর্ম।",
      quickHelplines: "দ্রুত হেল্পলাইন",
      demoArch: "প্রযুক্তি কাঠামো",
      footerCopyright: "© 2026 SafeContact Platform. কলেজ প্রকল্প প্রদর্শনের জন্য নির্মিত।",
      collegeReady: "কলেজ প্রজেক্ট সংস্করণ",
      regTitle: "SafeContact-এ স্বাগতম",
      regSubtitle: "আপনার প্রোফাইল সম্পন্ন করুন",
      regPrivacyNote: "গোপনীয়তা নোটিশ: তথ্য ব্রাউজারে সুরক্ষিত রাখা হয়।",
      lblFullName: "পুরো নাম",
      lblPhone: "ফোন নম্বর",
      lblEmail: "ইমেল ঠিকানা",
      lblAge: "বয়স",
      lblEmergencyContactHeader: "প্রধান জরুরি পরিচিতি",
      lblEmContactName: "পরিচিতির নাম",
      lblEmContactPhone: "পরিচিতির ফোন নম্বর",
      btnSaveContinue: "সংরক্ষণ করুন ও এগিয়ে যান",
      sosConfirmHeader: "এসওএস নিশ্চিত করুন",
      sosConfirmSubtitle: "এটি আপনার পরিচিতিদের সতর্ক করবে",
      sosConfirmBody: "আপনি কি নিশ্চিতভাবে জরুরি এসওএস সতর্কতা সক্রিয় করতে চান?",
      autoConfirmIn: "সক্রিয় হচ্ছে",
      btnCancel: "বাতিল",
      btnConfirmSosNow: "হ্যাঁ, এখনই পাঠান",
      locConsentHeader: "লাইভ অবস্থান শেয়ার করবেন?",
      locConsentSubtitle: "অবস্থান পাঠানোর জন্য সম্মতি প্রয়োজন",
      locConsentBody: "জরুরি পরিস্থিতিতে আপনার অবস্থান দেখানোর জন্য SafeContact অনুমতি চাচ্ছে।",
      consentBullet1: "শুধুমাত্র অনুমোদিত পরিচিতিদের সাথেই শেয়ার হয়।",
      consentBullet2: "যেকোনো মুহূর্তে শেয়ারিং বন্ধ করা যায়।",
      consentBullet3: "অনুমতি ছাড়া ডেটা সংরক্ষিত হয় না।",
      btnNotNow: "এখন নয়",
      btnAgreeShare: "সম্মত এবং শেয়ার করুন",
      pinConfigHeader: "নিরাপত্তা পিন",
      pinConfigSubtitle: "৪-সংখ্যার পিন সেট করুন",
      lblCreatePin: "নতুন পিন",
      lblConfirmPin: "পিন নিশ্চিত করুন",
      pinLocalNote: "প্রেজেন্টেশনের জন্য লোকাল পিন সুরক্ষা।",
      btnRemovePin: "পিন সরান",
      btnSavePin: "পিন সংরক্ষণ করুন",
      addContactTitle: "পরিচিতি যোগ করুন",
      addContactSubtitle: "যোগাযোগের বিবরণ লিখুন",
      lblName: "নাম",
      lblRelationship: "সম্পর্ক",
      lblReceivesSos: "এই পরিচিতিকে এসওএস পাঠান",
      btnSaveContact: "সংরক্ষণ করুন",
      faStepByStep: "তাত্ক্ষণিক পদক্ষেপ:",
      faDoNot: "যা করবেন না:",
      faWhenToCall: "কখন ১০৮ / ১১২ কল করবেন:",
      btnClose: "বন্ধ করুন"
    },

    te: {
      tagline: "“మీ భద్రత, ఎల్లప్పుడూ మీకు అందుబాటులో!”",
      statusProtected: "వ్యవస్థ సురక్షితం",
      statusSosActive: "SOS హెచ్చరిక చురుకుగా ఉంది",
      dualView: "ద్వంద్వ వీక్షణ",
      userView: "వినియోగదారు",
      monitorView: "మానిటర్",
      pinNav: "పిన్",
      sosActiveAlert: "అత్యవసర SOS హెచ్చరిక చురుకుగా ఉంది!",
      resolveSos: "హెచ్చరికను పరిష్కరించండి",
      pinLockedHeading: "రక్షిత ప్రాంతం",
      pinLockedDesc: "డాష్‌బోర్డ్‌ను యాక్సెస్ చేయడానికి మీ 4-అంకెల సెక్యూరిటీ పిన్‌ను నమోదు చేయండి.",
      pinIncorrect: "తప్పుడు పిన్. దయచేసి మళ్లీ ప్రయత్నించండి.",
      unlock: "అన్‌లాక్ చేయండి",
      pinNote: "నమూనా లాక్: ప్రదర్శన కోసం స్థానిక పిన్ ధృవీకరణ.",
      userDashboardTitle: "వినియోగదారు భద్రతా డాష్‌బోర్డ్",
      userDashboardSubtitle: "తక్షణ అత్యవసర సేవలు మరియు భద్రతా నియంత్రణలు",
      activeUser: "యాక్టివ్ ప్రొఫైల్",
      emergencyTriggerEyebrow: "అత్యవసర సహాయం",
      sosButtonTitle: "తక్షణ అత్యవసర SOS",
      sosButtonSubtitle: "మీ నమోదిత అత్యవసర పరిచయాలను హెచ్చరిస్తుంది. లొకేషన్ షేరింగ్ అనుమతిపై ఆధారపడి ఉంటుంది.",
      sosStatusLabel: "ప్రస్తుత స్థితి:",
      statusSecure: "సురక్షితం / నిష్క్రియం",
      statusActive: "అత్యవసర పరిస్థితి",
      sosPressAction: "హెచ్చరించడానికి నొక్కండి",
      sosConfirmHint: "ప్రమాదవశాత్తు క్లిక్ కాకుండా నివారించడానికి నిర్ధారణ",
      cancelSosBtn: "SOS పరిష్కరించండి / రద్దు చేయండి",
      liveLocationTitle: "అనుమతి-ఆధారిత ప్రత్యక్ష లొకేషన్",
      liveLocationSubtitle: "మీ స్పష్టమైన అనుమతితో మాత్రమే మీ GPS స్థానాన్ని పంచుకోండి",
      locStatusOff: "లొకేషన్ షేరింగ్: ఆఫ్‌లో ఉంది",
      locStatusOn: "లొకేషన్ షేరింగ్: చురుకుగా ఉంది",
      locStatusStopped: "లొకేషన్ షేరింగ్: ఆపివేయబడింది",
      whyLocationTitle: "లొకేషన్ అనుమతి ఎందుకు అవసరం:",
      whyLocationDesc: "అత్యవసర సమయాల్లో మీ సంరక్షకులకు ఖచ్చితమైన స్థానాన్ని చూపించడానికి మాత్రమే అనుమతి కోరబడుతుంది.",
      latitudeLabel: "అక్షాంశం",
      longitudeLabel: "రేఖాంశం",
      accuracyLabel: "ఖచ్చితత్వం",
      lastUpdatedLabel: "చివరి నవీకరణ",
      mapStandby: "లొకేషన్ షేరింగ్ ఆఫ్‌లో ఉంది. ప్రారంభించడానికి క్రింద క్లిక్ చేయండి.",
      btnStartLocation: "లైవ్ లొకేషన్ షేర్ చేయండి",
      btnStopLocation: "లైవ్ లొకేషన్ వెంటనే ఆపండి",
      btnSimulateLoc: "లొకేషన్ అనుకరణ (డెమో)",
      servicesTitle: "నేరుగా అత్యవసర సేవలు",
      servicesSubtitle: "తక్షణ సహాయం కోసం సింగిల్-ట్యాప్ ఫోన్ లింక్‌లు",
      policeBadge: "శాంతిభద్రతలు",
      policeTitle: "పోలీస్ శాఖ",
      policeDesc: "తక్షణ భద్రత, నేరాల నివారణ మరియు అత్యవసర స్పందన కోసం.",
      ambulanceBadge: "వైద్య సహాయం",
      ambulanceTitle: "అంబులెన్స్ సేవలు",
      ambulanceDesc: "రోగుల తరలింపు మరియు అత్యవసర వైద్య సేవల కోసం.",
      fireBadge: "అగ్నిమాపక & రక్షణ",
      fireTitle: "అగ్నిమాపక దళం",
      fireDesc: "అగ్నిప్రమాదాలు మరియు ప్రమాదకర రక్షణ చర్యల కోసం.",
      allInOneBadge: "ఆల్-ఇన్-వన్ హెల్ప్‌లైన్",
      emergencyTitle: "జాతీయ అత్యవసర నంబర్",
      emergencyDesc: "భారతదేశం అంతటా ఏకీకృత అత్యవసర ప్రతిస్పందన నంబర్ (112).",
      helplinesTitle: "ప్రత్యేక హెల్ప్‌లైన్లు",
      helplinesSubtitle: "ప్రత్యేక వర్గాల కోసం అంకితమైన సహాయ కేంద్రాలు",
      womenHelplineTitle: "మహిళా హెల్ప్‌లైన్",
      womenHelplineDesc: "మహిళలకు 24/7 రహస్య భద్రత & సంక్షోభ సహాయం",
      childHelplineTitle: "చైల్డ్ హెల్ప్‌లైన్",
      childHelplineDesc: "రక్షణ అవసరమైన పిల్లల కోసం అత్యవసర సంరక్షణ",
      seniorHelplineTitle: "వయోవృద్ధుల హెల్ప్‌లైన్",
      seniorHelplineDesc: "వృద్ధుల భద్రత, సంరక్షణ మరియు వేధింపుల నివారణ",
      contactsTitle: "నమ్మకమైన అత్యవసర పరిచయాలు",
      contactsSubtitle: "మీ SOS హెచ్చరికలను స్వీకరించే ధృవీకరించబడిన పరిచయాలు",
      addContactBtn: "పరిచయాన్ని జోడించండి",
      contactsNotice: "SOS బ్యాడ్జ్ ఉన్న పరిచయాలకు మాత్రమే హెచ్చరికలు పంపబడతాయి.",
      firstAidTitle: "అత్యవసర ప్రథమ చికిత్స",
      firstAidSubtitle: "కీలక వైద్య పరిస్థితుల కోసం దశలవారీ మార్గదర్శకత్వం",
      faCuts: "గాయాలు మరియు రక్తస్రావం",
      faCutsShort: "ఒత్తిడి చేయడం, శుభ్రపరచడం, కట్టు కట్టడం",
      faBurns: "కాలిన గాయాలు",
      faBurnsShort: "చల్లటి నీరు, చర్మ రక్షణ, బొబ్బలు పగలగొట్టవద్దు",
      faFainting: "సృహతప్పడం",
      faFaintingShort: "కాళ్ళు పైకి ఎత్తడం, గాలి తగలనివ్వడం",
      faChoking: "గొంతులో అడ్డుపడటం",
      faChokingShort: "వీపుపై కొట్టడం, హెమ్లిచ్ పద్ధతి",
      faFractures: "ఎముకల విరుపులు & బెణుకులు",
      faFracturesShort: "కదలకుండా ఉంచడం, మంచు గడ్డలు, మద్దతు",
      faNosebleeds: "ముక్కు నుంచి రక్తం కారడం",
      faNosebleedsShort: "ముందుకు వంగడం, ముక్కు పట్టుకోవడం",
      faShock: "విద్యుత్ షాక్",
      faShockShort: "విద్యుత్ ఆపడం, శ్వాస తనిఖీ, 108 కు కాల్",
      faCpr: "CPR అత్యవసర ప్రతిస్పందన",
      faCprShort: "ఛాతీపై ఒత్తిడి (నిమిషానికి 100-120 సార్లు)",
      viewGuide: "గైడ్ చూడండి",
      firstAidDisclaimer: "ముఖ్య గమనిక: ఇది ప్రాథమిక సమాచారం మాత్రమే. తీవ్ర పరిస్థితుల్లో వెంటనే 108 లేదా 112 కు కాల్ చేయండి.",
      monitorTitle: "అత్యవసర కాంటాక్ట్ లైవ్ మానిటర్",
      monitorSubtitle: "సంరక్షకులు వీక్షించే రియల్-టైమ్ స్క్రీన్",
      syncedLive: "లైవ్ డేటా సింక్ అయింది",
      statusNormal: "సాధారణం / సురక్షితం",
      alertBroadcastTitle: "SOS ప్రసార స్థితి",
      noEmergencyTitle: "ఎటువంటి అత్యవసర పరిస్థితి లేదు",
      noEmergencyDesc: "వినియోగదారు సురక్షితంగా ఉన్నారు. వ్యవస్థ సిద్ధంగా ఉంది.",
      activeEmergencyTitle: "అత్యవసర SOS సందేశం అందింది!",
      activeEmergencyDesc: "వినియోగదారు హెచ్చరికను ప్రారంభించారు. లొకేషన్ తనిఖీ చేయండి.",
      sharedLocationTitle: "ప్రత్యక్ష స్థాన సమాచారం",
      sharedLocationSubtitle: "వినియోగదారు అనుమతి ఇచ్చినప్పుడు రియల్-టైమ్ GPS స్ట్రీమ్",
      sharingStopped: "లొకేషన్ షేరింగ్ ఆగిపోయింది",
      sharingActiveStream: "లైవ్ జీపీఎస్ నడుస్తోంది",
      monLat: "అక్షాంశం",
      monLng: "రేఖాంశం",
      monAccuracy: "ఖచ్చితత్వం",
      monReceived: "నవీకరణ సమయం",
      monMapStandby: "స్థాన సమాచారం కోసం వేచి చూస్తోంది.",
      callPoliceBtn: "పోలీసులకు కాల్ చేయండి (112)",
      callAmbulanceBtn: "అంబులెన్స్‌కు కాల్ చేయండి (108)",
      getDirectionsBtn: "దిశలను తెరవండి",
      eventLogTitle: "కార్యకలాపాల లాగ్",
      eventLogSubtitle: "భద్రతా హెచ్చరికల వివరాల జాబితా",
      footerDesc: "SafeContact కళాశాల ప్రాజెక్ట్ మరియు వ్యక్తిగత భద్రత కోసం రూపొందించబడింది.",
      quickHelplines: "త్వరిత హెల్ప్‌లైన్లు",
      demoArch: "సాంకేతిక నిర్మాణం",
      footerCopyright: "© 2026 SafeContact Platform. కళాశాల ప్రాజెక్ట్ డెమో కోసం.",
      collegeReady: "కాలేజ్ ప్రాజెక్ట్ డెమో ఎడిషన్",
      regTitle: "SafeContact కు స్వాగతం",
      regSubtitle: "మీ భద్రతా ప్రొఫైల్‌ను పూర్తి చేయండి",
      regPrivacyNote: "గోప్యతా నోటీసు: వివరాలు బ్రౌజర్‌లో సురక్షితంగా నిల్వ చేయబడతాయి.",
      lblFullName: "పూర్తి పేరు",
      lblPhone: "ఫోన్ నంబర్",
      lblEmail: "ఈమెయిల్ చిరునామా",
      lblAge: "వయస్సు",
      lblEmergencyContactHeader: "ప్రధాన అత్యవసర పరిచయం",
      lblEmContactName: "పరిచయం పేరు",
      lblEmContactPhone: "పరిచయం ఫోన్ నంబర్",
      btnSaveContinue: "సేవ్ చేసి కొనసాగించండి",
      sosConfirmHeader: "SOS ని నిర్ధారించండి",
      sosConfirmSubtitle: "ఇది మీ పరిచయాలను హెచ్చరిస్తుంది",
      sosConfirmBody: "మీరు ఖచ్చితంగా అత్యవసర SOS హెచ్చరికను పంపాలనుకుంటున్నారా?",
      autoConfirmIn: "ప్రారంభమవుతోంది",
      btnCancel: "రద్దు చేయండి",
      btnConfirmSosNow: "అవును, ఇప్పుడే పంపండి",
      locConsentHeader: "లైవ్ లొకేషన్ పంచుకోవాలా?",
      locConsentSubtitle: "అత్యవసర ప్రసారానికి అనుమతి అవసరం",
      locConsentBody: "అత్యవసర సమయంలో మీ స్థానాన్ని చూపించడానికి SafeContact అనుమతి కోరుతోంది.",
      consentBullet1: "అనుమతించబడిన పరిచయాలతో మాత్రమే భాగస్వామ్యం చేయబడుతుంది.",
      consentBullet2: "ఎప్పుడైనా షేరింగ్‌ను ఆపివేయవచ్చు.",
      consentBullet3: "అనుమతి లేకుండా డేటా నిల్వ చేయబడదు.",
      btnNotNow: "ఇప్పుడు కాదు",
      btnAgreeShare: "అంగీకరించి పంచుకోండి",
      pinConfigHeader: "సెక్యూరిటీ పిన్ రక్షణ",
      pinConfigSubtitle: "4-అంకెల పిన్ సెట్ చేయండి",
      lblCreatePin: "కొత్త పిన్",
      lblConfirmPin: "పిన్ నిర్ధారించండి",
      pinLocalNote: "ప్రెజెంటేషన్ కోసం స్థానిక పిన్ సౌకర్యం.",
      btnRemovePin: "పిన్ తొలగించండి",
      btnSavePin: "పిన్ సేవ్ చేయండి",
      addContactTitle: "పరిచయాన్ని జోడించండి",
      addContactSubtitle: "పరిచయ వివరాలను నమోదు చేయండి",
      lblName: "పేరు",
      lblRelationship: "సంబంధం",
      lblReceivesSos: "ఈ పరిచయానికి SOS పంపండి",
      btnSaveContact: "సేవ్ చేయండి",
      faStepByStep: "తక్షణ చర్యలు:",
      faDoNot: "చేయకూడనివి:",
      faWhenToCall: "108 / 112 కు ఎప్పుడు కాల్ చేయాలి:",
      btnClose: "మూసివేయండి"
    },

    ta: {
      tagline: "“உங்கள் பாதுகாப்பு, எப்போதும் உங்கள் கைக்கெட்டும் தூரத்தில்!”",
      statusProtected: "அமைப்பு பாதுகாப்பானது",
      statusSosActive: "SOS எச்சரிக்கை செயலில் உள்ளது",
      dualView: "இரட்டை பார்வை",
      userView: "பயனர்",
      monitorView: "கண்காணிப்பு",
      pinNav: "பின்",
      sosActiveAlert: "அவசர SOS எச்சரிக்கை செயலில் உள்ளது!",
      resolveSos: "எச்சரிக்கையை தீர்க்கவும்",
      pinLockedHeading: "பாதுகாக்கப்பட்ட பகுதி",
      pinLockedDesc: "டாஷ்போர்டை அணுக உங்கள் 4 இலக்க பாதுகாப்பு பின்னை உள்ளிடவும்.",
      pinIncorrect: "தவறான பின். மீண்டும் முயற்சிக்கவும்.",
      unlock: "திறக்கவும்",
      pinNote: "மாதிரி பூட்டு: செயல்விளக்கத்திற்கான உள்ளூர் பின் சரிபார்ப்பு.",
      userDashboardTitle: "பயனர் பாதுகாப்பு டாஷ்போர்டு",
      userDashboardSubtitle: "உடனடி அவசர உதவி மற்றும் பாதுகாப்பு கட்டுப்பாடுகள்",
      activeUser: "செயலில் உள்ள சுயவிவரம்",
      emergencyTriggerEyebrow: "அவசர உதவி",
      sosButtonTitle: "உடனடி அவசர SOS",
      sosButtonSubtitle: "உங்கள் அவசர தொடர்புகளுக்கு எச்சரிக்கை அனுப்புகிறது. இருப்பிட பகிர்வு அனுமதி சார்ந்தது.",
      sosStatusLabel: "தற்போதைய நிலை:",
      statusSecure: "பாதுகாப்பானது / செயலற்றது",
      statusActive: "செயலில் உள்ள அவசரநிலை",
      sosPressAction: "எச்சரிக்க அழுத்தவும்",
      sosConfirmHint: "தவறுதலாக அழுத்துவதை தவிர்க்க உறுதிப்படுத்தல் உள்ளது",
      cancelSosBtn: "SOS ரத்து செய் / தீர்க்கவும்",
      liveLocationTitle: "அனுமதி சார்ந்த நேரலை இருப்பிடம்",
      liveLocationSubtitle: "உங்கள் வெளிப்படையான அனுமதியுடன் மட்டுமே ஜிபிஎஸ் இருப்பிடத்தை பகிரவும்",
      locStatusOff: "இருப்பிட பகிர்வு: முடக்கப்பட்டுள்ளது",
      locStatusOn: "இருப்பிட பகிர்வு: செயலில் உள்ளது",
      locStatusStopped: "இருப்பிட பகிர்வு: நிறுத்தப்பட்டது",
      whyLocationTitle: "இருப்பிட அனுமதி ஏன் தேவை:",
      whyLocationDesc: "அவசர காலங்களில் உங்கள் பாதுகாவலர்களுக்கு துல்லியமான இடத்தை காட்ட மட்டுமே அனுமதி கோரப்படுகிறது.",
      latitudeLabel: "அட்சரேகை (Lat)",
      longitudeLabel: "தீர்க்கரேகை (Lng)",
      accuracyLabel: "துல்லியம்",
      lastUpdatedLabel: "கடைசி புதுப்பிப்பு",
      mapStandby: "இருப்பிட பகிர்வு முடக்கப்பட்டுள்ளது. தொடங்க கீழே கிளிக் செய்யவும்.",
      btnStartLocation: "நேரலை இடத்தை பகிரவும்",
      btnStopLocation: "நேரலை இடத்தை உடனே நிறுத்தவும்",
      btnSimulateLoc: "போலி இயக்கம் (டெமோ)",
      servicesTitle: "நேரடி அவசர சேவைகள்",
      servicesSubtitle: "உடனடி உதவிக்கான தொலைபேசி இணைப்புகள்",
      policeBadge: "சட்டம் ஒழுங்கு",
      policeTitle: "காவல்துறை",
      policeDesc: "உடனடி பாதுகாப்பு, குற்றத் தடுப்பு மற்றும் அவசர நடவடிக்கைகளுக்கு.",
      ambulanceBadge: "மருத்துவ ஆதரவு",
      ambulanceTitle: "ஆம்புலன்ஸ் சேவை",
      ambulanceDesc: "நோயாளி போக்குவரத்து மற்றும் அவசர மருத்துவ உதவிக்கு.",
      fireBadge: "தீயணைப்பு & மீட்பு",
      fireTitle: "தீயணைப்பு படை",
      fireDesc: "தீ விபத்துக்கள் மற்றும் ஆபத்தான மீட்பு பணிகளுக்கு.",
      allInOneBadge: "அனைத்து அவசர உதவி",
      emergencyTitle: "தேசிய அவசர எண்",
      emergencyDesc: "இந்தியா முழுமைக்குமான ஒருங்கிணைந்த அவசர உதவி எண் (112).",
      helplinesTitle: "சிறப்பு உதவி எண்கள்",
      helplinesSubtitle: "குறிப்பிட்ட பிரிவினருக்கான பிரத்யேக உதவி மையங்கள்",
      womenHelplineTitle: "பெண்கள் உதவி எண்",
      womenHelplineDesc: "பெண்களுக்கான 24/7 ரகசிய பாதுகாப்பு & அவசர உதவி",
      childHelplineTitle: "குழந்தைகள் உதவி எண்",
      childHelplineDesc: "பாதுகாப்பு தேவைப்படும் குழந்தைகளுக்கான அவசர உதவி",
      seniorHelplineTitle: "மூத்த குடிமக்கள் உதவி எண்",
      seniorHelplineDesc: "முதியோர் பாதுகாப்பு மற்றும் கொடுமை தடுப்பு சேவைகள்",
      contactsTitle: "நம்பகமான அவசர தொடர்புகள்",
      contactsSubtitle: "உங்கள் SOS எச்சரிக்கைகளை பெறும் அங்கீகரிக்கப்பட்ட நபர்கள்",
      addContactBtn: "தொடர்பை சேர்க்கவும்",
      contactsNotice: "SOS பேட்ஜ் உள்ள தொடர்புகளுக்கு மட்டுமே எச்சரிக்கை அனுப்பப்படும்.",
      firstAidTitle: "அவசர முதலுதவி வழிகாட்டி",
      firstAidSubtitle: "முக்கியமான மருத்துவ சூழ்நிலைகளுக்கான படிப்படியான வழிகாட்டுதல்",
      faCuts: "வெட்டுக்காயங்கள் மற்றும் இரத்தப்போக்கு",
      faCutsShort: "நேரடி அழுத்தம், சுத்தம் செய்தல், கட்டு போடுதல்",
      faBurns: "தீக்காயங்கள்",
      faBurnsShort: "குளிர்ந்த நீர், சரும பாதுகாப்பு, கொப்புளங்களை உடைக்காதீர்",
      faFainting: "மயக்கம்",
      faFaintingShort: "கால்களை உயர்த்துதல், காற்று வர செய்தல்",
      faChoking: "மூச்சுத் திணறல் / தொண்டை அடைப்பு",
      faChokingShort: "முதுகில் தட்டுதல், ஹெம்லிச் முறை",
      faFractures: "எலும்பு முறிவு & சுளுக்கு",
      faFracturesShort: "அசைக்காமல் இருத்தல், ஐஸ் ஒத்தடம், தாங்குதல்",
      faNosebleeds: "மூக்கில் இரத்தப்போக்கு",
      faNosebleedsShort: "முன்னோக்கி சாய்ந்து மூக்கை பிடித்தல்",
      faShock: "மின்சார அதிர்ச்சி (Electric Shock)",
      faShockShort: "மின் இணைப்பை துண்டித்தல், சுவாசம் சோதித்தல், 108 ஐ அழைக்கவும்",
      faCpr: "CPR அவசர முதலுதவி",
      faCprShort: "மார்பு அழுத்தம் (நிமிடத்திற்கு 100-120 முறை)",
      viewGuide: "வழிகாட்டியை பார்க்கவும்",
      firstAidDisclaimer: "முக்கிய குறிப்பு: இது முதற்கட்ட தகவல் மட்டுமே. அவசர காலங்களில் உடனடியாக 108 அல்லது 112 ஐ அழைக்கவும்.",
      monitorTitle: "அவசர தொடர்பு நேரலை கண்காணிப்பு",
      monitorSubtitle: "பாதுகாவலர்கள் பார்க்கும் நிகழ்நேர திரை",
      syncedLive: "நேரலை தரவு இணைக்கப்பட்டது",
      statusNormal: "வழக்கமானது / பாதுகாப்பானது",
      alertBroadcastTitle: "SOS ஒளிபரப்பு நிலை",
      noEmergencyTitle: "அவசரநிலை எதுவும் இல்லை",
      noEmergencyDesc: "பயனர் பாதுகாப்பாக உள்ளார். அமைப்பு தயார் நிலையில் உள்ளது.",
      activeEmergencyTitle: "SOS அவசர செய்தி பெறப்பட்டது!",
      activeEmergencyDesc: "பயனர் எச்சரிக்கையை இயக்கியுள்ளார். இருப்பிடத்தை சரிபார்க்கவும்.",
      sharedLocationTitle: "நேரலை இருப்பிட தகவல்",
      sharedLocationSubtitle: "பயனர் அனுமதி அளித்தால் நிகழ்நேர ஜிபிஎஸ் காண்பிக்கப்படும்",
      sharingStopped: "இருப்பிட பகிர்வு நிறுத்தப்பட்டது",
      sharingActiveStream: "நேரலை ஜிபிஎஸ் இயங்குகிறது",
      monLat: "அட்சரேகை",
      monLng: "தீர்க்கரேகை",
      monAccuracy: "துல்லியம்",
      monReceived: "புதுப்பிப்பு நேரம்",
      monMapStandby: "இருப்பிட தகவலுக்காக காத்திருக்கிறது.",
      callPoliceBtn: "காவல்துறையை அழைக்கவும் (112)",
      callAmbulanceBtn: "ஆம்புலன்ஸை அழைக்கவும் (108)",
      getDirectionsBtn: "திசைகளை திறக்கவும்",
      eventLogTitle: "பாதுகாப்பு நடவடிக்கை பதிவு",
      eventLogSubtitle: "அனைத்து நிகழ்வுகளின் காலவரிசை பட்டியல்",
      footerDesc: "SafeContact கல்லூரி திட்டம் மற்றும் தனிநபர் பாதுகாப்பிற்காக உருவாக்கப்பட்டது.",
      quickHelplines: "அவசர எண்கள்",
      demoArch: "தொழில்நுட்ப கட்டமைப்பு",
      footerCopyright: "© 2026 SafeContact Platform. கல்லூரி திட்ட செயல்விளக்கத்திற்காக.",
      collegeReady: "கல்லூரி திட்ட டெமோ பதிப்பு",
      regTitle: "SafeContact-க்கு வரவேற்கிறோம்",
      regSubtitle: "தொடங்க உங்கள் பாதுகாப்பு விவரங்களை பூர்த்தி செய்யவும்",
      regPrivacyNote: "தனியுரிமை அறிவிப்பு: விவரங்கள் உலாவியில் மட்டுமே பாதுகாப்பாக சேமிக்கப்படும்.",
      lblFullName: "முழு பெயர்",
      lblPhone: "தொலைபேசி எண்",
      lblEmail: "மின்னஞ்சல் முகவரி",
      lblAge: "வயது",
      lblEmergencyContactHeader: "முதன்மை அவசர தொடர்பு",
      lblEmContactName: "தொடர்பு நபர் பெயர்",
      lblEmContactPhone: "தொடர்பு தொலைபேசி எண்",
      btnSaveContinue: "சேமித்து தொடரவும்",
      sosConfirmHeader: "SOS எச்சரிக்கையை உறுதிப்படுத்தவும்",
      sosConfirmSubtitle: "இது உங்கள் அவசர தொடர்புகளை எச்சரிக்கும்",
      sosConfirmBody: "அவசர SOS எச்சரிக்கையை நிச்சயமாக இயக்க விரும்புகிறீர்களா?",
      autoConfirmIn: "இயங்குகிறது",
      btnCancel: "ரத்து செய்",
      btnConfirmSosNow: "ஆம், உடனே அனுப்பவும்",
      locConsentHeader: "நேரலை இருப்பிடத்தை பகிரவா?",
      locConsentSubtitle: "அவசர ஒளிபரப்பிற்கு அனுமதி தேவை",
      locConsentBody: "அவசர காலத்தில் உங்கள் இருப்பிடத்தை காட்ட SafeContact அனுமதி கேட்கிறது.",
      consentBullet1: "அனுமதிக்கப்பட்ட தொடர்புகளுடன் மட்டுமே பகிரப்படும்.",
      consentBullet2: "எந்த நேரத்திலும் பகிர்வை நிறுத்தலாம்.",
      consentBullet3: "அனுமதியின்றி எந்த தரவும் சேமிக்கப்படாது.",
      btnNotNow: "இப்போது வேண்டாம்",
      btnAgreeShare: "ஒப்புக்கொண்டு பகிரவும்",
      pinConfigHeader: "பாதுகாப்பு பின் பூட்டு",
      pinConfigSubtitle: "4 இலக்க பின்னை அமைக்கவும்",
      lblCreatePin: "புதிய பின்",
      lblConfirmPin: "பின்னை உறுதிப்படுத்தவும்",
      pinLocalNote: "விளக்கக்காட்சிக்கான உள்ளூர் பின் பாதுகாப்பு.",
      btnRemovePin: "பின்னை நீக்கு",
      btnSavePin: "பின்னை சேமிக்கவும்",
      addContactTitle: "தொடர்பை சேர்க்கவும்",
      addContactSubtitle: "விவரங்களை உள்ளிடவும்",
      lblName: "பெயர்",
      lblRelationship: "உறவுமுறை",
      lblReceivesSos: "இந்த நபருக்கு SOS அனுப்பவும்",
      btnSaveContact: "சேமிக்கவும்",
      faStepByStep: "உடனடி நடவடிக்கைகள்:",
      faDoNot: "செய்யக்கூடாதவை:",
      faWhenToCall: "எப்போது 108 / 112 ஐ அழைக்க வேண்டும்:",
      btnClose: "மூடவும்"
    }
  };

  // =========================================================================
  // 2. FIRST AID KNOWLEDGE REPOSITORY (8 DETAILED TOPICS)
  // =========================================================================
  const FIRST_AID_DATA = {
    cuts: {
      title: "Cuts and Bleeding",
      urgency: "Immediate Action Required",
      icon: "fa-bandage",
      overview: "Minor cuts bleed briefly and stop with gentle pressure. Severe arterial bleeding spurts or flows heavily and requires prompt emergency management to prevent shock and excessive blood loss.",
      steps: [
        "Apply direct, steady pressure immediately onto the wound using a clean gauze, sterile cloth, or clean hands if dressings are unavailable.",
        "Elevate the injured limb above heart level (if no fracture is suspected) while continuing steady pressure.",
        "Maintain continuous pressure for at least 5 to 10 minutes without lifting the dressing to peek.",
        "Once bleeding subsides, gently clean the perimeter with mild soap and clean water. Avoid scrubbing inside deep wounds.",
        "Secure a sterile dressing firmly with a bandage. If blood soaks through, add another layer on top; do not remove the original dressing."
      ],
      warnings: [
        "DO NOT remove embedded objects (such as knife tips or deep glass shards). Bandage around them to stabilize.",
        "DO NOT apply a makeshift tourniquet unless you are trained and bleeding is catastrophic and uncontrolled.",
        "DO NOT use dirty rags, soil, or unsterile powders on open wounds."
      ],
      whenToCall: "Call 108/112 immediately if bleeding spurts, does not stop after 10 minutes of direct pressure, the wound is gaping or over a joint, or if the victim shows signs of pale, cold, clammy shock."
    },

    burns: {
      title: "Burns & Scalds",
      urgency: "Thermal Injury Protocol",
      icon: "fa-fire",
      overview: "Burns result from heat, chemicals, sunlight, or electricity. Swift, appropriate cooling minimizes tissue destruction and reduces long-term scarring.",
      steps: [
        "Cool the burn immediately under cool, gently running tap water for at least 10 to 20 minutes.",
        "Carefully remove rings, watches, belts, and loose clothing near the burned area before swelling occurs.",
        "Cover the cooled burn loosely with sterile non-stick dressing, clean plastic wrap, or a clean lint-free cloth.",
        "Keep the person warm with a blanket around unaffected areas to prevent hypothermia during prolonged cooling."
      ],
      warnings: [
        "DO NOT use ice, ice water, butter, toothpaste, or greasy ointments. Ice causes further tissue necrosis.",
        "DO NOT break or prick intact blisters; unbroken blisters protect against severe bacterial infection.",
        "DO NOT forcibly pull away clothing that is melted or stuck to the burned skin."
      ],
      whenToCall: "Call 108/112 immediately for burns covering larger than the victim's palm, electrical or chemical burns, burns on the face, hands, groin, or joints, or if the skin looks charred, leathery, or white."
    },

    fainting: {
      title: "Fainting & Syncope",
      urgency: "Consciousness Recovery",
      icon: "fa-person-falling",
      overview: "Fainting is a temporary loss of consciousness caused by a brief drop in blood flow to the brain. Most episodes resolve quickly when blood flow is restored.",
      steps: [
        "Position the person flat on their back on a safe, level surface.",
        "Elevate their legs about 12 inches (30 cm) above heart level to assist venous blood return to the brain.",
        "Loosen tight collars, ties, belts, or restrictive clothing.",
        "Ensure adequate fresh air circulation; ask bystanders to step back.",
        "If the person does not regain consciousness within 1 minute or vomits, gently turn them into the recovery position on their side."
      ],
      warnings: [
        "DO NOT attempt to force the person to sit or stand up rapidly after regaining consciousness.",
        "DO NOT splash cold water on their face, slap them, or administer smelling salts.",
        "DO NOT give any food, water, or medication until they are fully alert and oriented."
      ],
      whenToCall: "Call 108/112 immediately if the person remains unresponsive for more than 1 minute, experiences chest pain or irregular heartbeat before fainting, sustained a head injury from the fall, or has seizures."
    },

    choking: {
      title: "Choking (Foreign Body Airway Obstruction)",
      urgency: "Life-Threatening Emergency",
      icon: "fa-lungs",
      overview: "Choking occurs when an object blocks the airway. If the victim can cough forcefully or speak, encourage them to keep coughing. If they cannot make sound, act immediately.",
      steps: [
        "Stand slightly behind and to the side of the victim. Support their chest with one hand and lean them forward.",
        "Deliver up to 5 sharp back blows between the shoulder blades using the heel of your hand.",
        "If back blows fail, perform abdominal thrusts (Heimlich Maneuver): Stand behind, wrap your arms around their waist.",
        "Make a fist with one hand and place the thumb side just above the navel, well below the breastbone.",
        "Grasp your fist with your other hand and give quick, inward-and-upward thrusts up to 5 times.",
        "Alternate between 5 back blows and 5 abdominal thrusts until the blockage clears or the person becomes unresponsive."
      ],
      warnings: [
        "DO NOT perform blind finger sweeps in the mouth, as this may push the obstruction deeper into the airway.",
        "DO NOT use abdominal thrusts on infants under 1 year (use back slaps and gentle chest thrusts instead).",
        "DO NOT delay calling for emergency assistance if the obstruction does not clear within 30 seconds."
      ],
      whenToCall: "Call 108/112 immediately as soon as a victim cannot speak, breathe, or cough, or if they lose consciousness. If unconscious, begin chest compressions (CPR) immediately."
    },

    fractures: {
      title: "Fractures & Musculoskeletal Injuries",
      urgency: "Immobilization Protocol",
      icon: "fa-bone",
      overview: "Fractures involve broken bones, while sprains and strains involve ligaments and tendons. Immobilization prevents bone fragments from damaging nerves and blood vessels.",
      steps: [
        "Keep the injured limb completely still and supported in the position it was found.",
        "If trained, immobilize the joint above and below the fracture using a padded splint or rolled cardboard/magazine.",
        "Apply an ice pack wrapped in a cloth to reduce swelling and ease pain (20 minutes on, 20 minutes off).",
        "If skin is punctured (open fracture), cover gently with a sterile cloth without pressing on protruding bone."
      ],
      warnings: [
        "DO NOT try to realign, straighten, or push broken bones back into place.",
        "DO NOT allow the person to walk on an injured leg, ankle, or foot.",
        "DO NOT apply ice directly to bare skin without a protective towel or cloth."
      ],
      whenToCall: "Call 108/112 immediately for suspected spinal, neck, or pelvic trauma, open fractures with protruding bone, heavy bleeding, or if the limb distal to the fracture is cold, numb, or blue."
    },

    nosebleeds: {
      title: "Nosebleeds (Epistaxis)",
      urgency: "Standard First Aid",
      icon: "fa-droplet",
      overview: "Nosebleeds are common and usually stem from delicate blood vessels in the front nasal septum. Proper positioning and steady compression stop the vast majority.",
      steps: [
        "Have the person sit upright and lean their head slightly forward (not backward).",
        "Using thumb and index finger, firmly pinch the soft, fleshy lower part of the nose just below the nasal bridge.",
        "Instruct the person to breathe through their mouth and maintain uninterrupted pinching for 10 to 15 minutes.",
        "Place a cool damp cloth or ice pack over the bridge of the nose and forehead to help constrict capillaries.",
        "After releasing, advise the person to avoid blowing or picking their nose or bending over for several hours."
      ],
      warnings: [
        "DO NOT tilt the head backward; this causes blood to drain down the throat, causing choking, coughing, or vomiting.",
        "DO NOT pack the nostrils with dry cotton wool or tissues that can stick and re-tear delicate vessels on removal."
      ],
      whenToCall: "Call 108/112 if bleeding persists after 20 minutes of firm direct pressure, follows a severe blow to the head, or causes difficulty breathing or lightheadedness."
    },

    shock: {
      title: "Electric Shock",
      urgency: "Hazard Scene Safety First",
      icon: "fa-bolt",
      overview: "Electric current causes burns, muscle spasms, arrhythmias, and cardiac arrest. Rescuer safety is paramount before touching any victim in contact with electrical current.",
      steps: [
        "DO NOT touch the victim until you are 100% certain the electrical current has been disconnected.",
        "Switch off the main circuit breaker or unplug the appliance immediately.",
        "If power cannot be cut, use a dry, non-conductive object (dry wooden broomstick, plastic rod) to separate the victim from the live source while standing on a dry insulated surface.",
        "Check victim's responsiveness and breathing. If unresponsive and not breathing normally, begin CPR immediately.",
        "If conscious, treat entry and exit burn wounds with clean dry dressings and treat for shock by keeping them warm."
      ],
      warnings: [
        "DO NOT touch the person with bare hands or conductive objects while current is still running.",
        "DO NOT approach high-voltage power lines (minimum safe distance is 10 meters / 30 feet) — alert the utility company and emergency services immediately."
      ],
      whenToCall: "Call 108/112 immediately for ALL electric shocks from main power grids, lightning, or high-voltage lines, even if the person feels fine, as delayed cardiac arrhythmias can occur hours later."
    },

    cpr: {
      title: "CPR & Emergency Cardiac Response",
      urgency: "Highest Critical Priority",
      icon: "fa-heart-pulse",
      overview: "Cardiopulmonary Resuscitation (CPR) maintains vital blood and oxygen flow to the brain and heart during sudden cardiac arrest until defibrillation and medical teams arrive.",
      steps: [
        "Check scene safety, tap the victim's collarbone firmly and shout, \"Are you okay?\"",
        "If unresponsive and not breathing (or only gasping agonal breaths), immediately shout for someone to call 108/112 and locate an AED.",
        "Place victim flat on their back on a firm, hard floor. Kneel beside their chest.",
        "Place the heel of one hand in the center of the chest (lower half of breastbone); interlock fingers of your second hand.",
        "Lock your elbows straight, position your shoulders directly above hands, and deliver firm chest compressions at 100 to 120 compressions per minute (tempo of \"Stayin' Alive\").",
        "Compress at least 2 inches (5 cm) deep and allow complete chest recoil between each compression.",
        "Continue high-quality compressions without stopping until professional medics arrive, an AED prompts to stop, or the victim visibly revives."
      ],
      warnings: [
        "DO NOT stop compressions for more than 10 seconds under any circumstances.",
        "DO NOT deliver rescue breaths if untrained; continuous hands-only CPR is highly effective.",
        "DO NOT place hands too low on the stomach or too high on the throat."
      ],
      whenToCall: "Immediately dial 108 and 112 before or while starting compressions. Cardiac arrest is fatal within minutes without immediate CPR."
    }
  };

  // =========================================================================
  // 3. APPLICATION STATE & STORAGE
  // =========================================================================
  const STORAGE_KEY_USER = "safecontact_user_v1";
  const STORAGE_KEY_SOS = "safecontact_sos_v1";
  const STORAGE_KEY_LOCATION = "safecontact_location_v1";
  const STORAGE_KEY_CONTACTS = "safecontact_contacts_v1";
  const STORAGE_KEY_EVENTS = "safecontact_events_v1";
  const STORAGE_KEY_LANG = "safecontact_lang_v1";
  const STORAGE_KEY_PIN = "safecontact_pin_v1";

  const BACKEND_BASE = "http://127.0.0.1:5000";

  let appState = {
    user: {
      name: "Jane Doe",
      phone: "+91 98765 43210",
      email: "jane.doe@example.com",
      age: 21,
      emergencyContactName: "Robert Doe (Father)",
      emergencyContactPhone: "+91 98765 43211",
      registered: true
    },
    sos: {
      isActive: false,
      activationTime: null,
      alertId: null,
      status: "SECURE" // SECURE, ACTIVE, RESOLVED
    },
    location: {
      isSharing: false,
      latitude: 28.6139,
      longitude: 77.2090,
      accuracy: 12.0,
      lastUpdated: null,
      watchId: null,
      simulatedInterval: null
    },
    contacts: [
      {
        id: "c-1",
        name: "Robert Doe",
        phone: "+91 98765 43211",
        relationship: "Father",
        receivesSOS: true,
        isPrimary: true
      },
      {
        id: "c-2",
        name: "Ananya Sharma",
        phone: "+91 98765 88990",
        relationship: "Friend",
        receivesSOS: true,
        isPrimary: false
      }
    ],
    events: [],
    lang: "en",
    pin: {
      code: "",
      hasPin: false,
      isLocked: false
    },
    viewMode: "split", // "split", "user", "monitor"
    backendOnline: false
  };

  // Leaflet map references
  let userMapInstance = null;
  let userMarker = null;
  let userCircle = null;

  let monitorMapInstance = null;
  let monitorMarker = null;
  let monitorCircle = null;

  // Broadcast channel for instantaneous cross-tab and dual dashboard sync
  let syncChannel = null;
  if ("BroadcastChannel" in window) {
    try {
      syncChannel = new BroadcastChannel("safecontact_sync");
      syncChannel.onmessage = function (ev) {
        if (ev.data && ev.data.type === "STATE_UPDATE") {
          loadStateFromStorage();
          renderAll();
        }
      };
    } catch (e) {
      console.warn("BroadcastChannel not supported", e);
    }
  }

  // =========================================================================
  // 4. STORAGE & BACKEND SYNC HELPERS
  // =========================================================================
  function loadStateFromStorage() {
    try {
      const savedUser = localStorage.getItem(STORAGE_KEY_USER);
      if (savedUser) appState.user = JSON.parse(savedUser);

      const savedSos = localStorage.getItem(STORAGE_KEY_SOS);
      if (savedSos) appState.sos = JSON.parse(savedSos);

      const savedLoc = localStorage.getItem(STORAGE_KEY_LOCATION);
      if (savedLoc) {
        const parsed = JSON.parse(savedLoc);
        appState.location.isSharing = parsed.isSharing || false;
        appState.location.latitude = parsed.latitude || 28.6139;
        appState.location.longitude = parsed.longitude || 77.2090;
        appState.location.accuracy = parsed.accuracy || 12.0;
        appState.location.lastUpdated = parsed.lastUpdated || null;
      }

      const savedContacts = localStorage.getItem(STORAGE_KEY_CONTACTS);
      if (savedContacts) appState.contacts = JSON.parse(savedContacts);

      const savedEvents = localStorage.getItem(STORAGE_KEY_EVENTS);
      if (savedEvents) appState.events = JSON.parse(savedEvents);

      const savedLang = localStorage.getItem(STORAGE_KEY_LANG);
      if (savedLang && TRANSLATIONS[savedLang]) appState.lang = savedLang;

      const savedPin = localStorage.getItem(STORAGE_KEY_PIN);
      if (savedPin) {
        appState.pin = JSON.parse(savedPin);
      }
    } catch (err) {
      console.error("Failed to load local storage:", err);
    }
  }

  function saveStateToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(appState.user));
      localStorage.setItem(STORAGE_KEY_SOS, JSON.stringify(appState.sos));
      localStorage.setItem(STORAGE_KEY_LOCATION, JSON.stringify({
        isSharing: appState.location.isSharing,
        latitude: appState.location.latitude,
        longitude: appState.location.longitude,
        accuracy: appState.location.accuracy,
        lastUpdated: appState.location.lastUpdated
      }));
      localStorage.setItem(STORAGE_KEY_CONTACTS, JSON.stringify(appState.contacts));
      localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(appState.events));
      localStorage.setItem(STORAGE_KEY_LANG, appState.lang);
      localStorage.setItem(STORAGE_KEY_PIN, JSON.stringify(appState.pin));

      if (syncChannel) {
        syncChannel.postMessage({ type: "STATE_UPDATE" });
      }
    } catch (err) {
      console.error("Failed to save state to localStorage:", err);
    }
  }

  function addAuditEvent(type, description, meta) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const event = {
      id: "ev-" + Date.now(),
      type: type, // "SOS", "SAFE", "LOCATION", "INFO"
      title: description,
      time: timeStr,
      meta: meta || ""
    };
    appState.events.unshift(event);
    if (appState.events.length > 40) appState.events.pop();
    saveStateToStorage();
    renderEventLog();
  }

  // Detect Flask backend on localhost:5000
  async function checkBackendAvailability() {
    const pill = document.getElementById("backendPill");
    const label = document.getElementById("backendStatusLabel");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);

      const res = await fetch(`${BACKEND_BASE}/api/health`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        appState.backendOnline = true;
        if (pill) {
          pill.className = "backend-pill online";
          pill.title = "Connected to Python Flask REST Backend on port 5000";
        }
        if (label) label.textContent = "Flask API Online";
        return true;
      }
    } catch (e) {
      // Backend not running, use robust local browser demo mode
    }

    appState.backendOnline = false;
    if (pill) {
      pill.className = "backend-pill local-demo";
      pill.title = "Running in Local Browser Demo Mode (Start app.py to enable Flask API)";
    }
    if (label) label.textContent = "Local Demo Mode";
    return false;
  }

  // =========================================================================
  // 5. TRANSLATION ENGINE & I18N
  // =========================================================================
  function setLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) langCode = "en";
    appState.lang = langCode;
    saveStateToStorage();

    const dict = TRANSLATIONS[langCode];

    // Apply translations to elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update select element value
    const langSelect = document.getElementById("langSelect");
    if (langSelect && langSelect.value !== langCode) {
      langSelect.value = langCode;
    }

    // Refresh dynamic components
    renderSosHero();
    renderMonitorArea();
    renderLocationStatus();
    renderContacts();
  }

  // =========================================================================
  // 6. INITIAL REGISTRATION & PROFILE MANAGEMENT
  // =========================================================================
  function checkFirstVisitRegistration() {
    const saved = localStorage.getItem(STORAGE_KEY_USER);
    if (!saved) {
      // First time visiting: open registration modal automatically
      openRegistrationModal(true);
    } else {
      updateUserHeaderProfile();
    }
  }

  function updateUserHeaderProfile() {
    const avatar = document.getElementById("headerAvatar");
    const nameLabel = document.getElementById("headerUserName");
    const monAvatar = document.getElementById("monUserAvatar");
    const monName = document.getElementById("monUserName");
    const monPhone = document.getElementById("monUserPhone");

    const initials = appState.user.name
      ? appState.user.name.split(" ").map(n => n[0]).join("").toUpperCase().substring(0, 2)
      : "SC";

    if (avatar) avatar.textContent = initials;
    if (nameLabel) nameLabel.textContent = appState.user.name || "Jane Doe";

    if (monAvatar) monAvatar.textContent = initials;
    if (monName) monName.textContent = appState.user.name || "Jane Doe";
    if (monPhone) monPhone.textContent = appState.user.phone || "";
  }

  function openRegistrationModal(isFirstTime = false) {
    const modal = document.getElementById("registrationModal");
    const closeBtn = document.getElementById("btnCloseRegModal");

    // Pre-fill inputs with current state
    document.getElementById("regFullName").value = appState.user.name || "";
    document.getElementById("regPhone").value = appState.user.phone || "";
    document.getElementById("regEmail").value = appState.user.email || "";
    document.getElementById("regAge").value = appState.user.age || "";
    document.getElementById("regEmContactName").value = appState.user.emergencyContactName || "";
    document.getElementById("regEmContactPhone").value = appState.user.emergencyContactPhone || "";

    clearRegistrationErrors();

    // Hide close button if strictly first-time mandatory registration
    if (closeBtn) {
      closeBtn.style.display = isFirstTime ? "none" : "block";
    }

    modal.classList.remove("hidden");
  }

  function closeRegistrationModal() {
    document.getElementById("registrationModal").classList.add("hidden");
  }

  function clearRegistrationErrors() {
    ["errFullName", "errPhone", "errEmail", "errAge", "errEmContactName", "errEmContactPhone"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = "";
    });
  }

  function handleRegistrationSubmit(e) {
    e.preventDefault();
    clearRegistrationErrors();

    const name = document.getElementById("regFullName").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const ageVal = document.getElementById("regAge").value.trim();
    const emName = document.getElementById("regEmContactName").value.trim();
    const emPhone = document.getElementById("regEmContactPhone").value.trim();

    let hasErrors = false;

    if (!name) {
      document.getElementById("errFullName").textContent = "Full name is required.";
      hasErrors = true;
    }

    const phoneRegex = /^[+]?[\d\s\-()]{7,18}$/;
    if (!phone || !phoneRegex.test(phone)) {
      document.getElementById("errPhone").textContent = "Please enter a valid phone number.";
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      document.getElementById("errEmail").textContent = "Please enter a valid email address.";
      hasErrors = true;
    }

    const age = parseInt(ageVal, 10);
    if (!ageVal || isNaN(age) || age < 1 || age > 120) {
      document.getElementById("errAge").textContent = "Please enter a valid age between 1 and 120.";
      hasErrors = true;
    }

    if (!emName) {
      document.getElementById("errEmContactName").textContent = "Emergency contact name is required.";
      hasErrors = true;
    }

    if (!emPhone || !phoneRegex.test(emPhone)) {
      document.getElementById("errEmContactPhone").textContent = "Please enter a valid emergency contact phone.";
      hasErrors = true;
    }

    if (hasErrors) return;

    // Update state
    appState.user = {
      name: name,
      phone: phone,
      email: email,
      age: age,
      emergencyContactName: emName,
      emergencyContactPhone: emPhone,
      registered: true
    };

    // Ensure contact is in list
    if (appState.contacts.length === 0 || !appState.contacts.some(c => c.isPrimary)) {
      appState.contacts.unshift({
        id: "c-primary",
        name: emName,
        phone: emPhone,
        relationship: "Primary Contact",
        receivesSOS: true,
        isPrimary: true
      });
    } else {
      // Update primary contact
      const prim = appState.contacts.find(c => c.isPrimary);
      if (prim) {
        prim.name = emName;
        prim.phone = emPhone;
      }
    }

    saveStateToStorage();
    updateUserHeaderProfile();
    renderContacts();
    closeRegistrationModal();

    addAuditEvent("INFO", `Profile saved for ${name}`, "Profile Updated");

    // Sync to backend if online
    if (appState.backendOnline) {
      fetch(`${BACKEND_BASE}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appState.user)
      }).catch(err => console.warn("Backend sync failed:", err));
    }
  }

  // =========================================================================
  // 7. SECURITY PIN WORKFLOW
  // =========================================================================
  function initPinControls() {
    const btnPinLock = document.getElementById("btnPinLock");
    const pinModal = document.getElementById("pinConfigModal");
    const btnClosePin = document.getElementById("btnClosePinModal");
    const btnSavePin = document.getElementById("btnSavePin");
    const btnRemovePin = document.getElementById("btnRemovePin");
    const lockedScreen = document.getElementById("pinLockedScreen");
    const btnUnlock = document.getElementById("btnSubmitUnlockPin");
    const unlockBoxes = document.querySelectorAll(".pin-box");

    btnPinLock.addEventListener("click", function () {
      if (appState.pin.hasPin && !appState.pin.isLocked) {
        // Toggle lock immediate or open settings
        openPinConfigModal();
      } else {
        openPinConfigModal();
      }
    });

    btnClosePin.addEventListener("click", () => pinModal.classList.add("hidden"));

    btnSavePin.addEventListener("click", function () {
      const p1 = document.getElementById("newPinInput").value.trim();
      const p2 = document.getElementById("confirmPinInput").value.trim();
      const err = document.getElementById("pinConfigError");

      if (!/^\d{4}$/.test(p1)) {
        err.textContent = "PIN must be exactly 4 numeric digits.";
        return;
      }
      if (p1 !== p2) {
        err.textContent = "PIN confirmation does not match.";
        return;
      }

      err.textContent = "";
      appState.pin.code = p1;
      appState.pin.hasPin = true;
      appState.pin.isLocked = false;
      saveStateToStorage();
      updatePinStatusUI();
      pinModal.classList.add("hidden");
      addAuditEvent("INFO", "Security PIN created and enabled", "PIN Security");
    });

    btnRemovePin.addEventListener("click", function () {
      appState.pin.code = "";
      appState.pin.hasPin = false;
      appState.pin.isLocked = false;
      saveStateToStorage();
      updatePinStatusUI();
      pinModal.classList.add("hidden");
      addAuditEvent("INFO", "Security PIN removed", "PIN Disabled");
    });

    // Auto-advance for PIN digits in unlock overlay
    unlockBoxes.forEach((box, idx) => {
      box.addEventListener("input", function (e) {
        if (box.value.length >= 1) {
          box.value = box.value.slice(0, 1);
          if (idx < unlockBoxes.length - 1) {
            unlockBoxes[idx + 1].focus();
          }
        }
      });

      box.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && box.value === "" && idx > 0) {
          unlockBoxes[idx - 1].focus();
        } else if (e.key === "Enter") {
          submitPinUnlock();
        }
      });
    });

    btnUnlock.addEventListener("click", submitPinUnlock);

    function submitPinUnlock() {
      let entered = "";
      unlockBoxes.forEach(b => entered += b.value);
      const err = document.getElementById("pinUnlockError");

      if (entered === appState.pin.code) {
        appState.pin.isLocked = false;
        lockedScreen.classList.add("hidden");
        err.classList.add("hidden");
        unlockBoxes.forEach(b => b.value = "");
      } else {
        err.classList.remove("hidden");
        unlockBoxes.forEach(b => {
          b.value = "";
          b.classList.add("shake");
          setTimeout(() => b.classList.remove("shake"), 400);
        });
        unlockBoxes[0].focus();
      }
    }
  }

  function openPinConfigModal() {
    const pinModal = document.getElementById("pinConfigModal");
    const statusText = document.getElementById("pinStatusText");
    const err = document.getElementById("pinConfigError");

    err.textContent = "";
    document.getElementById("newPinInput").value = "";
    document.getElementById("confirmPinInput").value = "";

    if (appState.pin.hasPin) {
      statusText.textContent = "Status: 4-digit PIN is active and protecting your dashboard.";
      document.getElementById("btnRemovePin").style.display = "inline-flex";
    } else {
      statusText.textContent = "Status: No PIN set. Anyone using this browser can view this interface.";
      document.getElementById("btnRemovePin").style.display = "none";
    }

    pinModal.classList.remove("hidden");
  }

  function updatePinStatusUI() {
    const pinIcon = document.getElementById("pinIcon");
    const pinButtonLabel = document.getElementById("pinButtonLabel");

    if (appState.pin.hasPin) {
      pinIcon.className = "fa-solid fa-lock";
      pinButtonLabel.textContent = "PIN (On)";
    } else {
      pinIcon.className = "fa-solid fa-lock-open";
      pinButtonLabel.textContent = "PIN";
    }
  }

  // =========================================================================
  // 8. SOS EMERGENCY WORKFLOW
  // =========================================================================
  let countdownTimer = null;
  let countdownSeconds = 3;

  function initSosWorkflow() {
    const btnSos = document.getElementById("btnSosTrigger");
    const btnConfirmImmediate = document.getElementById("btnConfirmSosImmediate");
    const btnCancelCountdown = document.getElementById("btnCancelSosCountdown");
    const btnCancelActive = document.getElementById("btnCancelSos");
    const btnBannerResolve = document.getElementById("btnBannerResolve");

    btnSos.addEventListener("click", function () {
      if (appState.sos.isActive) {
        // Already active, offer cancel
        resolveSosAlert();
      } else {
        openSosConfirmation();
      }
    });

    btnCancelCountdown.addEventListener("click", abortSosCountdown);
    btnConfirmImmediate.addEventListener("click", executeSosTrigger);

    btnCancelActive.addEventListener("click", resolveSosAlert);
    btnBannerResolve.addEventListener("click", resolveSosAlert);
  }

  function openSosConfirmation() {
    const modal = document.getElementById("sosConfirmModal");
    const numDisplay = document.getElementById("sosCountdownNumber");

    countdownSeconds = 3;
    numDisplay.textContent = countdownSeconds;
    modal.classList.remove("hidden");

    clearInterval(countdownTimer);
    countdownTimer = setInterval(function () {
      countdownSeconds--;
      numDisplay.textContent = countdownSeconds;
      if (countdownSeconds <= 0) {
        clearInterval(countdownTimer);
        executeSosTrigger();
      }
    }, 1000);
  }

  function abortSosCountdown() {
    clearInterval(countdownTimer);
    document.getElementById("sosConfirmModal").classList.add("hidden");
  }

  function executeSosTrigger() {
    clearInterval(countdownTimer);
    document.getElementById("sosConfirmModal").classList.add("hidden");

    const now = new Date();
    const alertId = "SC-SOS-" + Math.floor(10000 + Math.random() * 90000);
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    appState.sos.isActive = true;
    appState.sos.activationTime = timeStr;
    appState.sos.alertId = alertId;
    appState.sos.status = "ACTIVE";

    saveStateToStorage();
    renderSosHero();
    renderMonitorArea();

    addAuditEvent("SOS", `EMERGENCY SOS triggered (#${alertId})`, `Dispatched to ${appState.contacts.filter(c => c.receivesSOS).length} contacts`);

    // Synchronize to backend if online
    if (appState.backendOnline) {
      fetch(`${BACKEND_BASE}/api/sos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "trigger", source: "SafeContact User Dashboard" })
      }).catch(err => console.warn("Backend SOS dispatch notice:", err));
    }

    // Step 4: Ask user whether they want to share live location
    setTimeout(function () {
      openLocationConsentModal();
    }, 400);
  }

  function resolveSosAlert() {
    const confirmMsg = "Are you sure you want to resolve and cancel this Emergency SOS Alert? This will notify your emergency contacts that you are safe.";
    if (confirm(confirmMsg)) {
      appState.sos.isActive = false;
      appState.sos.status = "RESOLVED";

      // Stop location sharing automatically upon resolution for privacy
      if (appState.location.isSharing) {
        stopLiveLocation(false);
      }

      saveStateToStorage();
      renderSosHero();
      renderMonitorArea();

      addAuditEvent("SAFE", `SOS Alert #${appState.sos.alertId || "SC"} marked RESOLVED / SAFE`, "Resolved by user");

      if (appState.backendOnline) {
        fetch(`${BACKEND_BASE}/api/sos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "resolve" })
        }).catch(err => console.warn("Backend SOS resolve notice:", err));
      }
    }
  }

  function renderSosHero() {
    const dict = TRANSLATIONS[appState.lang];
    const btnSos = document.getElementById("btnSosTrigger");
    const badge = document.getElementById("sosStatusBadge");
    const activeControls = document.getElementById("sosActiveControls");
    const globalBanner = document.getElementById("sosGlobalBanner");
    const alertTitle = document.getElementById("activeAlertTitle");
    const alertTime = document.getElementById("activeAlertTime");
    const bannerDetails = document.getElementById("bannerDetailsText");
    const headerStatusPill = document.getElementById("headerStatusPill");
    const headerStatusText = document.getElementById("headerStatusText");

    if (appState.sos.isActive) {
      btnSos.classList.add("is-active-sos");
      badge.className = "meta-value badge-active";
      badge.textContent = dict.statusActive;

      activeControls.classList.remove("hidden");
      globalBanner.classList.remove("hidden");

      if (alertTitle) alertTitle.textContent = `SOS ALERT #${appState.sos.alertId} ACTIVE`;
      if (alertTime) alertTime.textContent = `Triggered at ${appState.sos.activationTime}`;
      if (bannerDetails) bannerDetails.textContent = `Alert #${appState.sos.alertId} dispatched at ${appState.sos.activationTime} to emergency contacts.`;

      if (headerStatusPill) headerStatusPill.className = "status-pill status-alert";
      if (headerStatusText) headerStatusText.textContent = dict.statusSosActive;
    } else {
      btnSos.classList.remove("is-active-sos");
      badge.className = "meta-value badge-secure";
      badge.textContent = dict.statusSecure;

      activeControls.classList.add("hidden");
      globalBanner.classList.add("hidden");

      if (headerStatusPill) headerStatusPill.className = "status-pill status-secure";
      if (headerStatusText) headerStatusText.textContent = dict.statusProtected;
    }
  }

  // =========================================================================
  // 9. CONSENT-BASED LIVE LOCATION ENGINE
  // =========================================================================
  function initLocationControls() {
    const btnStart = document.getElementById("btnStartLocation");
    const btnStop = document.getElementById("btnStopLocation");
    const btnSimulate = document.getElementById("btnSimulateLocation");
    const consentModal = document.getElementById("locationConsentModal");
    const btnAgree = document.getElementById("btnAgreeLocationConsent");
    const btnDecline = document.getElementById("btnDeclineLocationConsent");

    btnStart.addEventListener("click", function () {
      openLocationConsentModal();
    });

    btnAgree.addEventListener("click", function () {
      consentModal.classList.add("hidden");
      startLiveLocation();
    });

    btnDecline.addEventListener("click", function () {
      consentModal.classList.add("hidden");
      addAuditEvent("INFO", "Location sharing consent declined by user", "Privacy Choice");
    });

    btnStop.addEventListener("click", function () {
      stopLiveLocation(true);
    });

    btnSimulate.addEventListener("click", function () {
      simulateLocationMovement();
    });
  }

  function openLocationConsentModal() {
    document.getElementById("locationConsentModal").classList.remove("hidden");
  }

  function startLiveLocation() {
    const dict = TRANSLATIONS[appState.lang];

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser. Running simulated demo coordinates instead.");
      simulateLocationMovement();
      return;
    }

    // Stop simulation if running
    if (appState.location.simulatedInterval) {
      clearInterval(appState.location.simulatedInterval);
      appState.location.simulatedInterval = null;
    }

    appState.location.isSharing = true;

    const geoOptions = {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 15000
    };

    // Begin watching position with user consent
    appState.location.watchId = navigator.geolocation.watchPosition(
      function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const acc = Math.round(position.coords.accuracy);
        updateLocationCoordinates(lat, lng, acc, false);
      },
      function (err) {
        console.warn("Geolocation warning:", err.message);
        // Fallback for desktop demo without GPS hardware or local file permission issues
        alert("Real GPS location unavailable (" + err.message + "). SafeContact is activating Simulated Campus Movement to demonstrate live mapping for your presentation.");
        simulateLocationMovement();
      },
      geoOptions
    );

    saveStateToStorage();
    renderLocationStatus();
    renderMonitorArea();

    addAuditEvent("LOCATION", "Live location sharing activated with explicit consent", "GPS Active");
  }

  function stopLiveLocation(logUserAction = true) {
    if (appState.location.watchId !== null) {
      navigator.geolocation.clearWatch(appState.location.watchId);
      appState.location.watchId = null;
    }

    if (appState.location.simulatedInterval) {
      clearInterval(appState.location.simulatedInterval);
      appState.location.simulatedInterval = null;
    }

    appState.location.isSharing = false;
    saveStateToStorage();
    renderLocationStatus();
    renderMonitorArea();

    if (logUserAction) {
      addAuditEvent("LOCATION", "Live location sharing stopped by user", "Sharing Terminated");
    }

    if (appState.backendOnline) {
      fetch(`${BACKEND_BASE}/api/stop-location`, {
        method: "POST"
      }).catch(err => console.warn("Backend location stop notice:", err));
    }
  }

  function updateLocationCoordinates(lat, lng, accuracy, isSimulated = false) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    appState.location.latitude = lat;
    appState.location.longitude = lng;
    appState.location.accuracy = accuracy;
    appState.location.lastUpdated = timeStr;

    saveStateToStorage();
    renderLocationStatus();
    renderMonitorArea();
    updateLeafletMaps(lat, lng, accuracy);

    // Sync to backend if connected
    if (appState.backendOnline) {
      fetch(`${BACKEND_BASE}/api/location`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          latitude: lat,
          longitude: lng,
          accuracy: accuracy,
          isSharing: appState.location.isSharing
        })
      }).catch(err => console.warn("Location update failed:", err));
    }
  }

  // Simulation mode for college presentation demonstration
  function simulateLocationMovement() {
    if (appState.location.simulatedInterval) {
      clearInterval(appState.location.simulatedInterval);
      appState.location.simulatedInterval = null;
      stopLiveLocation(true);
      return;
    }

    appState.location.isSharing = true;

    // College campus demonstration coordinates path (starts at Delhi University / North Campus coordinates)
    const baseLat = 28.6892;
    const baseLng = 77.2104;
    let step = 0;

    // Initial point
    updateLocationCoordinates(baseLat, baseLng, 8.0, true);
    addAuditEvent("LOCATION", "Simulated Live Movement mode activated for demonstration", "Demo GPS");

    appState.location.simulatedInterval = setInterval(function () {
      step++;
      const deltaLat = Math.sin(step * 0.4) * 0.0006 + (step * 0.0001);
      const deltaLng = Math.cos(step * 0.4) * 0.0006;
      updateLocationCoordinates(baseLat + deltaLat, baseLng + deltaLng, Math.floor(5 + Math.random() * 8), true);
    }, 2500);

    renderLocationStatus();
  }

  function renderLocationStatus() {
    const dict = TRANSLATIONS[appState.lang];
    const badge = document.getElementById("locStatusBadge");
    const dot = document.getElementById("locStatusDot");
    const text = document.getElementById("locStatusText");
    const btnStart = document.getElementById("btnStartLocation");
    const btnStop = document.getElementById("btnStopLocation");
    const valLat = document.getElementById("valLat");
    const valLng = document.getElementById("valLng");
    const valAcc = document.getElementById("valAccuracy");
    const valUpdated = document.getElementById("valLastUpdated");
    const mapOverlay = document.getElementById("userMapOverlay");

    if (appState.location.isSharing) {
      dot.className = "badge-dot dot-active";
      text.textContent = dict.locStatusOn;
      btnStart.classList.add("hidden");
      btnStop.classList.remove("hidden");
      if (mapOverlay) mapOverlay.classList.add("hidden");

      if (valLat) valLat.textContent = appState.location.latitude.toFixed(5);
      if (valLng) valLng.textContent = appState.location.longitude.toFixed(5);
      if (valAcc) valAcc.textContent = `${appState.location.accuracy} m`;
      if (valUpdated) valUpdated.textContent = appState.location.lastUpdated || "Streaming";
    } else {
      dot.className = "badge-dot dot-inactive";
      text.textContent = dict.locStatusOff;
      btnStart.classList.remove("hidden");
      btnStop.classList.add("hidden");
      if (mapOverlay) mapOverlay.classList.remove("hidden");

      if (valLat) valLat.textContent = "--.----";
      if (valLng) valLng.textContent = "--.----";
      if (valAcc) valAcc.textContent = "-- m";
      if (valUpdated) valUpdated.textContent = "Not Active";
    }
  }

  // =========================================================================
  // 10. LEAFLET MAPS INTEGRATION
  // =========================================================================
  function initLeafletMaps() {
    if (typeof L === "undefined") {
      console.warn("Leaflet library not loaded yet.");
      return;
    }

    const defaultLat = appState.location.latitude || 28.6139;
    const defaultLng = appState.location.longitude || 77.2090;

    // 1. User Map
    const userMapElem = document.getElementById("userMap");
    if (userMapElem && !userMapInstance) {
      userMapInstance = L.map("userMap", {
        attributionControl: false,
        zoomControl: true
      }).setView([defaultLat, defaultLng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
      }).addTo(userMapInstance);

      userMarker = L.marker([defaultLat, defaultLng]).addTo(userMapInstance);
      userMarker.bindPopup("<b>Your Current Position</b><br>Live GPS sharing active.");

      userCircle = L.circle([defaultLat, defaultLng], {
        color: "#4B5694",
        fillColor: "#8CC7C4",
        fillOpacity: 0.25,
        radius: appState.location.accuracy || 15
      }).addTo(userMapInstance);
    }

    // 2. Monitor Map
    const monMapElem = document.getElementById("monitorMap");
    if (monMapElem && !monitorMapInstance) {
      monitorMapInstance = L.map("monitorMap", {
        attributionControl: false,
        zoomControl: true
      }).setView([defaultLat, defaultLng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
      }).addTo(monitorMapInstance);

      monitorMarker = L.marker([defaultLat, defaultLng]).addTo(monitorMapInstance);
      monitorMarker.bindPopup("<b>Connected User Location</b><br>Real-time emergency stream.");

      monitorCircle = L.circle([defaultLat, defaultLng], {
        color: "#DE5D53",
        fillColor: "#DE5D53",
        fillOpacity: 0.2,
        radius: appState.location.accuracy || 15
      }).addTo(monitorMapInstance);
    }
  }

  function updateLeafletMaps(lat, lng, accuracy) {
    if (userMapInstance && userMarker) {
      userMarker.setLatLng([lat, lng]);
      if (userCircle) {
        userCircle.setLatLng([lat, lng]);
        userCircle.setRadius(accuracy || 15);
      }
      userMapInstance.panTo([lat, lng]);
    }

    if (monitorMapInstance && monitorMarker) {
      monitorMarker.setLatLng([lat, lng]);
      if (monitorCircle) {
        monitorCircle.setLatLng([lat, lng]);
        monitorCircle.setRadius(accuracy || 15);
      }
      monitorMapInstance.panTo([lat, lng]);
    }
  }

  function resizeMaps() {
    setTimeout(function () {
      if (userMapInstance) userMapInstance.invalidateSize();
      if (monitorMapInstance) monitorMapInstance.invalidateSize();
    }, 250);
  }

  // =========================================================================
  // 11. EMERGENCY CONTACT MONITORING AREA (RECEIVER VIEW)
  // =========================================================================
  function renderMonitorArea() {
    const dict = TRANSLATIONS[appState.lang];

    // Status Indicator
    const indicator = document.getElementById("monStateIndicator");
    const stateIcon = document.getElementById("monStateIcon");
    const stateTitle = document.getElementById("monAlertStateTitle");
    const stateDesc = document.getElementById("monAlertStateDesc");
    const alertTime = document.getElementById("monAlertTime");
    const monTag = document.getElementById("monStatusTag");
    const monTagDot = document.getElementById("monTagDot");
    const monTagText = document.getElementById("monTagText");

    // Location Sharing in Monitor
    const sharingBadge = document.getElementById("monSharingBadge");
    const sharingIcon = document.getElementById("monSharingIcon");
    const sharingText = document.getElementById("monSharingText");
    const mapOverlay = document.getElementById("monitorMapOverlay");
    const mapOverlayText = document.getElementById("monMapOverlayText");

    const monValLat = document.getElementById("monValLat");
    const monValLng = document.getElementById("monValLng");
    const monValAcc = document.getElementById("monValAccuracy");
    const monValRec = document.getElementById("monValReceived");

    // Navigation button
    const btnDirections = document.getElementById("btnOpenDirections");

    if (appState.sos.isActive) {
      indicator.className = "mac-state-indicator indicator-emergency";
      stateIcon.className = "fa-solid fa-triangle-exclamation";
      stateTitle.textContent = dict.activeEmergencyTitle;
      stateDesc.textContent = `User ${appState.user.name} activated SOS #${appState.sos.alertId} at ${appState.sos.activationTime}.`;
      alertTime.textContent = `Active Alert: ${appState.sos.activationTime}`;

      monTagDot.className = "tag-dot dot-red";
      monTagText.textContent = "EMERGENCY ACTIVE";
    } else {
      indicator.className = "mac-state-indicator indicator-clear";
      stateIcon.className = "fa-solid fa-shield-check";
      stateTitle.textContent = dict.noEmergencyTitle;
      stateDesc.textContent = dict.noEmergencyDesc;
      alertTime.textContent = "No active alerts";

      monTagDot.className = "tag-dot dot-green";
      monTagText.textContent = dict.statusNormal;
    }

    if (appState.location.isSharing) {
      sharingBadge.className = "sharing-badge-pill badge-live-stream";
      sharingIcon.className = "fa-solid fa-satellite-dish";
      sharingText.textContent = dict.sharingActiveStream;

      if (mapOverlay) mapOverlay.classList.add("hidden");

      if (monValLat) monValLat.textContent = appState.location.latitude.toFixed(5);
      if (monValLng) monValLng.textContent = appState.location.longitude.toFixed(5);
      if (monValAcc) monValAcc.textContent = `${appState.location.accuracy} m`;
      if (monValRec) monValRec.textContent = appState.location.lastUpdated || "Streaming";
    } else {
      sharingBadge.className = "sharing-badge-pill badge-stopped";
      sharingIcon.className = "fa-solid fa-location-slash";
      sharingText.textContent = dict.sharingStopped;

      if (mapOverlay) {
        mapOverlay.classList.remove("hidden");
        mapOverlayText.textContent = "User location sharing has stopped. Showing standby position.";
      }

      if (monValLat) monValLat.textContent = "--.----";
      if (monValLng) monValLng.textContent = "--.----";
      if (monValAcc) monValAcc.textContent = "-- m";
      if (monValRec) monValRec.textContent = "Stopped";
    }

    if (btnDirections) {
      btnDirections.onclick = function () {
        const lat = appState.location.latitude;
        const lng = appState.location.longitude;
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
      };
    }
  }

  function renderEventLog() {
    const list = document.getElementById("eventFeedList");
    if (!list) return;

    if (appState.events.length === 0) {
      list.innerHTML = `
        <div class="event-feed-item">
          <i class="fa-solid fa-circle-info event-icon"></i>
          <div class="event-text">
            <div class="event-title">Audit Log Initialized</div>
            <div class="event-desc">No emergency events logged yet. System operating normally.</div>
          </div>
          <span class="event-timestamp">Now</span>
        </div>
      `;
      return;
    }

    list.innerHTML = appState.events.map(ev => {
      let iconClass = "fa-circle-info";
      let itemType = "type-info";

      if (ev.type === "SOS") {
        iconClass = "fa-triangle-exclamation";
        itemType = "type-sos";
      } else if (ev.type === "SAFE") {
        iconClass = "fa-circle-check";
        itemType = "type-safe";
      } else if (ev.type === "LOCATION") {
        iconClass = "fa-location-dot";
        itemType = "type-location";
      }

      return `
        <div class="event-feed-item ${itemType}">
          <i class="fa-solid ${iconClass} event-icon"></i>
          <div class="event-text">
            <div class="event-title">${escapeHtml(ev.title)}</div>
            ${ev.meta ? `<div class="event-desc">${escapeHtml(ev.meta)}</div>` : ""}
          </div>
          <span class="event-timestamp">${escapeHtml(ev.time)}</span>
        </div>
      `;
    }).join("");
  }

  // =========================================================================
  // 12. EMERGENCY CONTACT MANAGEMENT (CRUD)
  // =========================================================================
  function initContactManagement() {
    const btnAdd = document.getElementById("btnAddContactModal");
    const modal = document.getElementById("contactEditModal");
    const btnClose = document.getElementById("btnCloseContactModal");
    const btnCancel = document.getElementById("btnCancelContact");
    const form = document.getElementById("contactForm");

    btnAdd.addEventListener("click", () => openContactModal());
    btnClose.addEventListener("click", () => modal.classList.add("hidden"));
    btnCancel.addEventListener("click", () => modal.classList.add("hidden"));

    form.addEventListener("submit", handleContactFormSubmit);
  }

  function openContactModal(contactId = null) {
    const modal = document.getElementById("contactEditModal");
    const title = document.getElementById("contactModalTitle");
    const errName = document.getElementById("errContactName");
    const errPhone = document.getElementById("errContactPhone");

    errName.textContent = "";
    errPhone.textContent = "";

    if (contactId) {
      const contact = appState.contacts.find(c => c.id === contactId);
      if (contact) {
        title.textContent = "Edit Emergency Contact";
        document.getElementById("contactEditId").value = contact.id;
        document.getElementById("contactName").value = contact.name;
        document.getElementById("contactPhone").value = contact.phone;
        document.getElementById("contactRelation").value = contact.relationship || "Other";
        document.getElementById("contactReceivesSos").checked = contact.receivesSOS;
      }
    } else {
      title.textContent = "Add Emergency Contact";
      document.getElementById("contactEditId").value = "";
      document.getElementById("contactName").value = "";
      document.getElementById("contactPhone").value = "";
      document.getElementById("contactRelation").value = "Parent";
      document.getElementById("contactReceivesSos").checked = true;
    }

    modal.classList.remove("hidden");
  }

  function handleContactFormSubmit(e) {
    e.preventDefault();

    const cid = document.getElementById("contactEditId").value;
    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const rel = document.getElementById("contactRelation").value;
    const receivesSos = document.getElementById("contactReceivesSos").checked;

    let hasErrors = false;
    if (!name) {
      document.getElementById("errContactName").textContent = "Name is required.";
      hasErrors = true;
    }
    const phoneRegex = /^[+]?[\d\s\-()]{7,18}$/;
    if (!phone || !phoneRegex.test(phone)) {
      document.getElementById("errContactPhone").textContent = "Valid phone number required.";
      hasErrors = true;
    }
    if (hasErrors) return;

    if (cid) {
      // Update
      const c = appState.contacts.find(x => x.id === cid);
      if (c) {
        c.name = name;
        c.phone = phone;
        c.relationship = rel;
        c.receivesSOS = receivesSos;
        addAuditEvent("INFO", `Updated contact: ${name}`, rel);
      }
    } else {
      // Add
      const newContact = {
        id: "c-" + Date.now(),
        name: name,
        phone: phone,
        relationship: rel,
        receivesSOS: receivesSos,
        isPrimary: false
      };
      appState.contacts.push(newContact);
      addAuditEvent("INFO", `Added new emergency contact: ${name}`, rel);
    }

    saveStateToStorage();
    renderContacts();
    document.getElementById("contactEditModal").classList.add("hidden");

    if (appState.backendOnline) {
      fetch(`${BACKEND_BASE}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: cid ? "update" : "add",
          id: cid,
          name, phone, relationship: rel, receivesSOS: receivesSos
        })
      }).catch(err => console.warn("Backend contacts sync failed:", err));
    }
  }

  function deleteContact(cid) {
    const contact = appState.contacts.find(c => c.id === cid);
    if (!contact) return;

    if (confirm(`Are you sure you want to remove ${contact.name} from your emergency contacts?`)) {
      appState.contacts = appState.contacts.filter(c => c.id !== cid);
      saveStateToStorage();
      renderContacts();
      addAuditEvent("INFO", `Removed emergency contact: ${contact.name}`, "Contact Management");

      if (appState.backendOnline) {
        fetch(`${BACKEND_BASE}/api/contacts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "delete", id: cid })
        }).catch(err => console.warn("Backend contact deletion failed:", err));
      }
    }
  }

  function renderContacts() {
    const container = document.getElementById("contactsListContainer");
    if (!container) return;

    if (appState.contacts.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding: 1.5rem; color: var(--text-muted); font-size: 0.85rem;">
          No contacts added yet. Click <strong>"Add Contact"</strong> above.
        </div>
      `;
      return;
    }

    container.innerHTML = appState.contacts.map(c => {
      const initials = c.name.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2);
      return `
        <div class="contact-row" data-id="${c.id}">
          <div class="contact-col-meta">
            <div class="contact-avatar">${initials}</div>
            <div class="contact-details">
              <div class="contact-name-row">
                <span class="contact-name">${escapeHtml(c.name)}</span>
                <span class="contact-rel-badge">${escapeHtml(c.relationship || "Guardian")}</span>
                ${c.isPrimary ? '<span class="contact-rel-badge" style="background:#DEE2E6;color:#111844;">Primary</span>' : ''}
              </div>
              <span class="contact-phone">${escapeHtml(c.phone)}</span>
            </div>
          </div>
          <div class="contact-badges">
            ${c.receivesSOS ? `
              <span class="badge-sos-enabled">
                <i class="fa-solid fa-bell"></i> Receives SOS
              </span>
            ` : '<span style="font-size:0.75rem; color:var(--text-muted);">Alerts disabled</span>'}
            <div class="contact-actions">
              <button type="button" class="contact-icon-btn btn-edit-contact" data-id="${c.id}" title="Edit Contact">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              ${!c.isPrimary ? `
                <button type="button" class="contact-icon-btn btn-del btn-delete-contact" data-id="${c.id}" title="Delete Contact">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Attach listeners
    container.querySelectorAll(".btn-edit-contact").forEach(btn => {
      btn.addEventListener("click", () => openContactModal(btn.getAttribute("data-id")));
    });
    container.querySelectorAll(".btn-delete-contact").forEach(btn => {
      btn.addEventListener("click", () => deleteContact(btn.getAttribute("data-id")));
    });
  }

  // =========================================================================
  // 13. FIRST AID INTERACTIVE MODAL & DIRECTORY
  // =========================================================================
  function initFirstAidSection() {
    const grid = document.getElementById("firstAidGrid");
    const modal = document.getElementById("firstAidModal");
    const btnCloseTop = document.getElementById("btnCloseFaModal");
    const btnCloseBottom = document.getElementById("btnCloseFaModalBottom");

    if (grid) {
      grid.querySelectorAll(".firstaid-card-item").forEach(card => {
        card.addEventListener("click", function () {
          const topic = card.getAttribute("data-topic");
          openFirstAidModal(topic);
        });
      });
    }

    if (btnCloseTop) btnCloseTop.addEventListener("click", () => modal.classList.add("hidden"));
    if (btnCloseBottom) btnCloseBottom.addEventListener("click", () => modal.classList.add("hidden"));
  }

  function openFirstAidModal(topicKey) {
    const data = FIRST_AID_DATA[topicKey];
    if (!data) return;

    const modal = document.getElementById("firstAidModal");
    const title = document.getElementById("faModalTitle");
    const urgency = document.getElementById("faModalUrgency");
    const icon = document.getElementById("faModalIcon");
    const overview = document.getElementById("faModalOverview");
    const stepsList = document.getElementById("faModalSteps");
    const warningsList = document.getElementById("faModalWarnings");
    const whenCall = document.getElementById("faModalWhenCall");

    title.textContent = data.title;
    urgency.textContent = data.urgency;
    icon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
    overview.textContent = data.overview;

    stepsList.innerHTML = data.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("");
    warningsList.innerHTML = data.warnings.map(w => `<li><i class="fa-solid fa-ban"></i> <span>${escapeHtml(w)}</span></li>`).join("");
    whenCall.textContent = data.whenToCall;

    modal.classList.remove("hidden");
  }

  // =========================================================================
  // 14. VIEW SWITCHING & RESPONSIVE DASHBOARD LAYOUTS
  // =========================================================================
  function initViewSwitcher() {
    const btnSplit = document.getElementById("btnViewSplit");
    const btnUser = document.getElementById("btnViewUser");
    const btnMonitor = document.getElementById("btnViewMonitor");
    const grid = document.getElementById("dashboardGrid");

    function setView(mode) {
      appState.viewMode = mode;

      [btnSplit, btnUser, btnMonitor].forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });

      grid.className = "dashboard-grid";

      if (mode === "split") {
        btnSplit.classList.add("active");
        btnSplit.setAttribute("aria-pressed", "true");
        grid.classList.add("split-layout");
      } else if (mode === "user") {
        btnUser.classList.add("active");
        btnUser.setAttribute("aria-pressed", "true");
        grid.classList.add("user-only-layout");
      } else if (mode === "monitor") {
        btnMonitor.classList.add("active");
        btnMonitor.setAttribute("aria-pressed", "true");
        grid.classList.add("monitor-only-layout");
      }

      resizeMaps();
    }

    btnSplit.addEventListener("click", () => setView("split"));
    btnUser.addEventListener("click", () => setView("user"));
    btnMonitor.addEventListener("click", () => setView("monitor"));

    // Check window resize
    window.addEventListener("resize", () => {
      resizeMaps();
    });
  }

  // =========================================================================
  // 15. INITIALIZATION ROUTINE
  // =========================================================================
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderAll() {
    updateUserHeaderProfile();
    setLanguage(appState.lang);
    updatePinStatusUI();
    renderSosHero();
    renderLocationStatus();
    renderContacts();
    renderMonitorArea();
    renderEventLog();
  }

  document.addEventListener("DOMContentLoaded", function () {
    loadStateFromStorage();

    // Language dropdown listener
    const langSelect = document.getElementById("langSelect");
    if (langSelect) {
      langSelect.addEventListener("change", function () {
        setLanguage(langSelect.value);
      });
    }

    // Profile button listener
    const btnProfile = document.getElementById("btnProfile");
    if (btnProfile) {
      btnProfile.addEventListener("click", () => openRegistrationModal(false));
    }

    const regForm = document.getElementById("registrationForm");
    if (regForm) {
      regForm.addEventListener("submit", handleRegistrationSubmit);
    }

    const btnCloseReg = document.getElementById("btnCloseRegModal");
    if (btnCloseReg) {
      btnCloseReg.addEventListener("click", closeRegistrationModal);
    }

    const btnClearLog = document.getElementById("btnClearLog");
    if (btnClearLog) {
      btnClearLog.addEventListener("click", function () {
        if (confirm("Clear emergency audit log?")) {
          appState.events = [];
          saveStateToStorage();
          renderEventLog();
        }
      });
    }

    // Initialize subsystems
    initPinControls();
    initSosWorkflow();
    initLocationControls();
    initContactManagement();
    initFirstAidSection();
    initViewSwitcher();
    initLeafletMaps();

    // Check PIN lock
    if (appState.pin.hasPin && appState.pin.isLocked) {
      document.getElementById("pinLockedScreen").classList.remove("hidden");
    }

    // Render everything
    renderAll();
    checkFirstVisitRegistration();
    checkBackendAvailability();
  });

})();
