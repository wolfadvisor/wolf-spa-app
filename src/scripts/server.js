/* =============================================================
   server.js — Backend SPA (Node + Express)
   ============================================================= */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

/* =============================================================
   MIDDLEWARES
   ============================================================= */

app.use(express.json());

// CORS (DEV)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

/* =============================================================
   SERVIR FRONTEND (IMPORTANTE)
   ============================================================= */

app.use(express.static(path.join(__dirname, '..')));

/* =============================================================
   CAMINHOS
   ============================================================= */

const PAGES_DIR = path.join(__dirname, '..', 'pages');

/* =============================================================
   ROTA PRINCIPAL
   ============================================================= */

app.post('/api/pages/:page', (req, res) => {

  const page = req.params.page;

  console.log('📥 Request:', page);

  // ✅ filePath EXISTE AQUI DENTRO
  const filePath = path.join(PAGES_DIR, `${page}.html`);

  console.log('📂 Path:', filePath);

  // ✅ validação correta (dentro da rota)
  if (!fs.existsSync(filePath)) {
    console.log('❌ FILE NOT FOUND');
    return res.status(404).send('Page not found');
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  console.log('✅ FILE LOADED');

  res.send(html);
});

/* =============================================================
   START
   ============================================================= */

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});