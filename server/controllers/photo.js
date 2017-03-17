const Photo = require("../models").Photo;
const User = require("../models").User;

module.exports = {
  create (req, res) {
    console.log(req.user.id)
    Photo.create({
      photo_url: req.body.photo_url,
      title: req.body.title,
      user_id: req.user.id
    })
      .then(photo => res.status(201).send(link))
      .catch(error => res.status(400).send(error));
  },
    listPhotos (req, res) {
        Photo.findAll({

      })
      .then(photo => res.status(200).send(photo))
      .catch(error => res.status(400).send(error));
  },

  listPhoto (req, res) {
    Photo.findById({
        where:  {
          id: req.params.id
        }
      })
    .then(photo => res.status(201).send(photo))
    .catch(error => res.status(400).send(error));

  }
};