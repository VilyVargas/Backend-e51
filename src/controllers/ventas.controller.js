import { pool } from "../../db_connection.js";

// Obtener todas las Ventas
export const obtenerVentas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Ventas");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};
// Eliminar una categoría por su ID
export const eliminarventas = async (req, res) => {
  try {
    const id_venta = req.params.id_venta;
    const [result] = await pool.query(
      'DELETE FROM Ventas WHERE id_venta = ?',
      [id_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar la venta. El ID ${id_venta} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar la venta.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente una venta por su ID
export const actualizarVentapatch = async (req, res) => {
  try {
    const { id_venta } = req.params;
    const datos = req.body;
    const [result] = await pool.query(
      "UPDATE Ventas SET ? WHERE id_venta = ?",
      [datos, id_venta]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: `Venta con ID ${id_venta} no encontrado.` });
    }
    res.status(200).json({ mensaje: `Venta con ID ${id_venta} actualizado.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar la venta.", error });
  }
};