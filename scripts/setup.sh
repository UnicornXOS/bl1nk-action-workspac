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
