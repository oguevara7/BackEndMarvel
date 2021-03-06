const Comment = require('../models/comments')
const User = require('../models/users')

const createComment = function(req, res) {
  User.findById(req.body.userID).then(function(user) {
    if(!user) {
      return res.status(404).send()
    }
      req.body.userName = user.name
      req.body.userImage = user.profilePhoto
      const comm = new Comment(req.body)
      comm.save().then(function() {
        return res.send(comm)
      }).catch(function(error) {
        return res.status(400).send(error)
      })
  }).catch(function(error) {
    return res.status(500).send(error)
  })

  
}

const getComments = function(req, res) {
  Comment.find({}).then(function(comms) {
    res.send(comms)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const getComment = function(req, res) {
  const _id = req.params.id
  Comment.find({movieID: _id}).then(function(comm) {
    if(!comm) {
      return res.status(404).send()
    }
    return res.send(comm)
  }).catch(function(error) {
    return res.status(500).send(error)
  })
}

const deleteComment = function(req, res) {
  const _id = req.params.id
  Comment.findByIdAndDelete(_id).then(function(comm){
    if(!comm) {
      return res.status(404).send()
    }
    return res.send(comm)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}

module.exports = {
  createComment: createComment,
  getComments: getComments,
  getComment: getComment,
  deleteComment: deleteComment
}
