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
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          overflow: hidden;
        }
        body::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(74, 86, 226, 0.3), transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(139, 92, 246, 0.2), transparent 50%);
          filter: blur(60px);
        }
        .container {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 50px 60px;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          text-align: center;
          position: relative;
          z-index: 1;
        }
        h1 { 
          color: #fff;
          margin: 0 0 20px 0;
          font-size: 2em;
          font-weight: 600;
        }
        .info { 
          color: rgba(255, 255, 255, 0.8);
          margin: 15px 0;
          font-size: 1em;
        }
        .badge { 
          background: rgba(120, 119, 198, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          padding: 8px 20px;
          border-radius: 25px;
          display: inline-block;
          margin: 10px 5px;
          backdrop-filter: blur(5px);
          font-weight: 500;
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
