import { Router } from "express";
import { eliminarcliente, obtenerClientes, actualizarClientePatch } from "../controllers/clientes.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/clientes", obtenerClientes);

router.delete("/eliminarcliente/:id_cliente", eliminarcliente);

// Ruta para actualizar un cliente por su ID
router.patch('/actualizarcliente/:id_cliente', actualizarClientePatch);


export default router;
