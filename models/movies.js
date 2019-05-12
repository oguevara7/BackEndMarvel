const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  synopsis: {
    type: String,
    required: true
  },
  characters: [{
    character: {
      type: String
    }
  }],
  premiere: {
    type: String,
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  earnings: {
    type: Number,
    required: true
  },
  phase: {
    type: String,
    required: true
  },
  trailer: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  stills: {
    type: Array
  }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
