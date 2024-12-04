const cartsModel = require('../models/cartsModel');

exports.getCartByUserId = (req, res) => {
    const cart = cartsModel.fetchCartByUserId(req.params.userId);
    res.json(cart);
};

exports.addItemToCart = (req, res) => {
    const updatedCart = cartsModel.addItemToCart(req.params.userId, req.body);
    res.status(201).json(updatedCart);
};

exports.updateCartItem = (req, res) => {
    const updatedItem = cartsModel.updateCartItem(req.params.userId, req.params.itemId, req.body);
    res.json(updatedItem);
};

exports.removeItemFromCart = (req, res) => {
    cartsModel.removeItemFromCart(req.params.userId, req.params.itemId);
    res.status(204).send();
};
