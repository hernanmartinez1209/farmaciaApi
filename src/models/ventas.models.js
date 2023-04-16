const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Ventas = db.define('ventas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    products_id:{
       type:DataTypes.INTEGER
    },
    cantidad:{
        type:DataTypes.INTEGER,
        allowNull:true,
        validate:{
            len:[1,4]
        }
    },
    fecha_de_la_venta:{
        type:DataTypes.DATE,    
     

    },
    precio:{
        type:DataTypes.FLOAT,
        allowNull:true,
        validate:{
            len:[1,4]
        }
    }

})

module.exports = Ventas
//funcion de fecha de caducidad
// function productoCercaDeCaducar(fechaCaducidad) {
//     const diasPorCaducar = 30;
//     const fechaActual = new Date();
//     const fechaCaducidadProducto = new Date(fechaCaducidad);
  
//     // Agrega díasPorCaducar días a la fecha actual
//     fechaActual.setDate(fechaActual.getDate() + diasPorCaducar);
  
//     // Compara mes y día de la fecha actual y la fecha de caducidad del producto
//     return fechaActual.getMonth() === fechaCaducidadProducto.getMonth() && fechaActual.getDate() >= fechaCaducidadProducto.getDate();
//   }