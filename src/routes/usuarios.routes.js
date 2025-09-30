import { Router } from "express";
import { obtenerUsuario, eliminarusuario, actualizarUsuarioPatch} from "../controllers/usuario.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/usuarios", obtenerUsuario);

router.delete("/eliminarusuario/:id_usuario", eliminarusuario);

router.patch('/actualizarusuario/:id_usuario', actualizarUsuarioPatch);

export default router;
