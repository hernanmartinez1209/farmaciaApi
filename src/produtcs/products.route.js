const router = require("express").Router();
const productServices = require('./services.produtc')

router.route("/product")
      .get(productServices.getAllProducts)
      .post(productServices.potsProduct); 
router.route("/product/:id")
      .get(productServices.getProductsById)
      .patch(productServices.patchProducts) 
      .delete(productServices.productDelete)
module.exports = router