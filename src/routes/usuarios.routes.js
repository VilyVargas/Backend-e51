import { Router } from "express";
import { obtenerUsuarios } from "../controllers/usuario.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/usuario", obtenerUsuarios);

export default router;
