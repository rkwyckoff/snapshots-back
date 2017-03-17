const Comment = require("../models").Comment;
const Photo = require("../models").Link;
const User = require("../models").User;

module.exports = {
  create (req, res) {
    console.log(req.user)
    Comment.create({
      text: req.body.comment,
      user_id: req.user.id,
      photo_id: req.params.id,
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
  // findComment (req, res) {
  //     Comment.findById(req.params.id)
  //     .then(comments => res.status(201).send(comments))
  //     .catch(error => res.status(400).send(error));
  // }

  listComments (req, res) {
      Comment.findAll({
      photo_id: req.params.id
      })
      .then(comment => res.status(200).send(comment))
      .catch(error => res.status(400).send(error));
  },
  listallComments (req, res) {
      Comment.findAll({

      })
      .then(comment => res.status(200).send(comment))
      .catch(error => res.status(400).send(error));
  }

};
