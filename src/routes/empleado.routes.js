import { Router } from "express";
import { eliminarempleado, obtenerEmpleados, actualizarEmpleadoPatch } from "../controllers/empleado.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/empleados", obtenerEmpleados);

router.delete("/eliminarempleado/:id_empleado", eliminarempleado);

router.patch('/actualizarempleado/:id_empleado', actualizarEmpleadoPatch);

export default router;
