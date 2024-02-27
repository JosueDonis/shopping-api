const express = require('express');
const products = require('./products');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/products', (req, res) => {
  res.send(products);
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})