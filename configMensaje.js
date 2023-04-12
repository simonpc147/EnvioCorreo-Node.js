
    const nodemailer = require('nodemailer');

    require('dotenv').config({path:'./.env'});

    module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.USER, // Cambialo por tu email
    pass: process.env.PASSWORD  // Cambialo por tu password
    }
    });
    const mailOptions = {
    from: `${formulario.nombre} <${formulario.email}>`,
    to: process.env.USER, // Cambia esta parte por el destinatario
    subject: formulario.asunto,
    html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email} <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
    };
    transporter.sendMail(mailOptions, function (err, info) {
    if (err)
    console.log(err)
    else
    console.log(info);
    });
    }