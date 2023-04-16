const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Product = db.define('products',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    NameGenerico:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Concentrado :{
        type:DataTypes.STRING,
        allowNull:false
    },
    NameComercial:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    Presentacion:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    Lavoratorio:{
        type:DataTypes.STRING,
        allowNull:false
    }, 
    Stock :{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    PrecioDeVenta:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    PrecioDeAdquirido:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    fechaDeVencimiento :{
        type:DataTypes.DATEONLY,
        allowNull:false
        // dd/mm/yy
        // 12/09/1999
    },
    ImgLink:{
        type:DataTypes.TEXT,
        allowNull:false
    }, 
})
module.exports = Product