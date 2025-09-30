import { Router } from "express";
import {
  eliminarcompra,
  obtenerCompras,
  actualizarComprapatch
} from "../controllers/compra.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/compras", obtenerCompras);

router.delete("/eliminarcompra/:id_compra", eliminarcompra);

router.patch("/actualizarcompra/:id_compra", actualizarComprapatch);

export default router;
