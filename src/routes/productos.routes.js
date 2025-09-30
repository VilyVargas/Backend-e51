import { Router } from "express";
import { eliminarproducto, obtenerProductos, actualizarProductoPatch } from "../controllers/producto.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/productos", obtenerProductos);

router.delete("/eliminarproducto/:id_producto", eliminarproducto);

router.patch('/actualizarproducto/:id_producto', actualizarProductoPatch);

export default router;
