const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/productos", require("./route/ProductRoutes"));
app.use("/api/preciosEspeciales", require("./route/PriceSpecialRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor en ejecución en http://localhost:${PORT}`);
});


