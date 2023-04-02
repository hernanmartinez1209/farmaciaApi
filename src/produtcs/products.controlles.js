const Products = require('../models/product.models')

const findAllProducts = async () =>{
    const products = await Products.findAll()
    return products
}
const findProductById = async (id) =>{
  const productId =  await Products.findOne({
    where:{
        id:id
    }
  })
  return productId
}
const CreateProduct = async (productObj) =>{
    const newProduct = await Products.create({
        id: productObj.id,
        NameGenerico : productObj.NameGenerico,
        Concentrado  : productObj.Concentrado,
        NameComercial : productObj.NameComercial, 
        Presentacion : productObj.Presentacion,
        Lavoratorio : productObj.Lavoratorio,
        Stock  : productObj.Stock,
        Price : productObj.Price,
        ImgLink : productObj.ImgLink,
    })
    return newProduct
}
const updateProduct = async (id,productObj) =>{
    const selectedproduct = await Products.findOne({
        where:{id}
    })
    if (!selectedproduct) return null
    const modifyProduct = await selectedproduct.update(productObj)
    return modifyProduct
}
const deleteProduct = async () =>{
    const idProduct = await Products.destroy({
        where:{id}
    })
    return idProduct
}
module.exports ={
    findAllProducts,
    findProductById,
    CreateProduct,
    updateProduct,
    deleteProduct

}