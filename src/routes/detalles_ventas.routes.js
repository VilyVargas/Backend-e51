import { Router } from "express";
import { obtenerDetallesVentas, eliminadetalleventas, actualizardetalleVentaPatch } from "../controllers/Detalles_ventas.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/detallesventas", obtenerDetallesVentas);

router.delete("/eliminardetalleventas/:id_detalle_venta", eliminadetalleventas);

router.patch("/actualizardetalleventa/:id_detalle_venta", actualizardetalleVentaPatch);



export default router;
