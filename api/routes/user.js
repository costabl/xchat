module.exports = function(app){
  
  let UserController = app.controllers.user;

  /* GET users listing. */
  app.get('/user', UserController.find);
  
  /* POST create user */
  app.post('/user/create', UserController.create);
  
}