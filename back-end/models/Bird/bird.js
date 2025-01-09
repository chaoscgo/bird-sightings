const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const birdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [commentSchema]
  },
  { timestamps: true }
);

  const Bird = mongoose.model('Bird', birdSchema);

  module.exports = Bird;