'use strict';

const User = require("../models").User;

module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    photo_url: DataTypes.STRING,
    title: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Photo.belongsTo(User);
  return Photo;
};
