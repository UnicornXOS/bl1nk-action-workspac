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
