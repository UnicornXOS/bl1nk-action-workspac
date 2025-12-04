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
