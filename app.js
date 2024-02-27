const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el middleware cors
const app = express()
const PORT = 8000
const { v4: uuidv4 } = require('uuid');

const products = [
  {
    "id": uuidv4(),
    "name": "Nike Air Zoom Pegasus 38",
    "price": 129.99,
    "description": "Los Nike Air Zoom Pegasus 38 ofrecen una combinación perfecta de amortiguación reactiva y ajuste seguro para tus carreras diarias.",
    "category": "Running",
    "image": "https://cdn.fleetfeet.com/assets/2021_NIKE_PEGASUS_38_MENS_12.jpg/dynamic:1-aspect:2.4-fit:cover-strategy:entropy/2021_NIKE_PEGASUS_38_MENS_12--1440.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Adidas Ultraboost 21",
    "price": 179.99,
    "description": "Con una amortiguación innovadora y una parte superior elástica, los Adidas Ultraboost 21 brindan comodidad y retorno de energía en cada zancada.",
    "category": "Running",
    "image": "https://www.roadrunningreview.com/Adidas-Ultraboost-21_664_3_100857.jpg"
  },
  {
    "id": uuidv4(),
    "name": "New Balance Fresh Foam 1080v11",
    "price": 149.99,
    "description": "Los New Balance Fresh Foam 1080v11 ofrecen una excelente amortiguación y comodidad para correr largas distancias.",
    "category": "Running",
    "image": "https://cdn.fleetfeet.com/assets/New-Balance-1080v11-Masthead.png/dynamic:1-aspect:1.7777777777778-fit:cover-strategy:entropy/New-Balance-1080v11-Masthead--1600.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Nike Air Max 270",
    "price": 150.00,
    "description": "Los Nike Air Max 270 combinan estilo y comodidad con una unidad Air Max grande para una amortiguación excepcional.",
    "category": "Casual",
    "image": "https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2Fa079d7df8a513e7cd6e68dac50d46fec%2Fbccb3f30-b1e0-11ec-babd-0bded2be50ae?alt=media&token=449693ff-d9ec-40c4-a750-dbc7180693bf"
  },
  {
    "id": uuidv4(),
    "name": "Adidas Stan Smith",
    "price": 79.99,
    "description": "Los clásicos Adidas Stan Smith son un ícono de estilo urbano con su diseño limpio y minimalista.",
    "category": "Casual",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81vzmiTuU_GBBSI5uRKw_8QuleHs9iVC8Gg&usqp=CAU"
  },
  {
    "id": uuidv4(),
    "name": "Vans Old Skool",
    "price": 59.99,
    "description": "Los Vans Old Skool son una leyenda del skate con su diseño atemporal y durabilidad.",
    "category": "Casual",
    "image": "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2022/03/01/621e1f941c825.r_d.156-423-11451.jpeg"
  },
  {
    "id": uuidv4(),
    "name": "Asics Gel-Nimbus 23",
    "price": 149.99,
    "description": "Con una excelente amortiguación y soporte, los Asics Gel-Nimbus 23 son ideales para correr largas distancias con comodidad.",
    "category": "Running",
    "image": "https://www.bigpeachrunningco.com/wp-content/uploads/2020/12/Asics-Gel-Nimbus-23_01.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Nike React Infinity Run Flyknit",
    "price": 160.00,
    "description": "Los Nike React Infinity Run Flyknit ofrecen una conducción suave y estable para ayudar a reducir el riesgo de lesiones.",
    "category": "Running",
    "image": "https://www.runningshoesguru.com/wp-content/uploads/2020/02/Nike-React-Infinity-Run-Flyknit-Lateral-Side.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Reebok Nano X",
    "price": 129.99,
    "description": "Diseñados para el entrenamiento funcional, los Reebok Nano X ofrecen estabilidad y durabilidad para tus sesiones de ejercicio.",
    "category": "Training",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-x8P4nV2MHh4wu4N19SwY77qS-BW-wqC2sL3SGXR1d5xeae6bjLeW5PHPw26YjEuKbZI&usqp=CAU"
  },
  {
    "id": uuidv4(),
    "name": "Under Armour HOVR Phantom 2",
    "price": 150.00,
    "description": "Con una entresuela de amortiguación HOVR y una parte superior transpirable, los Under Armour HOVR Phantom 2 brindan comodidad y soporte para correr.",
    "category": "Running",
    "image": "https://5.imimg.com/data5/ANDROID/Default/2021/6/GC/ID/EM/16516658/product-jpeg-500x500.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Nike Air Force 1",
    "price": 90.00,
    "description": "Los Nike Air Force 1 son un clásico de la moda urbana con su diseño versátil y suela Air para una comodidad duradera.",
    "category": "Casual",
    "image": "https://images.nike.com/is/image/DotCom/DV0808_101_A_PREM?hei=3144&wid=3144&fmt=jpg&bgc=F5F5F5&iccEmbed=1"
  },
  {
    "id": uuidv4(),
    "name": "Adidas NMD R1",
    "price": 130.00,
    "description": "Inspirados en el running, los Adidas NMD R1 combinan estilo urbano con tecnología de rendimiento para una comodidad excepcional.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen12.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Puma Future Rider",
    "price": 79.99,
    "description": "Con un estilo retro y una comodidad moderna, los Puma Future Rider son perfectos para el uso diario.",
    "category": "Casual",
    "image": "https://ejemplo.com/imagen13.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Salomon Speedcross 5",
    "price": 140.00,
    "description": "Diseñados para el trail running, los Salomon Speedcross 5 ofrecen tracción y protección en terrenos difíciles.",
    "category": "Trail Running",
    "image": "https://ejemplo.com/imagen14.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Brooks Ghost 14",
    "price": 129.99,
    "description": "Los Brooks Ghost 14 proporcionan una amortiguación suave y una transición fluida para una carrera cómoda kilómetro tras kilómetro.",
    "category": "Running",
    "image": "https://i.ebayimg.com/images/g/RloAAOSwBNFh0HGJ/s-l500.jpg"
  },
  {
    "id": uuidv4(),
    "name": "Hoka One One Clifton 8",
    "price": 150.00,
    "description": "Con una amortiguación generosa y una parte superior ligera, los Hoka One One Clifton 8 son ideales para correr largas distancias con comodidad.",
    "category": "Running",
    "image": "https://lh4.googleusercontent.com/byjWl3ze7HkW3xSSy4rJC0ZpetGilIIzAFCeQ23S8ln0v8OY0Es4EbeBGCaxZw3svZ6smyco67tvF1sk42l2W-6SKlTtw0qaEH8sKDWKjQWBIabJKDzCKIsbUo35Mpio-EmfGww-=w1200-h630-p-k-no-nu"
  },
  {
    "id": uuidv4(),
    "name": "Mizuno Wave Rider 25",
    "price": 149.99,
    "description": "Los Mizuno Wave Rider 25 ofrecen una combinación perfecta de amortiguación y respuesta para una carrera suave y ágil.",
    "category": "Running",
    "image": "https://img01.ztat.net/article/spp-media-p1/cd70ec59f45f4aa0b098cfbebf7cf2b4/c3796c6a11394e95b4259218f64c9606.jpg?imwidth=762&filter=packshot"
  },
  {
    "id": uuidv4(),
    "name": "Nike ZoomX Vaporfly Next",
    "price": 250.00,
    "description": "Los Nike ZoomX Vaporfly Next son conocidos por su innovadora tecnología de amortiguación y su rendimiento superior en carreras de larga distancia.",
    "category": "Running",
    "image": "https://cdn.runrepeat.com/storage/gallery/product_content/37049/nike-zoomx-vaporfly-next-2-profile-photo-14747841-720.jpg"
  }]



// Middleware para analizar el cuerpo de la solicitud
app.use(bodyParser.json());

// Middleware para permitir solicitudes CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Shopping api is running! 🛍️')
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product.id === id);
  res.json(product);
})

app.get('/products', (req, res) => {
  res.json(products);
})

app.post("/checkout", (req, res) => {
  const cart = req.body;
  res.json({
    message: "Order placed successfully!",
    order: cart
  });
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})