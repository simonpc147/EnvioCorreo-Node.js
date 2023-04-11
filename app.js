
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})
app.listen(port, () => {
console.log('Servidor corriendo en puerto', port )
});