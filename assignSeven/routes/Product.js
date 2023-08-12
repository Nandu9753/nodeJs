const express = require('express');
const router = new express.Router();
const productController = require('../controller/Product');


router.post('/product',productController.productAdd);
router.get('/product',productController.product);
router.put('/product/:id',productController.productEdit);
router.delete('/product/:id',productController.productDelete);

module.exports =  router ;