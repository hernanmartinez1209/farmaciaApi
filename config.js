const config = {
    port:process.env.PORT||5000,
    nodeEnv: process.env.NODE_ENV || "prod",
    db:{
         prod: {
            dialect: "postgres",
            host: process.env.DB_PROT_HOST,
            port: process.envDB_PROT_PORT,
            database: process.env.DB_PROT_NAME,
            username: process.env.DN_PROT_USER,
            password: process.env.DB_PROT_PASS,
            //Extra configs
            define: {
              timestamps: true,
              underscored: true,
            },
            //Esta configuracion es para produccion
            dialectOptions: {
              ssl: {
                require: true,
                rejectUnauthorized: false,
              },
            },
          },
    },
    
};

module.exports = config