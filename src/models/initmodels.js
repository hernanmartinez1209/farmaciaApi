const Product = require('./product.models')

const initModels = () =>{
    //aqui gestionamos todas las relaciones entre mis models
     //* 1  a.hasOne(b-Kf)//estos cuando no tiene la llave foranea
    //*  M  a.hasMany(b)
    //*  1  b.belongsTo(a) // estos es cuando tiene la llave foranea
    //*  M  b.belongsToMany(a)
    //?1:1 User -HouseDirection(FK)
    //?1:M
    //?M:M
    //?M:1
    
    
}
module.exports =initModels