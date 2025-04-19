const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Ruta API
app.get('/api', (req, res) => {
  res.json({ mensaje: "Hola desde el backend!" });
});

app.listen(PORT, () => {
  console.log(`[INFO] Servidor corriendo en http://localhost:${PORT}`);
});
