const express = require('express')
const cors = require('cors')
const router = express.Router()

const characters = require('./controllers/characters.js')
const comments = require('./controllers/comments.js')
const movies = require('./controllers/movies.js')
const users = require('./controllers/users.js')
const auth = require('./middleware/auth')

router.all('*', cors())

router.post('/characters', auth, characters.createCharacter)
router.get('/characters/:id', characters.getCharacter)
router.get('/characters', characters.getCharacters)
router.patch('/characters/:id', auth, characters.updateCharacter)
router.delete('/characters/:id', auth, characters.deleteCharacter)

router.post('/comments', auth, comments.createComment)
router.get('/comments', comments.getComments)
router.get('/comments/:id'), comments.getComment)
router.delete('/comments/:id', auth, comments.deleteComment)

router.post('/movies', auth, movies.createMovie)
router.get('/movies/:id', movies.getMovie)
router.get('/movies', movies.getMovies)
router.patch('/movies/:id', auth, movies.updateMovie)
router.delete('/movies/:id', auth, movies.deleteMovie)

router.post('/users', users.createUser)
router.post('/users/login', users.login)
router.get('/users/:id', auth, users.getUser)
router.patch('/users/:id', auth, users.updateUser)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist.'
  })
})

module.exports = router
