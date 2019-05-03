const User = require('../models/users')

const createUser = function(req, res) {
  const user = new User(req.body)
  user.save().then(function() {
    return res.send(user)
  }).catch(function(error) {
    return res.status(400).send(error)
  })
}

const login = function(req, res) {
  User.findByCredentials(req.body.email, req.body.password).then(function(user) {
    user.generateToken().then(function(token) {
      res.send({user, token})
    }).catch(function(error) {
      return res.status(401).send({error: error})
    })
    res.send(user, token)
  }).catch(function(error) {
    res.status(401).send({error: error})
  })
}

const getUser = function(req, res) {
  const _id = req.params.id
  User.findById(_id).then(function(user) {
    if(!user) {
      return res.status(404).send()
    }
    return res.send(user)
  }).catch(function(error) {
    return res.status(500).send(error)
  })
}

const updateUser = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['email', 'name', 'password', 'profilePhoto']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  User.findByIdAndUpdate(_id, req.body ).then(function(user) {
    if (!user) {
      return res.status(404).send()
    }
    return res.send(user)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}

module.exports = {
  createUser: createUser,
  login: login,
  getUser: getUser,
  updateUser: updateUser
}
