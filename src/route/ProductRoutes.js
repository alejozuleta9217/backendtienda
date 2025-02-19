const express = require("express");
const router = express.Router();
const { obtenerProductos } = require("../controller/productcontroller");

router.get("/", obtenerProductos);

module.exports = router;

