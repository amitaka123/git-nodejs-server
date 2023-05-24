const express = require('express');

const productController = require('../controller/product-controller');

const router = express.Router();

// router
// .post('/products', productController.createProduct)
// .get('/products', productController.getAllProducts)
// .get('/products/:id', productController.getProduct)
// .put('/products/:id', productController.replaceProduct)
// .patch('/products/:id', productController.updateProduct)
// .delete('/products/:id', productController.deleteProduct);

router
.post('/', productController.createProduct)
.get('/', productController.getAllProducts)
.get('/:id', productController.getProduct)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct);

exports.router = router;