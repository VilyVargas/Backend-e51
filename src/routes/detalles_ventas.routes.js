import { Router } from "express";
import { obtenerDetallesVentas, eliminadetalleventas, actualizardetalleVentaPatch, obtenerDetalleVenta, registrarDetalleVenta } from "../controllers/Detalles_ventas.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/detallesventas", obtenerDetallesVentas);

// Ruta para obtenr un detalle de venta por su ID
router.get("/detalleventa/:id_detalle_venta", obtenerDetalleVenta);

// Ruta para registrar un nuevo Detalle de Venta
router.post('/registrardetalleventa', registrarDetalleVenta);

router.delete("/eliminardetalleventas/:id_detalle_venta", eliminadetalleventas);

router.patch("/actualizardetalleventa/:id_detalle_venta", actualizardetalleVentaPatch);



export default router;
