const PrecioEspecial = require("../models/SpecialPrice");

exports.obtenerPreciosEspeciales = async (req, res) => {
  try {
    const precios = await PrecioEspecial.find();
    res.json(precios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener precios especiales" });
  }
};

exports.agregarPrecioEspecial = async (req, res) => {
  try {
    const nuevoPrecio = new PrecioEspecial(req.body);
    await nuevoPrecio.save();
    res.json({ mensaje: "Precio especial agregado" });
  } catch (error) {
    console.error("Error al agregar precio especial:", error);
    res.status(500).json({ error: error.message || "Error al agregar precio especial" });
  }
};

exports.actualizarPrecioEspecial = async (req, res) => {
  try {
    const { id } = req.params;

    const precioEspecialActualizado = await PrecioEspecial.findOneAndUpdate(
      { id_producto: id },
      req.body, 
      { new: true } 
    );

    if (!precioEspecialActualizado) {
      return res.status(404).json({ error: "Precio especial no encontrado para este producto" });
    }

    res.json({
      mensaje: "Precio especial actualizado",
      data: precioEspecialActualizado,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar precio especial" });
  }
};

exports.validarUsuarioEnPrecios = async (req, res) => {
  try {
    const { id_usuario, id_producto } = req.body;
    const precioEspecial = await PrecioEspecial.findOne({ id_usuario, id_producto });
    res.json({ precioEspecial });
  } catch (error) {
    res.status(500).json({ error: "Error en la validación" });
  }
};
