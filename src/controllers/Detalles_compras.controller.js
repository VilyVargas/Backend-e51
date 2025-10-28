import { pool } from "../../db_connection.js";

// Obtener todas las compras
export const obtenerDetallesCompras = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Detalles_Compras");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener una detalle de compra por su ID
  export const obtenerDetalleCompra = async (req, res) => {
    try {
      const id_detalle_compra = req.params.id_detalle_compra;
      const [result] = await pool.query(
        "SELECT * FROM detalles_compras WHERE id_detalle_compra= ?",
        [id_detalle_compra]
      );  
      if (result.length <= 0) {
        return res.status(404).json({
          mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`,
        });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({
        mensaje: "Ha ocurrido un error al leer los datos de los detalles de compras.",
      });
    }
  };

  // Registrar un nuevo Detalle de Compra
  export const registrarDetalleCompra = async (req, res) => {
    try { 
      const { id_compra, id_producto, cantidad, precio_unitario } = req.body; 
      const [result] = await pool.query(
        'INSERT INTO detalles_compras (id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
        [id_compra, id_producto, cantidad, precio_unitario]
      );
      res.status(201).json({ id_detalle_compra: result.insertId });
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al registrar el detalle de compra.',
        error: error
      });
    }
  };

// Eliminar una categoría por su ID
export const eliminadetallecompras = async (req, res) => {
  try {
    const id_detalle_compra = req.params.id_detalle_compra;
    const [result] = await pool.query(
      'DELETE FROM Detalles_Compras WHERE id_detalle_compra = ?',
      [id_detalle_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar el detalle. El ID ${id_detalle_compra} no fue encontrado.`
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

// Controlador para actualizar parcialmente un detalle de compra por su ID
export const actualizardetalleCompraPatch = async (req, res) => {
  try {
    const { id_detalle_compra } = req.params;
    const datos = req.body;
    const [result] = await pool.query(
      "UPDATE Detalles_Compras SET ? WHERE id_detalle_compra = ?",
      [datos, id_detalle_compra]
    );  
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: `Detalle con ID ${id_detalle_compra} no encontrado.` });
    }
    res.status(200).json({ mensaje: `Detalle con ID ${id_detalle_compra} actualizado.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el detalle.", error });
  }
};   
