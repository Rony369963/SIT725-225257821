const express = require('express');
const { add } = require('./calculator');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).type('html').send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome | SIT725 Calculator API</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 2rem; line-height: 1.6; color: #222; }
          h1 { color: #1f6feb; }
          code { background: #f5f5f5; padding: 0.15rem 0.35rem; border-radius: 4px; }
          .card { background: #fafafa; border: 1px solid #e5e5e5; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; }
          ul { padding-left: 1.2rem; }
          a { color: #0b5ed7; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Welcome to the SIT725 Calculator API 👋</h1>
        <p>Your server is running successfully. Use the endpoints below to interact with the API.</p>

        <div class="card">
          <h2>Available Endpoints</h2>
          <ul>
            <li>
              <code>GET /api/health</code> – Health check endpoint to verify the API is running.<br />
              Try: <a href="/api/health" target="_blank">/api/health</a>
            </li>
            <li>
              <code>GET /api/add?a=number&b=number</code> – Adds two numbers provided as query parameters.<br />
              Example: <a href="/api/add?a=10&b=25" target="_blank">/api/add?a=10&b=25</a>
            </li>
          </ul>
        </div>n
        
      </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/add', (req, res) => {
  try {
    const { a, b } = req.query;
    const result = add(a, b);
    res.status(200).json({ operation: 'add', a: Number(a), b: Number(b), result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = app;
