const { Schema } = require('mongoose');
const { ObjectId } = require('mongoose').Types
const dateFormat = require('../utils/dateFormat');

const ReviewSchema = new Schema(
    {
        reviewId: {
            type: ObjectId,
            default: () => new ObjectId,
          },
        reviewBody: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
    {
        _id: false,
    }
);

// const Review = model('Review', ReviewSchema);

// module.exports = Review

module.exports = ReviewSchema