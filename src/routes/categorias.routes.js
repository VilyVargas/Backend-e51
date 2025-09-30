import { Router } from "express";
import { eliminarCategoria, obtenerCategorias, actualizarCategoriaPatch} from "../controllers/categorias.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/categorias", obtenerCategorias);

router.delete("/eliminarcategorias/:id_categoria", eliminarCategoria);

// Ruta para actualizar una categoría por su ID
router.patch('/actualizarcategoria/:id_categoria', actualizarCategoriaPatch);


export default router;
