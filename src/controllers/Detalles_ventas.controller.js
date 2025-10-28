import { pool } from "../../db_connection.js";

// Obtener todas las compras
export const obtenerDetallesVentas = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalles_Ventas");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

 // Obtener una detalle de venta por su ID
  export const obtenerDetalleVenta = async (req, res) => {
    try {
      const id_detalle_venta = req.params.id_detalle_venta;
      const [result] = await pool.query(
        "SELECT * FROM detalles_ventas WHERE id_detalle_venta= ?",
        [id_detalle_venta]
      );
      if (result.length <= 0) {
        return res.status(404).json({
          mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`,
        });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({
        mensaje: "Ha ocurrido un error al leer los datos de los detalles de ventas.",
      });
    }
  };



  // Registrar un nuevo Detalle de Venta
  export const registrarDetalleVenta = async (req, res) => {
    try {
      const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
      const [result] = await pool.query(
        'INSERT INTO detalles_ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
        [id_venta, id_producto, cantidad, precio_unitario]
      );
      res.status(201).json({ id_detalle_venta: result.insertId });
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al registrar el detalle de venta.',
        error: error
      });
    }
  };

// Eliminar una categoría por su ID
export const eliminadetalleventas = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query(
      'DELETE FROM Detalles_Ventas WHERE id_detalle_venta = ?',
      [id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar el detalle. El ID ${id_detalle_venta} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el detalle.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente un detalle de venta por su ID
export const actualizardetalleVentaPatch = async (req, res) => {
  try {
    const { id_detalle_venta } = req.params;
    const datos = req.body;
    const [result] = await pool.query(
      "UPDATE Detalles_Ventas SET ? WHERE id_detalle_venta = ?",
      [datos, id_detalle_venta]
    );
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: `Detalle con ID ${id_detalle_venta} no encontrado.` });
    } 
    res.status(200).json({ mensaje: `Detalle con ID ${id_detalle_venta} actualizado.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el detalle.", error });
  }
};