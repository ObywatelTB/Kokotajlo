#!/bin/bash

# Kokotajlo Railway Deployment Script
# Simple bash deployment for monorepo (Next.js frontend + FastAPI backend)
# Deploys bilingual AI landing page for French enterprise pilots

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if .env.railway exists
if [ ! -f ".env.railway" ]; then
    log_error ".env.railway file not found! Please create it with your environment variables."
    log_info "Copy from template: cp env.railway.example .env.railway"
    exit 1
fi

log_info "🚀 Starting Kokotajlo Railway deployment..."
log_info "Target: Bilingual AI landing for French enterprise pilots"

# Step 1: Git push to ensure latest code
log_info "Pushing latest code to main branch..."
git add .
git commit -m "Deploy: Update for Railway production" 2>/dev/null || log_warning "No changes to commit"
git push origin main
log_success "Git repository updated"

# Step 2: Link Railway project
log_info "Linking Railway project 'kokotajlo'..."
railway link --project kokotajlo
log_success "Railway project linked"

# Step 3: Parse and set environment variables from .env.railway
log_info "Setting environment variables from .env.railway..."
while IFS='=' read -r key value; do
    # Skip empty lines and comments
    [[ -z "$key" || "$key" =~ ^[[:space:]]*# ]] && continue

    # Remove leading/trailing whitespace
    key=$(echo "$key" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    value=$(echo "$value" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')

    # Skip if key or value is empty
    [[ -z "$key" || -z "$value" ]] && continue

    log_info "Setting $key..."
    if railway variables set "$key=$value"; then
        log_success "Set $key"
    else
        log_warning "Failed to set $key"
    fi
done < .env.railway

log_success "Environment variables configured"

# Step 4: Deploy frontend service (Next.js)
log_info "Deploying frontend service (Next.js)..."
if railway up --service frontend; then
    log_success "Frontend deployment initiated"
else
    log_error "Frontend deployment failed"
    exit 1
fi

# Step 5: Deploy backend service (FastAPI)
log_info "Deploying backend service (FastAPI)..."
if railway up --service backend; then
    log_success "Backend deployment initiated"
else
    log_error "Backend deployment failed"
    exit 1
fi

# Step 6: Wait for deployments and get URLs
log_info "Waiting for deployments to complete..."
sleep 30  # Give Railway some time to process

# Get frontend URL
log_info "Getting frontend URL..."
FRONTEND_URL=$(railway url --service frontend 2>/dev/null || echo "")

if [ -n "$FRONTEND_URL" ]; then
    log_success "Frontend URL: $FRONTEND_URL"
else
    log_warning "Could not retrieve frontend URL yet"
    FRONTEND_URL="https://kokotajlo.up.railway.app"  # Fallback
fi

# Get backend URL
log_info "Getting backend URL..."
BACKEND_URL=$(railway url --service backend 2>/dev/null || echo "")

if [ -n "$BACKEND_URL" ]; then
    log_success "Backend URL: $BACKEND_URL"
else
    log_warning "Could not retrieve backend URL yet"
    BACKEND_URL="https://kokotajlo-backend.up.railway.app"  # Fallback
fi

# Step 7: Test endpoints
log_info "Testing frontend endpoint..."
if curl -f -s "$FRONTEND_URL" > /dev/null 2>&1; then
    log_success "Frontend health check passed (HTTP 200)"
else
    log_warning "Frontend health check failed - may still be deploying"
fi

log_info "Testing backend health endpoint..."
if curl -f -s "$BACKEND_URL/health" > /dev/null 2>&1; then
    log_success "Backend health check passed"
else
    log_warning "Backend health check failed - may still be deploying"
fi

# Step 8: Update NEXT_PUBLIC_URL if different
CURRENT_NEXT_PUBLIC_URL=$(grep "^NEXT_PUBLIC_URL=" .env.railway | cut -d'=' -f2- | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
if [ "$CURRENT_NEXT_PUBLIC_URL" != "$FRONTEND_URL" ] && [ -n "$FRONTEND_URL" ]; then
    log_info "Updating NEXT_PUBLIC_URL to live URL..."
    if railway variables set "NEXT_PUBLIC_URL=$FRONTEND_URL"; then
        log_success "NEXT_PUBLIC_URL updated"

        # Redeploy frontend with new URL
        log_info "Redeploying frontend with updated URL..."
        railway up --service frontend
    else
        log_warning "Failed to update NEXT_PUBLIC_URL"
    fi
fi

# Final success message
log_success "🎉 Deployment completed!"
log_success "Bilingual compliant AI landing live for French pilots"
log_success "💰 Estimated cost: <$20/month for demos"
log_success "📊 Check Railway dashboard for live monitoring"

if [ -n "$FRONTEND_URL" ]; then
    log_success "🌐 Frontend: $FRONTEND_URL"
fi

if [ -n "$BACKEND_URL" ]; then
    log_success "🔧 Backend: $BACKEND_URL"
fi

log_info "🚀 Ready to drive French enterprise leads through pilots & equity!"

# Instructions for next steps
echo ""
log_info "Next steps:"
log_info "1. Visit $FRONTEND_URL to test the landing page"
log_info "2. Test chatbot: POST to $BACKEND_URL/chat"
log_info "3. Check Railway dashboard for logs and metrics"
log_info "4. Add custom domain (.fr) in Railway dashboard for French SEO"

exit 0
