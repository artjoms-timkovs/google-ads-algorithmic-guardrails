# Google Ads Algorithmic Guardrails

A JavaScript framework designed to run inside Google Ads Scripts environment. 
It replaces static "rule-based" alerts with **Statistical Anomaly Detection**.

### 📉 The Problem with Static Rules
Traditional scripts use hard thresholds (e.g., "Alert if CPC > $2.00"). 
These fail because they ignore market volatility and seasonality. A $2.00 CPC might be normal on Black Friday but catastrophic on a regular Tuesday.

### 📐 The Solution: Probabilistic Monitoring
This system applies the **SED Architecture™ (Truth Layer)** principles. 
Instead of static numbers, it calculates the **Standard Deviation (σ)** and **Z-Score** of account performance over a rolling 30-day window.

**Logic:**
1.  **Ingest:** Pull daily cost/conversions data.
2.  **Normalize:** Calculate Moving Average (μ) and Variance (σ²).
3.  **Evaluate:** If today's performance deviates by > 2.5σ (Z-Score), trigger an alert.

$$Z = \frac{X - \mu}{\sigma}$$

### 🛠 Tech Stack
* **Environment:** Google Apps Script (V8 Engine)
* **Logic:** Vanilla JavaScript (ES6+)
* **Math:** Custom statistical statistical library (no external dependencies)
* **Integrations:** Slack Webhooks & Gmail App

### 🚀 Usage
1.  Copy `src/` files into Google Ads Scripts editor.
2.  Configure `MAX_DAILY_SPEND` and `SLACK_WEBHOOK` in `config.js`.
3.  Schedule to run Hourly.
