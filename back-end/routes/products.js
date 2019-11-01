/*modules imports*/
var express = require('express');
var router = express.Router();

/*controllers imports*/
var productsController = require('../controllers/products');

/* Product register */
router.post('/create', function(req, res) {
  productsController.createProduct(req, res);
});

/* Get all products */
router.get('/list', function(req, res) {
  productsController.listProducts(req, res);
});

module.exports = router;