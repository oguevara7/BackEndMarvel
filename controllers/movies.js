const Movie = require('../models/movies')

const createMovie = function(req, res) {
  const movie = new Movie(req.body)
  movie.save().then(function() {
    return res.send(movie)
  }).catch(function(error) {
    return res.status(400).send(error)
  })
}

const getMovies = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Movie.find({}).then(function(movies) {
    res.send(movies)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const getMovie = function(req, res) {
  const _id = req.params.id
  Movie.findById(_id).then(function(movie) {
    if(!movie) {
      return res.status(404).send()
    }
    return res.send(movie)
  }).catch(function(error) {
    return res.status(500).send(error)
  })
}

const updateMovie = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['title', 'director', 'length', 'synopsis', 'characters',
                          'premiere', 'budget', 'earnings', 'phase', 'trailer',
                          'rating', 'poster', 'stills']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Movie.findByIdAndUpdate(_id, req.body ).then(function(movie) {
    if (!movie) {
      return res.status(404).send()
    }
    return res.send(movie)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}

const deleteMovie = function(req, res) {
  const _id = req.params.id
  Movie.findByIdAndDelete(_id).then(function(movie){
    if(!movie) {
      return res.status(404).send()
    }
    return res.send(movie)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}

module.exports = {
  createMovie: createMovie,
  getMovie: getMovie,
  getMovies: getMovies,
  updateMovie: updateMovie,
  deleteMovie: deleteMovie
}
