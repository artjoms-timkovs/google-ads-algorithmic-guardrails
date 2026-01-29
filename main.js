/**
 * Main Execution Entry Point
 * --------------------------
 * Runs the daily diagnostic to ensure media buying efficiency matches
 * the projected economic output.
 */

function main() {
  Logger.log('Initializing SED Guardrails...');

  // 1. Fetch Data (Extract)
  const today = AdsApp.currentAccount().getStatsFor('TODAY');
  const spend = today.getCost();
  
  // 2. Fetch History for Context
  const history = getLast30DaysSpend(); // (Helper function assumed)

  // 3. Analyze (Scientific Approach)
  const analysis = checkAnomaly(spend, history);

  if (analysis.isAnomaly) {
    Logger.log(`CRITICAL: Anomaly detected. Z-Score: ${analysis.zScore}`);
    // Trigger Alert Logic here
    sendAlert(`Spend Deviation Detected! Z-Score: ${analysis.zScore}`);
  } else {
    Logger.log('System operating within normal statistical variance.');
  }
}
