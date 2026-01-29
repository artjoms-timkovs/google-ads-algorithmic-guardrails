/**
 * Calculates the Z-Score for today's performance against historical data.
 * Formula: Z = (X - μ) / σ
 */
function checkAnomaly(currentMetric, history) {
  const mean = history.reduce((a, b) => a + b, 0) / history.length;
  
  const variance = history.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / history.length;
  const standardDeviation = Math.sqrt(variance);
  
  const zScore = (currentMetric - mean) / standardDeviation;
  
  return {
    isAnomaly: Math.abs(zScore) > CONFIG.ANOMALY_THRESHOLD,
    zScore: zScore.toFixed(2),
    mean: mean.toFixed(2)
  };
}
