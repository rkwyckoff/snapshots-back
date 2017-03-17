const middleware = require("../middleware/index");

const UserController = require("../controllers/user");
const PhotoController = require("../controllers/photo");
const CommentController = require("../controllers/comment");

module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/users', UserController.register);
  app.post('/login', UserController.login);
  app.post('/photos', middleware.authenticate, PhotoController.create )
  app.get('/photos', PhotoController.listPhotos);
  app.get('/photos/:id', PhotoController.listPhoto);

  app.get('/users', UserController.listUsers);




  // app.post('/link/:id/comment', middleware.authenticate, CommentController.create )
  app.get('/photos/:id/comment', CommentController.listComments )
  app.get('/comments', CommentController.listallComments )



//  app.post('/shelters/:shelterId/animals', AnimalController.create);
//  app.put('/shelters/:shelterId/animals/:id', AnimalController.update);
};
