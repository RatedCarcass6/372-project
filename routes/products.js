const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// GET: Fetch all products
router.get('/', productsController.getAllProducts);

// GET: Fetch a single product by ID
router.get('/:id', productsController.getProductById);

// POST: Add a new product
router.post('/', productsController.addProduct);

// PUT: Update a product by ID
router.put('/:id', productsController.updateProduct);

// DELETE: Delete a product by ID
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
