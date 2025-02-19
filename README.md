Este backend fue desarrollado sobre NodeJS con Express y sigue una arquitectura basada en controladores, modelos y rutas. Se encarga de gestionar productos y precios especiales en una base de datos la cual e encuentra en mongoDB

Instalación de dependencias

Ejecutar el siguiente comando en la raíz del proyecto:

npm install

Ejecución del servidor

npm run start

Endpoints

A continuación, se detallan algunos de los endpoints disponibles:

Productos

Obtener todos los productos

http://localhost:5000/api/productos

Crear un producto

http://localhost:5000/api/preciosEspeciales

body: 
{
  "id_usuario": "6750ef7cfce1f2f80959a98b",
  "id_producto": "6750ef7cfce1f2f80959a98b",
  "precio_especial": 850,
  "fecha_inicio": "2025-02-19T00:00:00.000Z",
  "fecha_fin": "2025-03-19T00:00:00.000Z"
}

Obtener precios especiales

http://localhost:5000/api/preciosEspeciales

Asignar un precio especial

http://localhost:5000/api/preciosEspeciales/6750ef7cfce1f2f80959a98f

body: 
{
  "precio_especial": 19000,
  "fecha_fin": "2026-01-01T00:00:00.000Z"
}

Estructura 

Controladores
Ubicados en src/controller/, estos archivos manejan la lógica de negocio de la aplicación.
•	PriceSpecialController.js: Controlador para la gestión de precios especiales.
•	ProductController.js: Controlador para la gestión de productos.
Modelos
Ubicados en src/models/, representan las entidades de la base de datos.
•	Product.js: Modelo para los productos.
•	SpecialPrice.js: Modelo para los precios especiales.
Rutas
Ubicadas en src/route/, definen las rutas de la API.
•	PriceSpecialRoutes.js: Rutas para manejar precios especiales.
•	ProductRoutes.js: Rutas para manejar productos.
•	index.js: Archivo que centraliza todas las rutas.
