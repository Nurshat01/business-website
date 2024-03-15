const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema(
    {
      serviceName: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
);

const Service = model('Service', ServiceSchema);

module.exports = Service;