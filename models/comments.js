const mongoose = require('mongoose')

const commsSchema = new mongoose.Schema({
  movieID: {
    type: String,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  like: {
    type: Boolean,
    required: true
  }
})

const Comment = mongoose.model('Comment', commsSchema)

module.exports = Comment
