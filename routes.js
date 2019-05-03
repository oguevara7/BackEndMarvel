const express = require('express')
// const User = require('./models/user')
const router = express.Router()

const characters = require('./controllers/characters.js')
const comments = require('./controllers/comments.js')
const movies = require('./controllers/movies.js')
const users = require('./controllers/users.js')

router.post('/characters', characters.createCharacter)
router.get('/characters/:id', characters.getCharacter)
router.get('/characters', characters.getCharacters)
router.patch('/characters/:id', characters.updateCharacter)
router.delete('/characters/:id', characters.deleteCharacter)

router.post('/comments', comments.createComment)
router.get('/comments', comments.getComments)
router.delete('/comments/:id', comments.deleteComment)

router.post('/movies', movies.createMovie)
router.get('/movies/:id', movies.getMovie)
router.get('/movies', movies.getMovies)
router.patch('/movies/:id', movies.updateMovie)
router.delete('/movies/:id', movies.deleteMovie)

router.post('/users', users.createUser)
router.post('/users/login', users.login)
router.get('/users/:id', users.getUser)
router.patch('/users/:id', users.updateUser)

module.exports = router
