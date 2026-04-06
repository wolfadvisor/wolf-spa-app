# 🐺 Wolf Business Advisory — SPA Platform

## 📌 Overview

The **Wolf Business Advisory Platform** is a Single Page Application (SPA) designed to manage and orchestrate international commodity trading operations, including ICPO, SCO, SPA, and client management.

Built with **Google Apps Script (GAS)** as backend and a modern frontend architecture, the platform provides a secure, role-based environment for buyers, admins, and intermediaries.

---

## 🚀 Features

### 🔐 Authentication & Security

* Google OAuth 2.0 login (external Gmail supported)
* Admin login (email + password)
* Role-Based Access Control (RBAC)
* Backend validation (`authorizeUser`)
* OAuth token revocation on logout

---

### 🧠 Smart Workflow (Trading Focus)

* ICPO submission and tracking
* SCO request automation
* SPA request flow
* Business deadline calculation
* Historical transaction tracking

---

### 🖥️ User Interface

* Modern SPA architecture (no page reload)
* Dynamic sidebar navigation
* Accordion menu (jQuery UI)
* Responsive login system with tabs:

  * Google Sign-In
  * Admin Login

---

### 📊 Profile Management

* User profile editing
* Company and country tracking
* Avatar auto-generation
* Persistent user data (Google Sheets backend)

---

## 🏗️ Architecture

### Frontend

* HTML5 + CSS3
* jQuery + jQuery UI
* Modular SPA navigation system

### Backend

* Google Apps Script (GAS)
* Google Sheets as database
* OAuth2 service (Google API)

---

## 📂 Project Structure

```
wolf-spa-app/
│
├── src/
│   ├── index.html
│   ├── styles/
│   │   ├── main.css
│   │   └── index.css
│   ├── scripts/
│   │   └── app.js
│   └── pages/
│
├── assets/
│   └── images/
│
├── docs/
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wolf-spa-app.git
cd wolf-spa-app
```

---

### 2. Open in VSCode

```bash
code .
```

---

### 3. Deploy Backend (Google Apps Script)

1. Create a new GAS project
2. Add:

   * `Code.gs`
   * `OAuth.gs`
3. Deploy as **Web App**
4. Set access:

   * Execute as: **Me**
   * Who has access: **Anyone**

---

### 4. Configure OAuth

* Create credentials in Google Cloud Console
* Enable OAuth consent screen
* Add redirect URI from GAS deployment

---

## 🔐 Permissions Model

| Role  | Access                        |
| ----- | ----------------------------- |
| Admin | Full system access            |
| User  | ICPO, SCO, Profile, Dashboard |

---

## 🔄 SPA Navigation Flow

1. User logs in (Google or Admin)
2. Backend validates user
3. UI loads based on role
4. Navigation controlled via:

   * Frontend RBAC
   * Backend authorization

---

## 🧪 Future Improvements

* 🔌 API integrations (BACEN, commodity pricing, FX rates)
* 📈 Real-time dashboards
* 🧠 Arbitrage engine (commodity + FX)
* 📄 Document generation (ICPO, SCO, SPA PDFs)
* 🧩 Modular frontend (React or Vue migration)
* ☁️ Cloud deployment (GCP / Firebase)

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📜 License

This project is proprietary and intended for internal or authorized use only.

---

## 👤 Author

**Carlos Ribeiro**
Wolf Business Advisory

---

## ⚡ Vision

To build a **next-generation commodity trading platform**, combining:

* Data intelligence
* Automation
* Secure global transactions

---
