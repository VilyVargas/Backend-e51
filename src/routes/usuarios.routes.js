import { Router } from "express";
import { obtenerUsuario, eliminarusuario} from "../controllers/usuario.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/usuarios", obtenerUsuario);

router.delete("/eliminarusuario/:id_usuario", eliminarusuario);

export default router;
