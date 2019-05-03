const mongoose = require('mongoose')

const commsSchema = new mongoose.Schema({
  movieID: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  userID: {
    type: mongoose.Types.ObjectId,
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
