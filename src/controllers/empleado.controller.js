import { pool } from "../../db_connection.js";

// Obtener todas las compras
export const obtenerEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM Empleados");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ha ocurrido un error al leer los datos.",
      error: error,
    });
  }
};

// Obtener una empleado por su ID
  export const obtenerEmpleado = async (req, res) => {
    try {
      const id_empleado = req.params.id_empleado;
      const [result] = await pool.query(
        "SELECT * FROM Empleados WHERE id_empleado= ?",
        [id_empleado]
      );
      if (result.length <= 0) {
        return res.status(404).json({
          mensaje: `Error al leer los datos. ID ${id_empleado} no encontrado.`,
        });
      }
      res.json(result[0]);
    }
    catch (error) {
      return res.status(500).json({
        mensaje: "Ha ocurrido un error al leer los datos de los empleados.",
      });
    }
  };

  // Registrar un nuevo Empleado
  export const registrarEmpleado = async (req, res) => {
    try {
      const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion} = req.body;
      const [result] = await pool.query(
        'INSERT INTO Empleados (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, celular, cargo, fecha_contratacion]
      );
      res.status(201).json({ id_empleado: result.insertId });
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al registrar el empleado.',
        error: error
      });
    }
  };


// Eliminar una categoría por su ID
export const eliminarempleado = async (req, res) => {
  try {
    const id_empleado = req.params.id_empleado;
    const [result] = await pool.query(
      'DELETE FROM Empleados WHERE id_empleado = ?',
      [id_empleado]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al eliminar el empleado. El ID ${id_empleado} no fue encontrado.`
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el empleado.',
      error: error
    });
  }
};

// Controlador para actualizar parcialmente un Empleado por su ID

export const actualizarEmpleadoPatch = async (req, res) => {
  try {
    const { id_empleado } = req.params;
    const datos = req.body;
    const [result] = await pool.query(
      "UPDATE Empleados SET ? WHERE id_empleado = ?",
      [datos, id_empleado]
    );  
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: `Empleado con ID ${id_empleado} no encontrado.` });
    }
    res.status(200).json({ mensaje: `Empleado con ID ${id_empleado} actualizado.` });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar el empleado.", error });
  }
};