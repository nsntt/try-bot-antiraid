const { connect, connection } = require("mongoose");
const { config } = require("dotenv");
config();
connect(process.env.URI);

connection.on('open', () => console.log("la base de datos esta abierta."));
connection.on('close', () => console.log("la base de datos ha sido cerrada."))