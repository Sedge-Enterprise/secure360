# 🔐 Secure 360 — Cloud-Native Security Analytics MVP

Secure 360 is a **cloud-native, AI-powered security analytics platform**.  
It ingests alerts from cloud services, enriches them with AI, prioritizes incidents, and visualizes them in dashboards for security teams.

## 🚀 Features

- **Alert Ingestion**: Collects raw alerts from Microsoft Defender, Entra ID sign-ins, and other sources.
- **Incident Enrichment**: Groups related alerts into incidents and adds context (owner group, environment, identity risk).
- **AI Scoring**: Uses AI to classify incidents, estimate exploitability, and assign a `priorityScore`.
- **Feedback Loop**: Tracks MTTA/MTTR to refine scoring logic over time.
- **Dashboards**: Power BI dashboards with role-based access for posture, alerts, identities, and incidents.
- **Front End**: Responsive landing page with MSAL.js authentication and embedded dashboards.

## 🧱 Architecture Overview
[ Alerts ] → [ Ingestion Functions ] → [ Queue ] → [ AI Enrichment Function ] → [ Azure SQL Database ] → [ Power BI Dashboards / Front End ]

- **Ingestion**: Normalizes raw alerts into a consistent schema.
- **Queue**: Decouples ingestion from enrichment.
- **AI Enrichment**: Scores and classifies incidents using deterministic logic + Azure OpenAI.
- **SQL Database**: Stores curated incidents with enrichment fields.
- **Dashboards**: Power BI visualizations with RLS.
- **Front End**: Secure 360 landing page with MSAL.js sign-in.


## 🛠️ Tech Stack

### ☁️ Cloud Infrastructure
- **Microsoft Azure** — core cloud platform
- **Azure Resource Manager (Bicep/Terraform)** — infrastructure as code
- **Azure Virtual Network (VNet)** — private networking
- **Private Endpoints + Private DNS** — secure service access
- **Azure Firewall + NSGs** — traffic control
- **Azure Policy** — enforce zero-trust guardrails

### 🔐 Identity & Access
- **Microsoft Entra ID** — identity provider
- **App Registration + App Roles** — Viewer, Analyst, Admin
- **Conditional Access** — MFA, block legacy auth
- **Azure Key Vault** — secrets, keys, certificates

### 🧠 AI & Enrichment
- **Azure Functions** — serverless enrichment logic
- **Azure OpenAI Service** — classification, exploitability scoring
- **Custom scoring model** — severity + environment + identity risk + exploitability

### ⚙️ Backend & Automation
- **Azure Functions** — ingestion, enrichment, automation
- **Azure Storage Queues** — orchestration
- **Azure API Management** — REST API surface
- **GitHub Actions / Azure DevOps** — CI/CD pipelines

### 🗃️ Data Storage
- **Azure SQL Database** — curated incident store
- **Azure Blob Storage** — raw alert archive
- **Blob Lifecycle Policies** — hot → cool → archive

### 📊 Dashboards & Analytics
- **Power BI** — dashboards for posture, alerts, incidents
- **Power BI Dataflows** — ETL pipelines
- **Row-Level Security (RLS)** — restricts data by role
- **Power BI Embed (MSAL.js)** — dashboards in front end

### 🌐 Front End
- **Azure Static Web Apps / App Service** — landing page hosting
- **MSAL.js** — authentication
- **Fluent UI + Tailwind CSS** — responsive, branded UI
- **Azure DNS + Front Door** — custom domain + SSL

### 🧪 Observability
- **Azure Monitor + Log Analytics** — metrics, logs, traces
- **Azure Monitor Alerts** — ingestion failures, queue backlogs
- **Azure SQL PITR + Blob Soft Delete** — recovery
- **Azure paired regions** — DR (South Africa North ↔ South Africa West)


