const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Types
const { formatDate } = require('../utils/formatDate');

const ServiceRequestSchema = new Schema(
    {
      serviceRequestId: {
        type: ObjectId,
        default: () => new ObjectId,
      },
      service: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
      requestedAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => formatDate(timestamp),
      },
    },
    {
      _id: false,
    }
);

// const ServiceRequest = model('ServiceRequest', ServiceRequestSchema);

// module.exports = ServiceRequest;

module.exports = ServiceRequestSchema;