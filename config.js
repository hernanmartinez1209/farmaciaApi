const Sequelize = require('sequelize');
const config = require('./config'); // importar la configuración del archivo config.js

const environment = process.env.NODE_ENV || 'prod';
const dbConfig = config.db[environment];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect, // agregar el dialecto en la configuración
  define: dbConfig.define,
  dialectOptions: dbConfig.dialectOptions,
});

// exportar la instancia de Sequelize
module.exports = sequelize;

// const config = {
//     port:process.env.PORT||5000,
//     nodeEnv: process.env.NODE_ENV || "dev",
//     db:{
//         dev: {
//             dialect: "postgres",
//             host: "localhost",
//             port: 5432,
//             database: "farmaciaApi",
//             username: "postgres",
//             password: "node12",
//             //Extra configs
//             define: {
//               timestamps: true,
//               underscored: true,
//             },
//           },
//          prod: {
//             dialect: "postgres",
//             host: process.env.DB_PROT_HOST,
//             port: process.envDB_PROT_PORT,
//             database: process.env.DB_PROT_NAME,
//             username: process.env.DN_PROT_USER,
//             password: process.env.DB_PROT_PASS,
//             //Extra configs
//             define: {
//               timestamps: true,
//               underscored: true,
//             },
//             //Esta configuracion es para produccion
//             dialectOptions: {
//               ssl: {
//                 require: true,
//                 rejectUnauthorized: false,
//               },
//             },
//           },
//           test: {
//             dialect: "postgres",
//             host: "localhost",
//             port: 5432,
//             database: "farmaciaApi",
//             username: "postgres",
//             password: "node12",
//             //Extra configs
//             define: {
//               timestamps: true,
//               underscored: true,
//             },
//           },
//     },
    
// };

// module.exports = config