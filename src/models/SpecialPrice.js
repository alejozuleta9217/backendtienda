const mongoose = require("mongoose");

const precioEspecialSchema = new mongoose.Schema({
  id_usuario: Number,
  id_producto: mongoose.Schema.Types.ObjectId,
  precio_especial: Number,
  fecha_inicio: Date,
  fecha_fin: Date,
});

module.exports = mongoose.model("preciosespecialeszuleta13", precioEspecialSchema);



