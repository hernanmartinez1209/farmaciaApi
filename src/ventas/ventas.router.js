const router = require('express').Router()
const ventasServices = require('./ventas.services')


router.route('/ventas')
      .get(ventasServices.getAllVentas)
      .post(ventasServices.potsVentas)
router.route('/ventas/:id')
      .get(ventasServices.getByIdVentas)
      .delete(ventasServices.ventasDelete)
      
module.exports = router      