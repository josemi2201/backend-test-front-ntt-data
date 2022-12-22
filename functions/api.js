const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express()

app.use(cors())
app.use( express.json())

//Rutas
const baseRoute = "/api"
app.use(`${baseRoute}/product`, require('../routes/product.js'));
app.use(`${baseRoute}/cart`, require('../routes/cart.js'));

module.exports.handler = serverless(app);



