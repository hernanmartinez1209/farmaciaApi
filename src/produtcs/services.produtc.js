const productscontrollers = require('./products.controlles')
const getAllProducts = (req ,res) =>{
    productscontrollers.findAllProducts()
      .then((data) =>{
        res.status(200).json(data)
      })
      .catch(err =>{
        res.status(400).json({message:"url invadil",err})
      } )
}
const getProductsById = (req,res) =>{
    const id = Number(req.params.id)
      productscontrollers.findProductById(id)
        .then((data) =>{
            if (!data) {
                return res.status(404).json({message:`Product with id:${id}, not fount`})
            }
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(400).json({message:"url invadil",err})
        })
}
const potsProduct = (req,res) =>{
    const productObj = req.body
     productscontrollers.CreateProduct(productObj)
      .then((data) =>{
        res.status(201).json(data)
      })
      .catch(err =>{
        res.status(400).json({message:"Bad Request",err})
      })
}
const patchProducts = (req,res) =>{
     const id = Number(req.params.id)
     const objProduct = req.body
     productscontrollers(id,objProduct)  
   .then((data) =>{
    if (!data) {
        return res.status(404).json({message:"Bad Request ID"})
    }
    res.status(200).json(data)
   })
   .catch(err =>{
    res.status(400).json({message:"Bad Request",err})
   })  
}
const productDelete = (req,res) =>{
    const id = req.params.id 
    productscontrollers.deleteProduct(id)
    .then((data)=>{
        if (!data) {
            return res.status(404).json({message:"Bad Request ID"})
        }
        res.status(200).json(data)
    })
    .catch(err =>{
        res.status(400).json({message:"Bad Request",err})
    })
}
module.exports = {
    getAllProducts,
    getProductsById,
    potsProduct,
    patchProducts,
    productDelete
}
