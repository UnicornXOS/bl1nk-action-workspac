# 🏗️ โครงสร้าง GitHub Repository

```
workspace-automation/
├── README.md (คำอธิบายโปรเจค)
├── .gitignore
├── LICENSE
│
├── 📁 apps-script/
│   ├── README.md
│   ├── appsscript.json
│   ├── src/
│   │   ├── Config.gs
│   │   ├── Auth.gs
│   │   ├── Webhooks.gs
│   │   ├── Workflows.gs
│   │   ├── Triggers.gs
│   │   ├── GmailAPI.gs
│   │   ├── TasksAPI.gs
│   │   ├── CalendarAPI.gs
│   │   ├── DriveAPI.gs
│   │   ├── ChatAPI.gs
│   │   ├── SheetsAPI.gs
│   │   ├── DocsAPI.gs
│   │   ├── NotebookLMAPI.gs
│   │   ├── Database.gs
│   │   └── Utils.gs
│   ├── tests/
│   │   ├── Config.test.gs
│   │   ├── Workflows.test.gs
│   │   └── GmailAPI.test.gs
│   └── docs/
│       ├── SETUP.md
│       ├── API_REFERENCE.md
│       └── TROUBLESHOOTING.md
│
├── 📁 backend/
│   ├── README.md
│   ├── package.json
│   ├── .env.example
│   ├── .env.local (ไม่ commit)
│   ├── vercel.json
│   │
│   ├── pages/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── login.js
│   │   │   │   ├── logout.js
│   │   │   │   ├── register.js
│   │   │   │   └── me.js
│   │   │   ├── workflows/
│   │   │   │   ├── list.js
│   │   │   │   ├── create.js
│   │   │   │   ├── [id].js
│   │   │   │   ├── update.js
│   │   │   │   ├── delete.js
│   │   │   │   ├── execute.js
│   │   │   │   └── status.js
│   │   │   ├── tasks/
│   │   │   │   ├── list.js
│   │   │   │   ├── create.js
│   │   │   │   ├── [id].js
│   │   │   │   ├── update.js
│   │   │   │   ├── delete.js
│   │   │   │   └── sync.js
│   │   │   ├── emails/
│   │   │   │   ├── list.js
│   │   │   │   ├── important.js
│   │   │   │   ├── process.js
│   │   │   │   └── [id].js
│   │   │   ├── events/
│   │   │   │   ├── list.js
│   │   │   │   ├── create.js
│   │   │   │   ├── [id].js
│   │   │   │   └── sync.js
│   │   │   ├── logs/
│   │   │   │   ├── create.js
│   │   │   │   ├── list.js
│   │   │   │   └── [id].js
│   │   │   ├── webhooks/
│   │   │   │   ├── appsscript.js
│   │   │   │   ├── gmail.js
│   │   │   │   └── calendar.js
│   │   │   └── health.js
│   │   ├── dashboard.js
│   │   ├── workflows.js
│   │   ├── tasks.js
│   │   ├── emails.js
│   │   ├── calendar.js
│   │   ├── logs.js
│   │   ├── settings.js
│   │   └── _app.js
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.js
│   │   │   ├── Sidebar.js
│   │   │   ├── Footer.js
│   │   │   └── Layout.js
│   │   ├── workflows/
│   │   │   ├── WorkflowCard.js
│   │   │   ├── WorkflowForm.js
│   │   │   ├── WorkflowList.js
│   │   │   └── WorkflowStatus.js
│   │   ├── tasks/
│   │   │   ├── TaskCard.js
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   └── TaskFilter.js
│   │   ├── emails/
│   │   │   ├── EmailCard.js
│   │   │   ├── EmailList.js
│   │   │   └── EmailViewer.js
│   │   └── shared/
│   │       ├── Modal.js
│   │       ├── Button.js
│   │       ├── Input.js
│   │       ├── Select.js
│   │       └── Loading.js
│   │
│   ├── lib/
│   │   ├── firebase.js
│   │   ├── auth.js
│   │   ├── api.js
│   │   ├── appsscript.js
│   │   ├── validators.js
│   │   └── utils.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── logger.js
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── images/
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── Home.module.css
│   │   └── components/
│   │
│   ├── tests/
│   │   ├── api/
│   │   │   ├── workflows.test.js
│   │   │   ├── tasks.test.js
│   │   │   └── auth.test.js
│   │   ├── components/
│   │   │   └── WorkflowCard.test.js
│   │   └── lib/
│   │       └── firebase.test.js
│   │
│   ├── docs/
│   │   ├── API.md
│   │   ├── SETUP.md
│   │   ├── DEPLOYMENT.md
│   │   └── TROUBLESHOOTING.md
│   │
│   └── .eslintrc.json
│
├── 📁 frontend/
│   ├── README.md
│   ├── package.json
│   ├── .env.example
│   ├── vite.config.js
│   │
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Workflows.jsx
│   │   │   ├── Tasks.jsx
│   │   │   ├── Emails.jsx
│   │   │   ├── Calendar.jsx
│   │   │   ├── Logs.jsx
│   │   │   ├── Settings.jsx
│   │   │   ├── Login.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Layout.jsx
│   │   │   ├── workflows/
│   │   │   │   ├── WorkflowCard.jsx
│   │   │   │   ├── WorkflowForm.jsx
│   │   │   │   └── WorkflowList.jsx
│   │   │   ├── tasks/
│   │   │   │   ├── TaskCard.jsx
│   │   │   │   ├── TaskForm.jsx
│   │   │   │   └── TaskList.jsx
│   │   │   └── shared/
│   │   │       ├── Modal.jsx
│   │   │       ├── Button.jsx
│   │   │       └── Input.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useWorkflows.js
│   │   │   ├── useTasks.js
│   │   │   └── useApi.js
│   │   │
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── workflows.js
│   │   │   └── tasks.js
│   │   │
│   │   ├── store/
│   │   │   ├── authStore.js
│   │   │   ├── workflowStore.js
│   │   │   └── taskStore.js
│   │   │
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   │   └── components/
│   │   │
│   │   └── utils/
│   │       ├── constants.js
│   │       ├── helpers.js
│   │       └── validators.js
│   │
│   ├── public/
│   │   ├── favicon.ico
│   │   └── images/
│   │
│   ├── tests/
│   │   ├── components/
│   │   │   └── WorkflowCard.test.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.test.js
│   │   └── services/
│   │       └── api.test.js
│   │
│   ├── docs/
│   │   ├── SETUP.md
│   │   ├── ARCHITECTURE.md
│   │   └── COMPONENTS.md
│   │
│   └── .eslintrc.json
│
├── 📁 firebase/
│   ├── README.md
│   ├── firestore.rules
│   ├── storage.rules
│   ├── firebase.json
│   │
│   ├── functions/
│   │   ├── package.json
│   │   ├── index.js
│   │   ├── src/
│   │   │   ├── workflows.js
│   │   │   ├── tasks.js
│   │   │   ├── emails.js
│   │   │   └── notifications.js
│   │   └── tests/
│   │       └── workflows.test.js
│   │
│   └── docs/
│       ├── SETUP.md
│       ├── RULES.md
│       └── FUNCTIONS.md
│
├── 📁 docs/
│   ├── README.md
│   ├── ARCHITECTURE.md
│   ├── GETTING_STARTED.md
│   ├── INSTALLATION.md
│   ├── CONFIGURATION.md
│   ├── API_REFERENCE.md
│   ├── WORKFLOWS.md
│   ├── TROUBLESHOOTING.md
│   ├── CONTRIBUTING.md
│   ├── CHANGELOG.md
│   └── images/
│       ├── architecture.png
│       ├── workflow-diagram.png
│       └── screenshots/
│
├── 📁 scripts/
│   ├── deploy.sh
│   ├── setup.sh
│   ├── test.sh
│   ├── build.sh
│   └── migrate.sh
│
├── 📁 config/
│   ├── .env.example
│   ├── .env.development
│   ├── .env.production
│   └── firebase-config.json
│
├── 📁 .github/
│   ├── workflows/
│   │   ├── test.yml
│   │   ├── deploy.yml
│   │   └── lint.yml
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── PULL_REQUEST_TEMPLATE.md
│
├── .gitignore
├── .eslintrc.json
├── .prettierrc.json
├── package.json (root)
├── README.md
└── CONTRIBUTING.md
```

