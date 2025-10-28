import { Router } from "express";
import {
  eliminarcompra, obtenerCompras, obtenerCompra, registrarCompra, actualizarCompraPatch
} from "../controllers/compra.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/compras", obtenerCompras);

// Ruta para obtener una compra por su ID
router.get("/compra/:id_compra", obtenerCompra);

// Ruta para registrar una nueva compra
router.post('/registrarcompra', registrarCompra);

router.delete("/eliminarcompra/:id_compra", eliminarcompra);

router.patch("/actualizarcompra/:id_compra", actualizarCompraPatch);

export default router;
