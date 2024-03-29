const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const { formatDate } = require('../utils/formatDate');

const serviceRequestSchema = new Schema(
  {
    serviceRequestId: {
      type: ObjectId,
      default: () => new ObjectId(),
    },
    serviceImage:{
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
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
  },
);

module.exports = serviceRequestSchema;