---

# 📄 ไฟล์ที่สำคัญ

## **1. Root README.md**
````markdown
# 🚀 Workspace Automation System

ระบบอัตโนมัติสำหรับจัดการ Google Workspace

## 📋 Features

- ✅ Email to Task/Calendar
- ✅ Calendar Sync
- ✅ Drive Organization
- ✅ Real-time Dashboard
- ✅ Workflow Management

## 🏗️ Architecture

```
┌─────────────┐
│  Next.js    │
│  Frontend   │
└──────┬──────┘
       │
┌──────▼──────────┐
│  Vercel API     │
│  Backend        │
└──────┬──────────┘
       │
   ┌───┴────┬──────────┐
   │        │          │
┌──▼──┐ ┌──▼──┐  ┌────▼────┐
│Apps │ │Fire │  │Firebase  │
│Scrip│ │base │  │Functions │
└─────┘ └─────┘  └──────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Google Account
- Firebase Project
- Vercel Account

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/workspace-automation.git
cd workspace-automation

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

### Deploy

```bash
# Deploy to Vercel
npm run deploy

# Deploy Apps Script
npm run deploy:appsscript
```

## 📚 Documentation

- [Getting Started](./docs/GETTING_STARTED.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API_REFERENCE.md)
- [Workflows](./docs/WORKFLOWS.md)

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE)
````

---

## **2. apps-script/README.md**
````markdown
# Google Apps Script - Automation Engine

## 📁 Structure

```
src/
├── Config.gs          # ตั้งค่าทั่วไป
├── Auth.gs            # ยืนยันตัวตน
├── Webhooks.gs        # รับข้อมูลจาก Vercel
├── Workflows.gs       # จัดการ Workflows
├── Triggers.gs        # ตั้ง Triggers
├── GmailAPI.gs        # Gmail Operations
├── TasksAPI.gs        # Tasks Operations
├── CalendarAPI.gs     # Calendar Operations
├── DriveAPI.gs        # Drive Operations
├── ChatAPI.gs         # Chat Notifications
├── SheetsAPI.gs       # Sheets Operations
├── DocsAPI.gs         # Docs Operations
├── NotebookLMAPI.gs   # NotebookLM Operations
├── Database.gs        # Firebase Integration
└── Utils.gs           # Helper Functions
```

## 🔧 Setup

1. ไปที่ https://script.google.com
2. สร้าง Project ใหม่
3. Copy ไฟล์จากโฟลเดอร์ `src/`
4. ตั้ง Scopes ใน `appsscript.json`
5. Deploy

## 🚀 Deploy

```bash
npm run deploy:appsscript
```

## 📖 API Reference

[ดูเพิ่มเติม](./docs/API_REFERENCE.md)
````

---

## **3. backend/README.md**
````markdown
# Backend - Vercel API Routes

## 📁 Structure

```
pages/
├── api/
│   ├── auth/          # Authentication
│   ├── workflows/     # Workflow Management
│   ├── tasks/         # Task Management
│   ├── emails/        # Email Management
│   ├── events/        # Event Management
│   ├── logs/          # Logging
│   └── webhooks/      # Webhook Handlers
└── [pages]            # UI Pages
```

## 🔧 Setup

```bash
cd backend
npm install
cp .env.example .env.local
```

## 🚀 Development

```bash
npm run dev
```

## 📦 Deploy

```bash
npm run deploy
```

## 📖 API Documentation

[ดูเพิ่มเติม](./docs/API.md)
````

---

## **4. .gitignore**
```
# Environment variables
.env
.env.local
.env.*.local

