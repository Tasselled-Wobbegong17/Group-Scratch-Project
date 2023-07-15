// require database to add/login users

const userController = {};

userController.createUser = async (req, res, next) => {
  res.locals.user = 'not implemented yet';
  return next();
}

userController.loginUser = async (req, res, next) => {
  res.locals.user = 'not implemented yet';
  return next();
}

module.exports = userController;