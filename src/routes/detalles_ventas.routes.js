import { Router } from "express";
import { obtenerDetallesVentas } from "../controllers/Detalles_ventas.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/detallesventas", obtenerDetallesVentas);

export default router;
