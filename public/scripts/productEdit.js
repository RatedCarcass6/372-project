async function fetchProduct(id) {
    try {
        const response = await fetch(`/api/products/${id}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}

async function saveChanges(id) {
    const product = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        category: document.getElementById('category').value,
        price: parseFloat(document.getElementById('price').value),
    };
    await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    window.location.href = 'admin-products.html';
}

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = await fetchProduct(productId);
    if (product) {
        document.getElementById('name').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('category').value = product.category;
        document.getElementById('price').value = product.price;
    }

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveChanges(productId);
    });
});
