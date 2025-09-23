import { Router } from "express";
import { eliminarventas, obtenerVentas } from "../controllers/ventas.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/ventas", obtenerVentas);

router.delete("/eliminarventa/:id_venta", eliminarventas);

export default router;