# Dependencies
node_modules/
package-lock.json
yarn.lock

# Build outputs
.next/
out/
dist/
build/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Firebase
.firebase/
.firebaserc

# Apps Script
clasp.json

# Testing
coverage/
.nyc_output/

# Temporary
temp/
tmp/
```

---

## **5. .github/workflows/deploy.yml**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test

      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: npm run deploy

      - name: Deploy Apps Script
        env:
          CLASP_TOKEN: ${{ secrets.CLASP_TOKEN }}
        run: npm run deploy:appsscript
```

---

## **6. scripts/setup.sh**
```bash
#!/bin/bash

echo "🚀 Setting up Workspace Automation System..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup environment files
echo "⚙️  Setting up environment files..."
cp config/.env.example .env.local

# Setup Firebase
echo "🔥 Setting up Firebase..."
npm run setup:firebase

# Setup Apps Script
echo "📝 Setting up Apps Script..."
npm run setup:appsscript

# Setup Git hooks
echo "🪝 Setting up Git hooks..."
npm run setup:hooks

echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your credentials"
echo "2. Run 'npm run dev' to start development"
echo "3. Read docs/GETTING_STARTED.md for more info"
```

---

## **7. package.json (root)**
```json
{
  "name": "workspace-automation",
  "version": "1.0.0",
  "description": "Google Workspace Automation System",
  "private": true,
  "scripts": {
    "dev": "cd backend && npm run dev",
    "build": "npm run build:backend && npm run build:frontend",
    "build:backend": "cd backend && npm run build",
    "build:frontend": "cd frontend && npm run build",
    "deploy": "npm run build && npm run deploy:backend && npm run deploy:appsscript",
    "deploy:backend": "cd backend && npm run deploy",
    "deploy:frontend": "cd frontend && npm run deploy",
    "deploy:appsscript": "cd apps-script && npm run deploy",
    "test": "npm run test:backend && npm run test:frontend && npm run test:appsscript",
    "test:backend": "cd backend && npm run test",
    "test:frontend": "cd frontend && npm run test",
    "test:appsscript": "cd apps-script && npm run test",
    "lint": "npm run lint:backend && npm run lint:frontend",
    "lint:backend": "cd backend && npm run lint",
    "lint:frontend": "cd frontend && npm run lint",
    "setup": "bash scripts/setup.sh",
    "setup:firebase": "cd firebase && npm run setup",
    "setup:appsscript": "cd apps-script && npm run setup"
  },
  "workspaces": [
    "backend",
    "frontend",
    "apps-script",
    "firebase"
  ]
}
```

---

# 📊 Branch Strategy

```
main (production)
  ↑
  └── develop (development)
       ↑
       ├── feature/workflow-editor
       ├── feature/email-sync
       ├── bugfix/task-creation
       └── docs/api-reference
```

---

# 🔐 Secrets ที่ต้องเก็บใน GitHub

ไปที่ **Settings → Secrets → New repository secret**

```
VERCEL_TOKEN
CLASP_TOKEN
FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
FIREBASE_APP_ID
APPS_SCRIPT_WEBHOOK_URL
CHAT_WEBHOOK_URL
```

---

# 📝 Commit Convention

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Code style changes
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

ตัวอย่าง:
```
git commit -m "feat: Add email to task workflow"
git commit -m "fix: Fix calendar sync issue"
git commit -m "docs: Update API documentation"
```

---

# 🚀 Deployment Flow

```
1. Push to develop branch
   ↓
2. GitHub Actions runs tests
   ↓
3. If tests pass → Deploy to staging
   ↓
4. Create Pull Request to main
   ↓
5. Code review
   ↓
6. Merge to main
   ↓
7. GitHub Actions deploys to production
   ↓
8. Deploy Apps Script
   ↓
9. Deploy Firebase Functions
```

---
