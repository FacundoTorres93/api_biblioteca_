const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String,
    activo: Boolean
}, { collection: 'clientes' });

const Cliente = mongoose.model('cliente', clienteSchema);
module.exports = Cliente;
