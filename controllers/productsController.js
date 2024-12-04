const productsModel = require('../models/productsModel');

exports.getAllProducts = (req, res) => {
    const products = productsModel.fetchAllProducts();
    res.json(products);
};

exports.getProductById = (req, res) => {
    const product = productsModel.fetchProductById(req.params.id);
    res.json(product);
};

exports.addProduct = (req, res) => {
    const newProduct = productsModel.addProduct(req.body);
    res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
    const updatedProduct = productsModel.updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
    productsModel.deleteProduct(req.params.id);
    res.status(204).send();
};
