const mockProducts = [
    { id: 1, name: 'Margherita Pizza', description: 'Classic Margherita pizza', price: 10.99 },
    { id: 2, name: 'Pepperoni Pizza', description: 'Pepperoni pizza', price: 12.99 }
];

exports.fetchAllProducts = () => mockProducts;

exports.fetchProductById = (id) => mockProducts.find(p => p.id == id);

exports.addProduct = (product) => {
    const newProduct = { id: mockProducts.length + 1, ...product };
    mockProducts.push(newProduct);
    return newProduct;
};

exports.updateProduct = (id, updatedProduct) => {
    const index = mockProducts.findIndex(p => p.id == id);
    mockProducts[index] = { ...mockProducts[index], ...updatedProduct };
    return mockProducts[index];
};

exports.deleteProduct = (id) => {
    const index = mockProducts.findIndex(p => p.id == id);
    if (index > -1) mockProducts.splice(index, 1);
};
