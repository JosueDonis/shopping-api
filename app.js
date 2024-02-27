const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware cors
const app = express()
const PORT = 8000
const products = [
  {
    "id": crypto.randomUUID(),
    "name": "Nike Air Zoom Pegasus 38",
    "price": 129.99,
    "description": "Los Nike Air Zoom Pegasus 38 ofrecen una combinación perfecta de amortiguación reactiva y ajuste seguro para tus carreras diarias.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen1.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Adidas Ultraboost 21",
    "price": 179.99,
    "description": "Con una amortiguación innovadora y una parte superior elástica, los Adidas Ultraboost 21 brindan comodidad y retorno de energía en cada zancada.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen2.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "New Balance Fresh Foam 1080v11",
    "price": 149.99,
    "description": "Los New Balance Fresh Foam 1080v11 ofrecen una excelente amortiguación y comodidad para correr largas distancias.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen3.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Nike Air Max 270",
    "price": 150.00,
    "description": "Los Nike Air Max 270 combinan estilo y comodidad con una unidad Air Max grande para una amortiguación excepcional.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen4.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Adidas Stan Smith",
    "price": 79.99,
    "description": "Los clásicos Adidas Stan Smith son un ícono de estilo urbano con su diseño limpio y minimalista.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen5.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Vans Old Skool",
    "price": 59.99,
    "description": "Los Vans Old Skool son una leyenda del skate con su diseño atemporal y durabilidad.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen6.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Asics Gel-Nimbus 23",
    "price": 149.99,
    "description": "Con una excelente amortiguación y soporte, los Asics Gel-Nimbus 23 son ideales para correr largas distancias con comodidad.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen7.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Nike React Infinity Run Flyknit",
    "price": 160.00,
    "description": "Los Nike React Infinity Run Flyknit ofrecen una conducción suave y estable para ayudar a reducir el riesgo de lesiones.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen8.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Reebok Nano X",
    "price": 129.99,
    "description": "Diseñados para el entrenamiento funcional, los Reebok Nano X ofrecen estabilidad y durabilidad para tus sesiones de ejercicio.",
    "category": "Training",
    "image": "https://ejemplo.com/imagen9.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Under Armour HOVR Phantom 2",
    "price": 150.00,
    "description": "Con una entresuela de amortiguación HOVR y una parte superior transpirable, los Under Armour HOVR Phantom 2 brindan comodidad y soporte para correr.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen10.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Nike Air Force 1",
    "price": 90.00,
    "description": "Los Nike Air Force 1 son un clásico de la moda urbana con su diseño versátil y suela Air para una comodidad duradera.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen11.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Adidas NMD R1",
    "price": 130.00,
    "description": "Inspirados en el running, los Adidas NMD R1 combinan estilo urbano con tecnología de rendimiento para una comodidad excepcional.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen12.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Puma Future Rider",
    "price": 79.99,
    "description": "Con un estilo retro y una comodidad moderna, los Puma Future Rider son perfectos para el uso diario.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen13.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Salomon Speedcross 5",
    "price": 140.00,
    "description": "Diseñados para el trail running, los Salomon Speedcross 5 ofrecen tracción y protección en terrenos difíciles.",
    "category": "Trail Running",
    "image": "https://ejemplo.com/imagen14.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Brooks Ghost 14",
    "price": 129.99,
    "description": "Los Brooks Ghost 14 proporcionan una amortiguación suave y una transición fluida para una carrera cómoda kilómetro tras kilómetro.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen15.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Hoka One One Clifton 8",
    "price": 150.00,
    "description": "Con una amortiguación generosa y una parte superior ligera, los Hoka One One Clifton 8 son ideales para correr largas distancias con comodidad.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen16.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Mizuno Wave Rider 25",
    "price": 149.99,
    "description": "Los Mizuno Wave Rider 25 ofrecen una combinación perfecta de amortiguación y respuesta para una carrera suave y ágil.",
    "category": "Running",
    "image": "https://ejemplo.com/imagen17.jpg"
  },
  {
    "id": crypto.randomUUID(),
    "name": "Nike ZoomX Vaporfly Next%",
    "price": 250.00,
    "description": "Los Nike ZoomX Vaporfly Next% son conocidos por su innovadora tecnología de amortiguación y su rendimiento superior en carreras de larga distancia.",
    "category": "Running",
    "image": "https://ejemplo.com/"
  }]


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
  res.json(products);
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})