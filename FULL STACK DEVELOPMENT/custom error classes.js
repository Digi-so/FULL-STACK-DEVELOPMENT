class notfoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status= 404;
  }
}
class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}
Module.exports = {
  notfoundError,
  validationError
};