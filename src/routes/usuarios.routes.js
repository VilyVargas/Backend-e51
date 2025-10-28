import { Router } from "express";
import { obtenerUsuarios, eliminarusuario, actualizarUsuarioPatch, obtenerUsuario, registrarUsuario} from "../controllers/usuario.controller.js";


const router = Router();


// Ruta para obtener todos los clientes
router.get("/usuarios", obtenerUsuarios);

// Ruta para obtenr un usuario por su ID
router.get("/usuario/:id_usuario", obtenerUsuario);

// Ruta para registrar un nuevo Usuario
router.post('/registrarusuario', registrarUsuario);


router.delete("/eliminarusuario/:id_usuario", eliminarusuario);

router.patch('/actualizarusuario/:id_usuario', actualizarUsuarioPatch);

export default router;
