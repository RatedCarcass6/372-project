// Mock cart data (this would typically come from a database)
const mockCarts = [
    {
        userId: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        userId: 2,
        items: [
            { productId: 1, quantity: 1 }
        ]
    }
];

// Fetch cart by user ID
exports.fetchCartByUserId = (userId) => {
    const cart = mockCarts.find(c => c.userId == userId);
    return cart ? cart : { userId, items: [] };  // Return an empty cart if not found
};

// Add an item to the user's cart
exports.addItemToCart = (userId, item) => {
    let cart = mockCarts.find(c => c.userId == userId);

    if (!cart) {
        cart = { userId, items: [] };
        mockCarts.push(cart);
    }

    const existingItem = cart.items.find(i => i.productId == item.productId);
    
    if (existingItem) {
        existingItem.quantity += item.quantity;  // Increase quantity if item already exists
    } else {
        cart.items.push(item);  // Add new item to cart
    }

    return cart;
};

// Update an item in the user's cart
exports.updateCartItem = (userId, itemId, updatedItem) => {
    const cart = mockCarts.find(c => c.userId == userId);
    if (!cart) return null; // Cart not found

    const item = cart.items.find(i => i.productId == itemId);
    if (!item) return null; // Item not found

    // Update item details
    item.quantity = updatedItem.quantity;
    return item;
};

// Remove an item from the user's cart
exports.removeItemFromCart = (userId, itemId) => {
    const cart = mockCarts.find(c => c.userId == userId);
    if (!cart) return;  // Cart not found

    const itemIndex = cart.items.findIndex(i => i.productId == itemId);
    if (itemIndex > -1) {
        cart.items.splice(itemIndex, 1);  // Remove item from cart
    }
};
