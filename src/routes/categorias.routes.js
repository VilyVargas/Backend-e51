import { Router } from "express";
import {
  eliminarCategoria,
  obtenerCategorias,
  actualizarCategoriaPatch,
  registrarCategoria,
  obtenerCategoria,
} from "../controllers/categorias.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/categorias", obtenerCategorias);

router.delete("/eliminarcategorias/:id_categoria", eliminarCategoria);

// Ruta para actualizar una categoría por su ID
router.patch("/actualizarcategoria/:id_categoria", actualizarCategoriaPatch);

// Ruta para registrar una nueva Categoría
router.post("/registrarcategoria", registrarCategoria);


//nashdajshdjashdjas
// Ruta para obtenr una categoria por su ID
router.get("/categoria/:id_categorias", obtenerCategoria);

export default router;
