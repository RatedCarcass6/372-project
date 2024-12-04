const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cartsController');

// GET: Fetch cart by user ID
router.get('/:userId', cartsController.getCartByUserId);

// POST: Add item to cart
router.post('/:userId', cartsController.addItemToCart);

// PUT: Update cart item
router.put('/:userId/:itemId', cartsController.updateCartItem);

// DELETE: Remove item from cart
router.delete('/:userId/:itemId', cartsController.removeItemFromCart);

module.exports = router;
