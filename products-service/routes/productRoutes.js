const express = require('express');
const { createProduct, getAllProducts, deleteProduct, updateProduct } = require('../controllers/productController');

const router = express.Router();

// Create a new product
router.post('/', createProduct);

// Get all products
router.get('/', getAllProducts);

// Delete a product by ID
router.delete('/:id', deleteProduct);

// Update a product by ID
router.put('/:id', updateProduct);

module.exports = router;