module.exports = class extends require('./AppError') {
  constructor (fields) {
    // Overriding both message and status code.
    super('Request validation failed', 'InvalidInput', 400);
    // Saving custom property.
    this.fields = fields || {};
  }
};
