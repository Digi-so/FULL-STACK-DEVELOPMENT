Module.exports = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging purposes

    // Set the response status code based on the error type
    const statusCode = err.statusCode || 500;

    // Send a JSON response with the error message
    res.status(statusCode).json({
        status: 'error',
        statusCode: statusCode,
        message: err.message || 'Internal Server Error'
    });
}