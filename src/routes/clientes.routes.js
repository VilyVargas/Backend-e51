import { Router } from "express";
import { eliminarcliente, obtenerClientes } from "../controllers/clientes.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/clientes", obtenerClientes);

router.delete("/eliminarcliente/:id_cliente", eliminarcliente);


export default router;
