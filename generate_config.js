const fs = require('fs');

const config = {
  apiId: process.env.API_ID,
  apiHash: process.env.API_HASH,
  sessionId: process.env.SESSION_ID || ""
};

// Optional: simple validation
if (!config.apiId || !config.apiHash) {
  console.error("❌ Missing API_ID or API_HASH environment variables.");
  process.exit(1);
}

fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
console.log("✅ config.json generated");
