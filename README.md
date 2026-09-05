# 🐺 Wolf Business Advisory — SPA Platform

### Commodity Trading Workflow & Business Operations Platform

A business-oriented Single Page Application designed to support and organize **international commodity trading workflows**, connecting commercial processes, user management, document workflows and operational intelligence.

The project is part of my ongoing work at the intersection of **Business, Software Engineering, Data and Artificial Intelligence**, with a specific focus on the commodity trading domain.

---

## 🎯 Project Vision

The goal of the Wolf SPA Platform is to transform traditionally fragmented commodity trading workflows into a structured digital environment.

The platform is designed around the lifecycle of commercial operations such as:

```text
Buyer
  │
  ▼
ICPO
  │
  ▼
SCO
  │
  ▼
SPA
  │
  ▼
Contract / Transaction
  │
  ▼
Operational Workflow
  │
  ▼
Documents & Logistics
```

The long-term vision is to evolve the platform into a **commodity business intelligence and transaction management environment**, combining:

* Software Engineering
* Data Intelligence
* Process Automation
* Financial & Commodity Data
* Artificial Intelligence
* Secure User Management

---

# 💼 Business Context

Commodity trading involves multiple stakeholders, documents, deadlines and operational dependencies.

The Wolf SPA Platform is designed to provide a structured environment for managing these processes.

### Main business entities

```text
Company
   │
   ├── Buyer
   ├── Seller
   ├── Intermediary
   └── Administrator
          │
          ▼
       Transaction
          │
          ├── ICPO
          ├── SCO
          ├── SPA
          └── Operational Activities
```

The project is particularly focused on workflows related to:

* International commodity trading
* Commercial negotiations
* Buyer and company management
* ICPO workflows
* SCO workflows
* SPA workflows
* Transaction history
* Operational deadlines
* User permissions
* Business process automation

---

# 🚀 Current Features

## 🔐 Authentication & Security

The current implementation includes:

* Google OAuth 2.0 authentication
* External Gmail authentication
* Administrative authentication
* Role-Based Access Control (RBAC)
* Backend authorization validation
* User session management
* OAuth token revocation on logout

The authorization model is designed to ensure that access to business functions is controlled both at the interface and backend levels.

---

# 🧠 Trading Workflow

The platform currently supports the foundation for commercial workflows involving:

### ICPO

* ICPO submission
* ICPO tracking
* User association
* Transaction history

### SCO

* SCO request workflow
* Business deadline management
* Transaction tracking

### SPA

* SPA request workflow
* Commercial process tracking
* Historical transaction management

---

# 👤 User & Company Management

The platform includes functionality for managing user-related business information.

Current capabilities include:

* User profile management
* Company information
* Country information
* User avatars
* Persistent user information
* Role-based access

---

# 🖥️ Application Architecture

The current application follows a **Single Page Application (SPA)** architecture.

```text
┌──────────────────────────────────────────┐
│              User Interface              │
│                                          │
│          HTML5 + CSS3 + jQuery           │
│                + jQuery UI               │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│            Application Layer             │
│                                          │
│       SPA Navigation / RBAC Logic        │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│          Google Apps Script              │
│                                          │
│       Business Logic / Authorization     │
└────────────────────┬─────────────────────┘
                     │
              ┌──────┴──────┐
              ▼             ▼
        Google Sheets    Google OAuth
```

---

# 🛠️ Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript
* jQuery
* jQuery UI
* Single Page Application architecture

## Backend

* Google Apps Script
* Google APIs
* OAuth 2.0

## Data

* Google Sheets
* Structured business records
* Transaction history

## Development

* Git
* GitHub
* Visual Studio Code

---

# 📂 Project Structure

```text
wolf-spa-app/
│
├── src/
│   ├── index.html
│   │
│   ├── styles/
│   │   ├── main.css
│   │   └── index.css
│   │
│   ├── scripts/
│   │   └── app.js
│   │
│   └── pages/
│
├── assets/
│   └── images/
│
├── docs/
│
├── README.md
├── package.json
├── package-lock.json
└── .gitignore
```

---

# 🔑 Permission Model

The platform uses role-based access control.

