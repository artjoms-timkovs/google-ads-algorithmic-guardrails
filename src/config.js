/**
 * SED Architecture™ Configuration
 * Defines the sensitivity thresholds for the anomaly detection engine.
 */
const CONFIG = {
  // Account limits
  MAX_DAILY_SPEND: 500, // Hard limit
  
  // Statistical thresholds
  LOOKBACK_WINDOW: 30, // Days to calculate moving average
  ANOMALY_THRESHOLD: 2.5, // Standard Deviations (Z-Score) to trigger alert
  
  // Communication
  EMAILS: ['alerts@yourdomain.com'],
  SLACK_WEBHOOK_URL: 'INSERT_WEBHOOK_URL_HERE' // Keep this generic in public repo!
};
