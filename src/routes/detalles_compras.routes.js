import { Router } from "express";
import { eliminadetallecompras, obtenerDetallesCompras, actualizardetalleComprapatch  } from "../controllers/Detalles_compras.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/detallescompras", obtenerDetallesCompras);

router.delete("/eliminardetallecompras/:id_detalle_compra", eliminadetallecompras);

router.patch("/actualizardetallecompra/:id_detalle_compra", actualizardetalleComprapatch);

export default router;
