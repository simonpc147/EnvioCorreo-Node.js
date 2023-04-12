
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

require('dotenv').config({path:'./.env'});

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(cors())


const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    max: 3,
    windowMs: 60 * 60 * 1000,
    message: "Demasiadas solicitudes de este IP"
});

app.use(limiter);

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).json({
        status: "éxito",
        message: "Hola desde el servidor"
    });
})
app.listen(port, () => {
console.log('Servidor corriendo en puerto', port )
});




