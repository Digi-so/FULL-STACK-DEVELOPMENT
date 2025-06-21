module.exports = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.API_KEY) {
        // If the API key is not valid, respond with a 403 Forbidden status
        return res.status(403).json({ error: 'forbidden:invalid API key' });   }
        next();
};

const validateproduct = require('../middleware/validateproduct');
// Make sure 'router' is defined and replace '...' with your handler function
router.post('/', validateproduct, (req, res) => {
    // handler logic here
});