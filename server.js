require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Permitir solicitudes desde el frontend
app.use(express.static("public")); // Servir archivos estáticos desde public/

// Configurar transporte de correo
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ruta para manejar el envío de correos
app.post("/api/send-email", async (req, res) => {
  const { name, phone, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nTeléfono: ${phone}\nCorreo: ${email}\n\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error al enviar el correo" });
  }
});

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
