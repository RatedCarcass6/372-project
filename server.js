const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware for serving static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing JSON
app.use(express.json());

// SQLite database setup
const db = new sqlite3.Database('./database/products.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database.');
        // Create a table if it doesn't exist
        db.run(
            `CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                category TEXT,
                price REAL NOT NULL
            )`,
            (err) => {
                if (err) {
                    console.error('Error creating table:', err);
                }
            }
        );
    }
});

// Routes

// Fetch all products
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch products' });
        } else {
            res.json(rows);
        }
    });
});

// Fetch a single product by ID
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch product' });
        } else if (!row) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.json(row);
        }
    });
});

// Add a new product
app.post('/api/products', (req, res) => {
    const { name, description, category, price } = req.body;
    db.run(
        'INSERT INTO products (name, description, category, price) VALUES (?, ?, ?, ?)',
        [name, description, category, price],
        function (err) {
            if (err) {
                res.status(500).json({ error: 'Failed to add product' });
            } else {
                res.status(201).json({ id: this.lastID, name, description, category, price });
            }
        }
    );
});

// Update a product
app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, category, price } = req.body;
    db.run(
        'UPDATE products SET name = ?, description = ?, category = ?, price = ? WHERE id = ?',
        [name, description, category, price, id],
        function (err) {
            if (err) {
                res.status(500).json({ error: 'Failed to update product' });
            } else if (this.changes === 0) {
                res.status(404).json({ error: 'Product not found' });
            } else {
                res.json({ id, name, description, category, price });
            }
        }
    );
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM products WHERE id = ?', [id], function (err) {
        if (err) {
            res.status(500).json({ error: 'Failed to delete product' });
        } else if (this.changes === 0) {
            res.status(404).json({ error: 'Product not found' });
        } else {
            res.status(204).end();
        }
    });
});

// Root route (for testing)
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
