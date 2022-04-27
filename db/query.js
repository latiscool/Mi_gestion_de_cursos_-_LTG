const { pool } = require('./conexion.js');
const chalk = require('chalk');
const cRedB = chalk.redBright;
const cBluenB = chalk.blueBright;
const eCode = chalk.bgRed.bold.white;

//Probando Conexion

module.exports.consultas = pool.connect(
  async (error_conexion, client, release) => {
    if (error_conexion) {
      return console.error(
        cRedB(
          '😵 Hubo un error en la conexion 👀',
          eCode('Error Code: ' + error_conexion.code)
        )
      );
    }
    console.log(cBluenB('Conexion exitosa a la BD 👌'));

    module.exports.nuevoCurso = async (curso) => {
      //el contenido de un obj se almacena en un arrelgo con Object.values
      const data = Object.values(curso);
      const query = {
        text: ` INSERT INTO cursos  (nombre,nivel,fecha,duracion) VALUES($1,$2,$3,$4) RETURNING *; `,
        values: [data[0], Number(data[1]), data[2], Number(data[3])],
      };
      try {
        const res = await client.query(query);
        console.log('Nuevo curso agregado con exito');
        return res.rows;
      } catch (error) {
        console.log(
          cRedB(
            '😵 No se pudo agregar curso 👀',
            eCode('Error Code: ' + error.code)
          )
        );
      }
      release();
      process.exit();
    };

    module.exports.getData = async () => {
      const query = {
        text: 'SELECT * FROM cursos ;',
      };
      try {
        const res = await client.query(query);
        return res.rows;
      } catch (error) {
        console.log(
          cRedB(
            '😵 Hubo un error en la consulta 👀',
            eCode('Error Code: ' + error.code)
          )
        );
      }
      process.exit();
    };

    module.exports.updateData = async (curso) => {
      const data = Object.values(curso);
      const query = {
        text: `UPDATE cursos SET nombre=$1, nivel=$2, fecha=$3, duracion=$4 WHERE id=$5 RETURNING *;`,
        values: [
          data[1],
          Number(data[2]),
          data[3],
          Number(data[4]),
          Number(data[0]),
        ],
      };

      try {
        const res = await client.query(query);
        console.log('Curso actualizado con exito');
        return res.rows;
      } catch (error) {
        console.log(
          cRedB(
            '😵 Hubo un error en actualizar 👀',
            eCode('Error Code: ' + error.code)
          )
        );
      }
      release();
      pool.end();
    };

    module.exports.deleteData = async (id) => {
      const query = {
        text: 'DELETE FROM cursos WHERE id=$1 RETURNING *;',
        values: [id],
      };

      try {
        const res = client.query(query);
        console.log('Curso elminado con exito');
        return res.rowCount;
      } catch (error) {
        console.log(
          cRedB(
            '😵 Hubo un error al eliminar 👀',
            eCode('Error Code: ' + error.code)
          )
        );
      }
      release();
      pool.end();
    };

    //FIN POOL CLIENT
  }
);
