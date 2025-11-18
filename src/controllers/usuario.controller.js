import { pool } from "../../db_connection.js";

// Obtener todas los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Usuarios");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener una usuario por su ID
  export const obtenerUsuario = async (req, res) => {
    try {
      const id_usuario = req.params.id_usuario;
      const [result] = await pool.query(
        "SELECT * FROM Usuarios WHERE id_usuario= ?",
        [id_usuario]
      );
      if (result.length <= 0) {
        return res.status(404).json({
          mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`,
        });
      }
      res.json(result[0]);
    }
    catch (error) {
      return res.status(500).json({
        mensaje: "Ha ocurrido un error al leer los datos de los usuarios.",
      });
    }
  };

  // Registrar un nuevo Usuario
  export const registrarUsuario = async (req, res) => {
    try {
      const { usuario, contraseña } = req.body;
      const [result] = await pool.query(
        'INSERT INTO Usuarios (usuario, contraseña) VALUES (?, ?)',
        [usuario, contraseña]
      );
      res.status(201).json({ id_usuario: result.insertId });
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al registrar el usuario.',
        error: error
      });
    }
  };

// Eliminar una categoría por su ID
export const eliminarusuario = async (req, res) => {
  try {
    const id_usuario = req.params.id_usuario;
    const [result] = await pool.query(
      'DELETE FROM Usuarios WHERE id_usuario = ?',
      [id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar el usuario. El ID ${id_usuario} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el usuario.',
      error: error
    });
  }
};

export const verificarUsuario = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
      return res.status(400).json({
        mensaje: "Debe enviar usuario y contrasena."
      });
    }

    const [result] = await pool.query(
      'SELECT * FROM Usuarios WHERE usuario = ? AND contraseña = ?',
      [usuario, contrasena]
    );

    if (result.length > 0) {
      return res.json(true);   // Usuario correcto
    } else {
      return res.json(false);  // Datos incorrectos
    }

  } catch (error) {
    return res.status(500).json({
      mensaje: 'Error al verificar el usuario.',
      error
    });
  }
};

// Controlador para actualizar parcialmente un usuario por su ID
export const actualizarUsuarioPatch = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const datos = req.body;
    const [result] = await pool.query(
      "UPDATE Usuarios SET ? WHERE id_usuario = ?",
      [datos, id_usuario]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: `Usuario con ID ${id_usuario} no encontrado.` });
    }
    res.status(200).json({ mensaje: `Usuario con ID ${id_usuario} actualizado.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el usuario.", error });
  }
};