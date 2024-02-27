const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware cors
const app = express()
const PORT = 8000


// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json());

// Middleware para permitir solicitudes CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/products/:id', (req, res) => {
  res.send("Product ID: " + req.params.id);
})

app.get('/products', (req, res) => {
  res.json({products: []});
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})