const mongoose = require('mongoose')

const charSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  aliases: {
    type: Array,
    required: true
  },
  creators: {
    type: String,
    required: true
  },
  actor: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  citizenship: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  birth: {
    type: String,
  },
  powers: {
    type: Array,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  movies: [{
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  }],
  profilePhoto: {
    type: String,
    required: true
  },
  photos: {
    type: Array,
    required: true
  }
})

const Character = mongoose.model('Character', charSchema)

module.exports = Character
