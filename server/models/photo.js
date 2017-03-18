'use strict';

module.exports = function(sequelize, DataTypes) {
  var Photo = sequelize.define('Photo', {
    photo_url: DataTypes.STRING,
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Photo.hasMany(models.Comment,{foreignKey: 'photo_id'} )
        Photo.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
        // associations can be defined here
      }
    }
  });
  return Photo;
};
