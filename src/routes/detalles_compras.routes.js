import { Router } from "express";
import { obtenerDetallesCompras } from "../controllers/Detalles_compras.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/detalle_compras", obtenerDetallesCompras);

export default router;
