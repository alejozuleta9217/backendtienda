const express = require("express");
const router = express.Router();
const {
  obtenerPreciosEspeciales,
  agregarPrecioEspecial,
  actualizarPrecioEspecial,
  validarUsuarioEnPrecios,
} = require("../controller/PriceSpecialController");

router.get("/", obtenerPreciosEspeciales);
router.post("/", agregarPrecioEspecial);
router.put("/:id", actualizarPrecioEspecial);
router.post("/validar", validarUsuarioEnPrecios);

module.exports = router;
