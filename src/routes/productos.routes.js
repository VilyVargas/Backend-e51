import { Router } from "express";
import { eliminarproducto, obtenerProductos } from "../controllers/producto.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/productos", obtenerProductos);

router.delete("/eliminarproducto/:id_producto", eliminarproducto);

export default router;
