router.get('/stats', (req, res) => {
    const stats = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
    res.json(stats);
});