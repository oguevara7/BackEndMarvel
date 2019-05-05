const Character = require('../models/characters')

const createCharacter = function(req, res) {
  const char = new Character(req.body)
  char.save().then(function() {
    return res.send(char)
  }).catch(function(error) {
    return res.status(400).send(error)
  })
}

const getCharacters = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  Character.find({}).then(function(chars) {
    res.send(chars)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const getCharacter = function(req, res) {
  const _id = req.params.id
  Character.findById(_id).then(function(char) {
    if(!char) {
      return res.status(404).send()
    }
    return res.send(char)
  }).catch(function(error) {
    return res.status(500).send(error)
  })
}

const updateCharacter = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'aliases', 'creators', 'actor', 'biography',
                          'species', 'citizenship', 'gender', 'age', 'birth',
                          'powers', 'status', 'movies', 'profilePhoto', 'photos']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

  if( !isValidUpdate ) {
    return res.status(400).send({
      error: 'Invalid update, only allowed to update: ' + allowedUpdates
    })
  }
  Character.findByIdAndUpdate(_id, req.body ).then(function(char) {
    if (!char) {
      return res.status(404).send()
    }
    return res.send(char)
  }).catch(function(error) {
    res.status(500).send(error)
  })
}

const deleteCharacter = function(req, res) {
  const _id = req.params.id
  Character.findByIdAndDelete(_id).then(function(char){
    if(!char) {
      return res.status(404).send()
    }
    return res.send(char)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}

module.exports = {
  createCharacter: createCharacter,
  getCharacter: getCharacter,
  getCharacters: getCharacters,
  updateCharacter: updateCharacter,
  deleteCharacter: deleteCharacter
}
