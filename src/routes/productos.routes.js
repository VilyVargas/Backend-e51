import { Router } from "express";
import { obtenerProductos } from "../controllers/producto.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/productos", obtenerProductos);

export default router;
