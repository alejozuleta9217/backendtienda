
const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  name: String,         
  price: Number,        
  category: String,
  stock: Number,
  description: String,  
  brand: String,
  sku: String,
  tags: [String],       
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("Producto", productoSchema);


