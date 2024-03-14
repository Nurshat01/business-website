const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { formatDate } = require('../utils/formatDate');

const ServiceRequestSchema = require('./ServiceRequest');
// const ReviewSchema = require('./Review');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    // phoneNumber: {
    //   type: String,
    //   unique: true,
    //   match: [/.^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, 'Must be a valid phone number!'],
    // },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp),
    },
    serviceRequests: [
      ServiceRequestSchema
    ],
    // reviews: [
    //   ReviewSchema
    // ],
  },
  {
    toJSON: {
        getters: true,
        virtuals: true,
      },
  },
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('serviceRequestCount').get(function () {
  return this.serviceRequests.length;
});

// userSchema.virtual('reviewCount').get(function () {
//   return this.reviews.length;
// });

const User = model('User', userSchema);

module.exports = User;