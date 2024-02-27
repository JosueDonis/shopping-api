const express = require('express');
const products = require('./products');

const app = express()
const PORT = 8000

// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json());

// Middleware para permitir solicitudes CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/products', (req, res) => {
  res.send(products);
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})