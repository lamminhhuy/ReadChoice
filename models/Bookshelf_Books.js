const mongoose = require('mongoose');

const bookshelfSchema = new mongoose.Schema({
  drawers: [{
    name: String,
    books: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }],
  
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});


const Bookshelf = mongoose.model('Bookshelf', bookshelfSchema);

module.exports = Bookshelf;
