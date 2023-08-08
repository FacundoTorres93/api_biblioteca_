const express = require("express");
const router = express.Router();
// const {getAllClientes, createCliente, updateCliente, deleteCliente} = require("../controllers/clienteCrontroller");

const clienteCrontroller = require("../controllers/clienteCrontroller");

router.get("/", clienteCrontroller.getAllClientes);
router.post("/", clienteCrontroller.createCliente);
router.put("/:id", clienteCrontroller.updateCliente);
router.delete("/:id", clienteCrontroller.deleteCliente);

// const {requiredScopes} = require("express-oauth2-jwt-bearer");

// router.get("/", requiredScopes("read:clientes"), getAllClientes);

// router.post("/", requiredScopes("write:clientes"), createCliente);

// router.put("/:id", requiredScopes("write:clientes"), updateCliente);

// router.delete("/:id", requiredScopes("write:clientes"), deleteCliente);

module.exports = router;