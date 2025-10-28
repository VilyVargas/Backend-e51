import { Router } from "express";
import { eliminarempleado, obtenerEmpleados, actualizarEmpleadoPatch, obtenerEmpleado, registrarEmpleado} from "../controllers/empleado.controller.js";

const router = Router();

// Ruta para obtener todos los clientes
router.get("/empleados", obtenerEmpleados);

// Ruta para obtenr un empleado por su ID
router.get("/empleado/:id_empleado", obtenerEmpleado);

// Ruta para registrar un nuevo Empleado
router.post('/registrarempleado', registrarEmpleado);


router.delete("/eliminarempleado/:id_empleado", eliminarempleado);

router.patch('/actualizarempleado/:id_empleado', actualizarEmpleadoPatch);

export default router;
