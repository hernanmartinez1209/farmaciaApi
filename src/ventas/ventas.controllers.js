const Ventas = require('../models/ventas.models')

const findAllVentas = async () =>{
    return await Ventas.findAll()
}

const findByIdVentas = async (id) =>{
    const ventasId = await Ventas.findOne({where:{id:id}})
    return ventasId
}
const createVentas = async (objVentas) =>{
    const newVentas = await Ventas.create({
        id: objVentas.id,
        products_id: objVentas.products_id,
         cantidad:objVentas.cantidad,
         fecha_de_la_venta:objVentas.fecha_de_la_venta,
         precio:objVentas.precio
    })
    return newVentas
} 
const deleteVentas = async (id) =>{
    const idVentas = await Ventas.destroy({where:{id:id}})
    return idVentas
}
module.exports ={
    findAllVentas,
    findByIdVentas,
    createVentas,
    deleteVentas
}