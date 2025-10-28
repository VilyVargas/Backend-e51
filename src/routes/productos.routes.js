import { Router } from "express";
import { eliminarproducto, obtenerProductos, actualizarProductoPatch, obtenerProducto, registrarProducto } from "../controllers/producto.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/productos", obtenerProductos);

// Ruta para obtenr un producto por su ID
router.get("/producto/:id_producto", obtenerProducto);

// Ruta para registrar un nuevo Producto
router.post('/registrarproducto', registrarProducto);


router.delete("/eliminarproducto/:id_producto", eliminarproducto);

router.patch('/actualizarproducto/:id_producto', actualizarProductoPatch);

export default router;
