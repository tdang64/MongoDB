//Thanh Tam Dang - 301393448

const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// CREATE a new product
router.post('/products', productController.addNewProduct);

// READ all products
router.get('/products', productController.getAllProducts);

//get a product by ID
router.get('/products/:id', productController.getProductById);

// UPDATE a product by ID
router.put('/products/:id', productController.updateProductById);

//find product which name contain 'kw'
router.get('/products/name/:name', productController.findProductsByName); 
// DELETE a product by ID
router.delete('/products/:id', productController.deleteProductById);
//remove all products
router.delete('/products/', productController.removeAllProducts);

module.exports = router;
