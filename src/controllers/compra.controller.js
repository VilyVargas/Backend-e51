import { pool } from "../../db_connection.js";

// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM compras");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};
// Eliminar una categoría por su ID
export const eliminarcompra = async (req, res) => {
  try {
    const id_compra = req.params.id_compra;
    const [result] = await pool.query(
      'DELETE FROM Compras WHERE id_compra = ?',
      [id_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la Compra. El ID ${id_compra} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la compra.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente una compra por su ID
export const actualizarComprapatch = async (req, res) => {
  try {
    const { id_compra } = req.params;
    const datos = req.body;
    const [result] = await pool.query(
      "UPDATE compras SET ? WHERE id_compra = ?",
      [datos, id_compra]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: `Compra con ID ${id_compra} no encontrado.` });
    }
    res.status(200).json({ mensaje: `Compra con ID ${id_compra} actualizado.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar la compra.", error });
  }   
};
