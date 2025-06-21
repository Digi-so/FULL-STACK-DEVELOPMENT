const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

let products = [];
router.get('/', (req, res) => { res.json(products); });

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

router.post('/', (req, res) => {
    const { name, description, price, category, instock } = req.body;
    const newProduct = { id: uuid(), name, description, price, category, instock };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.put('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const { name, description, price, category, instock } = req.body;
    products[index] = { ...products[index], name, description, price, category, instock };
    res.json(products[index]);
});

router.delete('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    products.splice(index, 1);
    res.status(204).end();
});

module.exports = router;

const productroutes = require('./routes/products');
