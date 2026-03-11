const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Day 45 - Docker CI/CD</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          text-align: center;
        }
        h1 { color: #667eea; margin: 0 0 20px 0; }
        .info { color: #666; margin: 10px 0; }
        .badge { 
          background: #667eea; 
          color: white; 
          padding: 5px 15px; 
          border-radius: 20px;
          display: inline-block;
          margin: 10px 5px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Day 45 - Docker CI/CD Pipeline</h1>
        <p class="info">This app was automatically built and deployed using GitHub Actions</p>
        <div class="badge">Node.js</div>
        <div class="badge">Docker</div>
        <div class="badge">GitHub Actions</div>
        <p class="info">Built from commit: ${process.env.GIT_COMMIT || 'local'}</p>
        <p class="info">Running on port ${PORT}</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Day 45: Docker CI/CD Demo App');
});
