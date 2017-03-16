const middleware = require("../middleware/index");

const UserController = require("../controllers/user");
// const LinkController = require("../controllers/link");
// const CommentController = require("../controllers/comment");

module.exports = (app) => {
  app.post('/users', UserController.register);
  app.post('/login', UserController.login);
  // //app.post('/authenticate', middleware.authenticate);
  // app.post('/link', middleware.authenticate, LinkController.create )
  // //app.get('/users/:id', middleware.authenticate, UserController.findUser);
  // app.get('/users', UserController.listUsers);
  // //app.get('/links', LinkController.listUsers);
  // app.get('/link', LinkController.listLinks);
  // app.post('/link/:id/comment', middleware.authenticate, CommentController.create )
  // app.get('/link/:id/comment', CommentController.listComments )
  // app.get('/comment', CommentController.listallComments )



//  app.post('/shelters/:shelterId/animals', AnimalController.create);
//  app.put('/shelters/:shelterId/animals/:id', AnimalController.update);
};
