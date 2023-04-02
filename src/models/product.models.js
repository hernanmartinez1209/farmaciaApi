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
    Price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }, 
    ImgLink:{
        type:DataTypes.TEXT,
        allowNull:false
    }, 
})
module.exports = Product