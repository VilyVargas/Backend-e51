import { Router } from "express";
import { eliminadetallecompras, obtenerDetallesCompras } from "../controllers/Detalles_compras.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/detallescompras", obtenerDetallesCompras);

router.delete("/eliminardetallecompras/:id_detalle_compra", eliminadetallecompras);

export default router;
