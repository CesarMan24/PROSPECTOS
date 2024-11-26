const sql = require("mssql");

const config = {
  user: 'sa',                  // Usuario de SQL Server
  password: 'CESAR',    // Contraseña del usuario
  server: 'SUPERLAPTOPCESARIN', // Nombre del servidor
  port: 1433,                  // Puerto (por defecto 1433)
  database: 'PROSPECTOS2',     // Nombre de tu base de datos
  options: {
    encrypt: false,            // Desactiva SSL si no está configurado
    enableArithAbort: true,
  },
};

async function connectToDB() {
  try {
    const pool = await sql.connect(config);
    console.log("Conexión exitosa a MSSQL");
    // Ejecutar una consulta de prueba
    const result = await pool.request().query("Select * from view_destacados ");
    console.log(result.recordset);
    sql.close();
  } catch (err) {
    console.error("Error durante la operación:", err);
    sql.close();
  }
}

connectToDB();  