import { Router } from "express";
import { eliminarempleado, obtenerEmpleados } from "../controllers/empleado.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/empleados", obtenerEmpleados);

router.delete("/eliminarempleado/:id_empleado", eliminarempleado);

export default router;
