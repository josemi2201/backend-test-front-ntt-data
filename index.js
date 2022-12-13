const express = require('express');
const cors = require('cors');
const PORT = 8001

const app = express()

app.use(cors())
app.use( express.json())

//Rutas
app.use("/api/product", require('./routes/product.js'));
app.use("/api/cart", require('./routes/cart.js'));

// Iniciar el servidor
app.listen(PORT,()=>{
    console.log(`Servidor funcionando en: ${PORT}`)
})