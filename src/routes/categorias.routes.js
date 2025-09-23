import { Router } from "express";
import { eliminarCategoria, obtenerCategorias } from "../controllers/categorias.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/categorias", obtenerCategorias);

router.delete("/eliminarcategorias/:id_categoria", eliminarCategoria);

export default router;
