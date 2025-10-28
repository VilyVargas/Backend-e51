import { Router } from "express";
import { eliminadetallecompras, obtenerDetallesCompras, actualizardetalleCompraPatch, obtenerDetalleCompra, registrarDetalleCompra } from "../controllers/Detalles_compras.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/detallescompras", obtenerDetallesCompras);

// Ruta para obtenr un detalle de compra por su ID
router.get("/detallecompra/:id_detalle_compra", obtenerDetalleCompra);

// Ruta para registrar un nuevo Detalle de Compra
router.post('/registrardetallecompra', registrarDetalleCompra);

router.delete("/eliminardetallecompras/:id_detalle_compra", eliminadetallecompras);

router.patch("/actualizardetallecompra/:id_detalle_compra", actualizardetalleCompraPatch);

export default router;
