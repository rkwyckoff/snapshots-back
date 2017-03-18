const middleware = require("../middleware/index");

const UserController = require("../controllers/user");
const PhotoController = require("../controllers/photo");
const CommentController = require("../controllers/comment");

module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
    next();
  });
//Register user
  app.post('/users', UserController.register);
//Login user
  app.post('/login', UserController.login);
//Post a photo--must be logged in
  app.post('/photos', middleware.authenticate, PhotoController.create )
//List all photos on Home page
  app.get('/photos', PhotoController.listPhotos);
//List one photo when clicked on
  app.get('/photos/:id', PhotoController.clickPhoto);
//Post a comment on 1 photo
  app.post('/photos/:id/comment', middleware.authenticate, CommentController.create )
//List all comments for 1 photo
  app.get('/photos/:id/comment', CommentController.listComments )
//List all users
  app.get('/users', UserController.listUsers);
//List one photo when clicked on including username
  app.get('/photos/:id', PhotoController.clickPhoto);




// app.get('/comments', CommentController.listallComments )
//  app.post('/shelters/:shelterId/animals', AnimalController.create);
//  app.put('/shelters/:shelterId/animals/:id', AnimalController.update);
};
