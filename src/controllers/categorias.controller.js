import { pool } from "../../db_connection.js";

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM categorias");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};
// Eliminar una categoría por su ID
export const eliminarCategoria = async (req, res) => {
  try {
    const id_categoria = req.params.id_categoria;
    const [result] = await pool.query(
      'DELETE FROM categorias WHERE id_categoria = ?',
      [id_categoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la categoria. El ID ${id_categoria} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la categoria.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente una categoría por su ID
export const actualizarCategoriaPatch = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE categorias SET ? WHERE id_categoria = ?',
      [datos, id_categoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: `Categoría con ID ${id_categoria} no encontrada.` });
    }

    res.status(200).json({ mensaje: `Categoría con ID ${id_categoria} actualizada.` });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar la categoría.', error });
  }
};

