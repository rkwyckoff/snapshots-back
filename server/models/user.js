'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    profile_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          User.hasMany(models.Photo, {
            foreignKey: 'userId'
          });
        }
    }
  })
    return User;
};
