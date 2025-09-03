import { Router } from "express";
import { obtenerVentas } from "../controllers/ventas.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/ventas", obtenerVentas);

export default router;
