#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project root directory."
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf node_modules/.vite/

# Update lockfile to avoid deployment issues
echo "🔧 Updating lockfile..."
rm -f pnpm-lock.yaml
pnpm install

# Run linting
echo "🔍 Running linter..."
pnpm run lint

# Build the project
echo "🏗️  Building project..."
pnpm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    echo "📝 Adding changes to git..."
    git add .
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy: Update build and dependencies $(date '+%Y-%m-%d %H:%M:%S')"
    
    # Push to main branch
    echo "🚀 Pushing to main branch..."
    git push origin main
    
    echo "✅ Deployment process completed successfully!"
    echo "🌐 Your site will be available on Vercel shortly."
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
