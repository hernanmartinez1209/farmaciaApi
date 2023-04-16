const ventasControllers = require('./ventas.controllers')

const getAllVentas = (req,res) =>{
    ventasControllers.findAllVentas()
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch(err =>console.log(err))
}
const getByIdVentas = (req,res)=>{
    const id = req.params.id
    ventasControllers.findByIdVentas(id)
    .then((data)=>{
        if (!data) {
            res.status(404).json({message:`users with id:${id}, not fount`})
        }
        res.status(200).json(data)
    })
    .catch(err =>console.log(err))
}
const potsVentas = (req,res) =>{
    const ventasObj = req.body 
    ventasControllers.createVentas(ventasObj)
    .then((data)=>{
        res.status(201).json(data)
    })
    .catch(err =>console.log(err))
}
const ventasDelete =(req,res) =>{
    const id = req.params.id
    ventasControllers.deleteVentas(id)
    .then((data)=>{
        if (!data) {
            res.status(404).json({message:`users with id:${id}, not fount`})
        }
        res.status(200).json(data)
    })
    .catch(err =>console.log(err))
}
module.exports={
    getAllVentas,
    getByIdVentas,
    potsVentas,
    ventasDelete
}