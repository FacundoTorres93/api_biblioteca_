const express = require("express");
const mongoose = require('mongoose');
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");


require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open",  () => {
  console.log("Database connected");
})

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");
const clienteRoutes = require("./routes/clientes");

//Configuramos el middleware de autenticacion
app.use("/api/libros", autenticacion,  librosRouter);
app.use("/api/clientes",autenticacion ,clienteRoutes); // autenticacion

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;