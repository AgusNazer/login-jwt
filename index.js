const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000

const routes = require('./routes/userRoute')


require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use(routes)


mongoose
.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('Conexión a MongoDB exitosa');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
  });

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));