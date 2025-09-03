import { Router } from "express";
import { obtenerUsuario } from "../controllers/usuario.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/usuarios", obtenerUsuario);

export default router;