| Role              | Access                                         |
| ----------------- | ---------------------------------------------- |
| **Administrator** | Full system access                             |
| **User**          | ICPO, SCO, profile and dashboard functionality |
| **Future Roles**  | Additional permissions as the platform evolves |

The authorization model is designed around the principle that permissions should be validated at both the **application interface** and **backend** levels.

---

# 🔄 Application Flow

A simplified authentication and authorization flow:

```text
User
 │
 ▼
Login
 │
 ├───────────────┐
 ▼               ▼
Google OAuth   Admin Login
 │               │
 └───────┬───────┘
         ▼
Backend Authorization
         │
         ▼
Role Validation
         │
         ▼
Application Context
         │
         ▼
Role-Based Interface
         │
         ▼
Business Workflow
```

---

# 📊 Business Workflow

The platform is designed to progressively connect commercial and operational information.

```text
Company
   │
   ▼
Buyer / Seller
   │
   ▼
Commodity
   │
   ▼
Commercial Request
   │
   ├── ICPO
   │
   ├── SCO
   │
   └── SPA
          │
          ▼
      Transaction
          │
          ▼
   Operational Process
          │
          ├── Documents
          ├── Deadlines
          ├── Logistics
          └── Financial Data
```

---

# 🚧 Project Status

**Status: Active Development**

The current repository represents the foundation of the platform.

Some components are implemented and functional, while others are part of the planned evolution of the system.

### Legend

* ✅ Implemented
* 🚧 In Development
* 📋 Planned

---

# 🗺️ Roadmap

## Phase 1 — Core Platform

* [x] SPA architecture
* [x] Google authentication
* [x] Administrative authentication
* [x] Role-Based Access Control
* [x] User profile management
* [x] Company information
* [x] ICPO workflow foundation
* [x] SCO workflow foundation
* [x] SPA workflow foundation

---

## Phase 2 — Business Intelligence

* [ ] Commodity price integrations
* [ ] Foreign exchange data
* [ ] BACEN data integration
* [ ] Market data collection
* [ ] Business dashboards
* [ ] Historical price analysis
* [ ] Transaction analytics

---

## Phase 3 — Trading Intelligence

* [ ] Commodity pricing engine
* [ ] FX conversion engine
* [ ] Commodity arbitrage calculations
* [ ] Margin analysis
* [ ] Trading scenario simulation
* [ ] Automated commercial calculations

---

## Phase 4 — Document Automation

* [ ] ICPO document generation
* [ ] SCO document generation
* [ ] SPA document generation
* [ ] PDF generation
* [ ] Document version control
* [ ] Commercial document history

---

## Phase 5 — Data & Artificial Intelligence

The long-term architecture may incorporate AI-assisted capabilities such as:

* [ ] Commodity intelligence
* [ ] Commercial document analysis
* [ ] Transaction classification
* [ ] Intelligent search
* [ ] LLM-powered business assistant
* [ ] RAG-based knowledge retrieval
* [ ] Automated business insights

---

## Phase 6 — Platform Evolution

Potential future technologies include:

* [ ] REST API architecture
* [ ] TypeScript
* [ ] Node.js
* [ ] NestJS
* [ ] React
* [ ] Relational database
* [ ] Docker
* [ ] Cloud deployment
* [ ] Automated testing
* [ ] CI/CD

The migration of the current architecture toward these technologies will be evaluated according to project requirements and scalability needs.

---

# 🔭 Long-Term Architecture

The future architecture is envisioned as a modular platform:

```text
                    ┌─────────────────────┐
                    │     Web Frontend    │
                    │   React / TypeScript│
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      API Layer      │
                    │   Node.js / NestJS  │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        Business Logic      Data Layer        AI Layer
              │                │                │
              ▼                ▼                ▼
         Trading Rules       SQL DB          LLM / RAG
         Workflows           ETL              Agents
         Automation          APIs             Analytics
              │                │                │
              └────────────────┼────────────────┘
                               ▼
                    Commodity Intelligence
```

This architecture represents a **long-term direction**, not the current implementation.

---

# 🧪 Development Philosophy

This project is being developed using a **learning-by-building approach**.

Rather than treating technology and business as separate areas, the project uses real-world commodity trading concepts as the foundation for exploring:

