'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    photo_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User,{foreignKey: 'username'} )
        // Photo.belongsTo(models.User, {
        //   foreignKey: 'user_id'
        
    }
  }
  });
  return Comment;
};
