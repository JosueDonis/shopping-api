const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Agrega más rutas y lógica de manejo de solicitudes aquí

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