* Software architecture
* Backend development
* Frontend development
* Databases
* APIs
* Authentication
* Authorization
* Data engineering
* Automation
* Artificial Intelligence

The objective is to continuously evolve the platform while developing practical software engineering skills.

---

# 🔐 Security Considerations

Because this platform deals with business workflows and potentially sensitive commercial information, security is considered a fundamental part of the architecture.

Current and planned security considerations include:

* OAuth authentication
* Role-Based Access Control
* Backend authorization
* Session management
* Environment-based configuration
* Secret management
* Input validation
* API authorization
* Audit trails
* Least-privilege access

**Never commit credentials, OAuth secrets, API keys or other sensitive information to this repository.**

---

# ⚙️ Local Development

## Requirements

Depending on the current development branch, you may need:

* Git
* Visual Studio Code
* Google account
* Google Apps Script
* Google Cloud project
* OAuth credentials

---

## Clone the Repository

```bash
git clone https://github.com/wolfadvisor/wolf-spa-app.git
cd wolf-spa-app
```

---

## Install Dependencies

```bash
npm install
```

---

## Development

The frontend can be opened through the development environment used for the current project.

Backend functionality requires the corresponding Google Apps Script deployment and configuration.

---

# ☁️ Google Apps Script Configuration

The current backend architecture uses Google Apps Script.

A typical deployment involves:

1. Creating a Google Apps Script project.
2. Configuring the required backend files.
3. Configuring OAuth.
4. Deploying the project as a Web App.
5. Configuring the appropriate access permissions.
6. Connecting the frontend application to the deployed backend.

### OAuth

The authentication layer uses Google's OAuth infrastructure.

A Google Cloud project must be configured with the appropriate OAuth consent screen and credentials.

**Credentials must never be committed to GitHub.**

---

# 📸 Screenshots

> Screenshots will be added as the user interface evolves.

Recommended screenshots:

* Login screen
* Dashboard
* User profile
* ICPO workflow
* SCO workflow
* SPA workflow
* Administrative interface

---

# 📈 Future Integrations

The platform is intended to progressively integrate external data sources and services.

Potential integrations include:

### Financial & Market Data

* BACEN
* Foreign exchange rates
* Commodity prices
* Futures markets
* Agricultural market data

### Business Data

* Company databases
* Trading records
* Commercial documents
* Logistics information

### Artificial Intelligence

* LLM APIs
* Local LLMs
* RAG systems
* Business intelligence agents

---

# 🧩 Why Commodities?

The project is intentionally built around commodity trading.

International commodity operations involve a combination of:

```text
Commercial Knowledge
        +
Financial Data
        +
Contracts
        +
Logistics
        +
Risk
        +
Compliance
        +
Technology
```

This makes the domain an excellent environment for developing software capable of solving complex business problems.

---

# 🌎 Business + Technology

The Wolf SPA Platform represents a broader objective:

> **Use technology to transform domain expertise into scalable business systems.**

My background in commodities and international trade provides the business context.

My current studies in software engineering, data and artificial intelligence provide the technical foundation.

The intersection of both is where this project lives.

---

# 👨‍💻 About the Author

**Carlos Ribeiro**

Business professional and technology student focused on the intersection of:

* International Trade
* Commodities
* Software Engineering
* Data
* Automation
* Artificial Intelligence

Currently developing skills in:

```text
Python
JavaScript
TypeScript
Node.js
NestJS
React
SQL
Data Analysis
Machine Learning
LLMs
AI Applications
```

---

# 🤝 Project Philosophy

This repository is both a **software project and an engineering learning laboratory**.

The objective is to continuously evolve the platform while applying software engineering principles to real-world business problems.

```text
Business Problem
       ↓
Domain Understanding
       ↓
Software Design
       ↓
Data
       ↓
Automation
       ↓
Artificial Intelligence
       ↓
Business Intelligence
```

---

# 📜 License

This project is intended for internal, educational and authorized use.

The repository may contain architectural concepts and implementations related to commercial workflows.

Unauthorized use of proprietary business logic, confidential information or commercial data is not permitted.

---

# 🐺 Wolf Business Advisory

**Business × Technology × Commodities**

Building technology for smarter commodity operations.

