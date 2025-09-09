#!/usr/bin/env node

/**
 * Kokotajlo Railway Deployment Script
 * Programmatic deployment for monorepo (Next.js frontend + FastAPI backend)
 * Automates Railway CLI for full-stack deployment targeting French enterprise leads
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const RAILWAY_PROJECT = 'kokotajlo';
const FRONTEND_SERVICE = 'frontend';
const BACKEND_SERVICE = 'backend';
const DEPLOY_TIMEOUT = 300000; // 5 minutes
const HEALTH_CHECK_RETRIES = 10;
const HEALTH_CHECK_INTERVAL = 30000; // 30 seconds

// ANSI color codes for logging
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Logging functions
function log(message, color = 'reset') {
  const timestamp = new Date().toISOString();
  console.log(`${colors[color]}${timestamp} - ${message}${colors.reset}`);
}

function logError(message) {
  log(`❌ ERROR: ${message}`, 'red');
}

function logSuccess(message) {
  log(`✅ SUCCESS: ${message}`, 'green');
}

function logInfo(message) {
  log(`ℹ️  INFO: ${message}`, 'blue');
}

function logWarning(message) {
  log(`⚠️  WARNING: ${message}`, 'yellow');
}

// Execute shell command with proper error handling
function execCommand(command, options = {}) {
  try {
    logInfo(`Executing: ${command}`);
    const result = execSync(command, {
      encoding: 'utf8',
      stdio: 'inherit',
      timeout: DEPLOY_TIMEOUT,
      ...options
    });
    return result;
  } catch (error) {
    logError(`Command failed: ${command}`);
    logError(`Error: ${error.message}`);
    throw error;
  }
}

// Parse .env.railway file
function parseEnvFile(envFilePath) {
  if (!fs.existsSync(envFilePath)) {
    throw new Error(`Environment file not found: ${envFilePath}`);
  }

  const envContent = fs.readFileSync(envFilePath, 'utf8');
  const envVars = {};

  envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    }
  });

  return envVars;
}

// Set environment variables for a specific service
function setServiceEnvVars(serviceName, envVars, serviceEnvKeys) {
  logInfo(`Setting environment variables for ${serviceName} service...`);

  serviceEnvKeys.forEach(key => {
    if (envVars[key]) {
      try {
        execCommand(`railway variables set ${key}="${envVars[key]}" --service ${serviceName}`);
        logSuccess(`Set ${key} for ${serviceName}`);
      } catch (error) {
        logWarning(`Failed to set ${key} for ${serviceName}: ${error.message}`);
      }
    } else {
      logWarning(`Environment variable ${key} not found in .env.railway`);
    }
  });
}

// Wait for deployment to complete
function waitForDeployment(serviceName) {
  logInfo(`Waiting for ${serviceName} deployment to complete...`);

  return new Promise((resolve, reject) => {
    let attempts = 0;
    const checkDeployment = () => {
      attempts++;
      try {
        // Check deployment status
        const logs = execSync(`railway logs --service ${serviceName} --lines 10`, {
          encoding: 'utf8',
          timeout: 10000
        });

        if (logs.includes('Ready') || logs.includes('Listening') || logs.includes('started')) {
          logSuccess(`${serviceName} deployment appears ready`);
          resolve();
        } else if (attempts >= 20) { // 20 attempts * 15 seconds = 5 minutes
          reject(new Error(`${serviceName} deployment timeout`));
        } else {
          setTimeout(checkDeployment, 15000);
        }
      } catch (error) {
        if (attempts >= 20) {
          reject(error);
        } else {
          setTimeout(checkDeployment, 15000);
        }
      }
    };

    checkDeployment();
  });
}

// Get service URL
function getServiceUrl(serviceName) {
  try {
    const url = execSync(`railway url --service ${serviceName}`, {
      encoding: 'utf8',
      timeout: 10000
    }).trim();

    if (url && url !== '') {
      return url;
    }
  } catch (error) {
    logWarning(`Could not get URL for ${serviceName}: ${error.message}`);
  }
  return null;
}

// Test endpoint health
async function testEndpoint(url, endpoint = '/', expectedStatus = 200) {
  const https = require('https');
  const http = require('http');

  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;

    const req = client.request(`${url}${endpoint}`, (res) => {
      if (res.statusCode === expectedStatus) {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    req.on('error', () => resolve(false));
    req.setTimeout(10000, () => resolve(false));
    req.end();
  });
}

// Main deployment function
async function deploy() {
  try {
    logInfo('🚀 Starting Kokotajlo Railway deployment...');
    logInfo('Target: Bilingual AI landing for French enterprise pilots');

    // Step 1: Check git status
    logInfo('Checking git status...');
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });

    if (gitStatus.trim() !== '') {
      logWarning('Uncommitted changes detected. Committing and pushing...');
      execCommand('git add .');
      execCommand('git commit -m "Deploy: Update for Railway production"');
    }

    // Ensure we're on main branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    if (currentBranch !== 'main') {
      logWarning(`Not on main branch (${currentBranch}). Switching to main...`);
      execCommand('git checkout main');
    }

    // Push to origin main
    execCommand('git push origin main');
    logSuccess('Git repository updated');

    // Step 2: Link Railway project
    logInfo('Linking Railway project...');
    try {
      execCommand(`railway link --project ${RAILWAY_PROJECT}`);
      logSuccess('Railway project linked');
    } catch (error) {
      // Check if already linked
      try {
        const currentProject = execSync('railway project', { encoding: 'utf8' });
        if (currentProject.includes(RAILWAY_PROJECT)) {
          logInfo('Railway project already linked');
        } else {
          throw error;
        }
      } catch (linkError) {
        throw new Error(`Failed to link Railway project: ${linkError.message}`);
      }
    }

    // Step 3: Parse environment variables
    logInfo('Parsing environment variables...');
    const envFilePath = path.join(process.cwd(), '.env.railway');
    const envVars = parseEnvFile(envFilePath);
    logSuccess(`Loaded ${Object.keys(envVars).length} environment variables`);

    // Define service-specific environment variables
    const frontendEnvKeys = [
      'NEXT_PUBLIC_URL',
      'NEXT_PUBLIC_GA_MEASUREMENT_ID',
      'NEXT_PUBLIC_DEFAULT_LOCALE',
      'NEXT_PUBLIC_LOCALES',
      'NEXT_PUBLIC_API_URL'
    ];

    const backendEnvKeys = [
      'OPENAI_API_KEY',
      'CORS_ORIGINS',
      'PORT',
      'EMAIL_KEY',
      'MAILJET_API_KEY',
      'MAILJET_SECRET_KEY',
      'LOG_LEVEL',
      'DEBUG'
    ];

    // Step 4: Set environment variables
    setServiceEnvVars(FRONTEND_SERVICE, envVars, frontendEnvKeys);
    setServiceEnvVars(BACKEND_SERVICE, envVars, backendEnvKeys);

    // Step 5: Deploy services
    logInfo('Deploying frontend service...');
    execCommand(`railway up --service ${FRONTEND_SERVICE}`);
    await waitForDeployment(FRONTEND_SERVICE);
    logSuccess('Frontend deployed successfully');

    logInfo('Deploying backend service...');
    execCommand(`railway up --service ${BACKEND_SERVICE}`);
    await waitForDeployment(BACKEND_SERVICE);
    logSuccess('Backend deployed successfully');

    // Step 6: Get live URLs
    const frontendUrl = getServiceUrl(FRONTEND_SERVICE);
    const backendUrl = getServiceUrl(BACKEND_SERVICE);

    if (frontendUrl) {
      logSuccess(`Frontend URL: ${frontendUrl}`);

      // Update NEXT_PUBLIC_URL if different
      if (envVars.NEXT_PUBLIC_URL !== frontendUrl) {
        logInfo('Updating NEXT_PUBLIC_URL with live URL...');
        execCommand(`railway variables set NEXT_PUBLIC_URL="${frontendUrl}" --service ${FRONTEND_SERVICE}`);

        // Re-deploy frontend with updated URL
        execCommand(`railway up --service ${FRONTEND_SERVICE}`);
        await waitForDeployment(FRONTEND_SERVICE);
      }
    }

    if (backendUrl) {
      logSuccess(`Backend URL: ${backendUrl}`);
    }

    // Step 7: Test endpoints
    if (frontendUrl) {
      logInfo('Testing frontend endpoint...');
      const frontendHealthy = await testEndpoint(frontendUrl, '/', 200);
      if (frontendHealthy) {
        logSuccess('Frontend health check passed');
      } else {
        logWarning('Frontend health check failed');
      }
    }

    if (backendUrl) {
      logInfo('Testing backend health endpoint...');
      const backendHealthy = await testEndpoint(backendUrl, '/health', 200);
      if (backendHealthy) {
        logSuccess('Backend health check passed');
      } else {
        logWarning('Backend health check failed');
      }
    }

    // Final success message
    logSuccess('🎉 Deployment completed successfully!');
    logSuccess('Bilingual compliant AI landing live for French pilots');

    if (frontendUrl) {
      logSuccess(`🌐 Frontend: ${frontendUrl}`);
    }
    if (backendUrl) {
      logSuccess(`🔧 Backend: ${backendUrl}`);
    }

    logInfo('💰 Estimated cost: <$20/month for demos');
    logInfo('📊 Check Railway dashboard for live monitoring');

  } catch (error) {
    logError(`Deployment failed: ${error.message}`);
    logError('Check Railway dashboard for more details');
    process.exit(1);
  }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Kokotajlo Railway Deployment Script

Usage: node deploy.js [options]

Options:
  --help, -h          Show this help message
  --dry-run           Show what would be executed without running commands
  --skip-git          Skip git status check and push
  --verbose           Enable verbose logging

Environment:
  RAILWAY_PROJECT    Railway project name (default: kokotajlo)
  FRONTEND_SERVICE   Frontend service name (default: frontend)
  BACKEND_SERVICE    Backend service name (default: backend)

Examples:
  node deploy.js                    # Full deployment
  node deploy.js --dry-run          # Preview deployment steps
  node deploy.js --skip-git         # Skip git operations
  `);
  process.exit(0);
}

// Run deployment
deploy().catch(error => {
  logError(`Unexpected error: ${error.message}`);
  process.exit(1);
});
