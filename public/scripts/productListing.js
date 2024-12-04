// public/scripts/productListing.js

async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const products = await response.json();
        populateProductTable(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function populateProductTable(products) {
    const tbody = document.querySelector('.product-table tbody');
    tbody.innerHTML = ''; // Clear existing rows
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <a href="product-edit.html?id=${product.id}">Edit</a> | 
                <a href="#" data-id="${product.id}" class="delete-link">Delete</a>
            </td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', fetchProducts);
