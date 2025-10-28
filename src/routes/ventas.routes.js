import { Router } from "express";
import { eliminarventas, obtenerVentas, actualizarVentaPatch, obtenerVenta, registrarVenta} from "../controllers/ventas.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/ventas", obtenerVentas);

// Ruta para obtenr una venta por su ID
router.get("/venta/:id_venta", obtenerVenta);

// Ruta para registrar una nueva Venta  
router.post('/registrarventa', registrarVenta);


router.delete("/eliminarventa/:id_venta", eliminarventas);

router.patch('/actualizarventa/:id_venta', actualizarVentaPatch);

export default router;
