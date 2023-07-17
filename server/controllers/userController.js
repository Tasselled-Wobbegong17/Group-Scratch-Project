// require database to add/login users

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

function errorCreator(log, status, message) {
  return {
    log: log,
    status: status,
    message: message
  }
}

userController.createUser = async (req, res, next) => {

  const { username, password } = req.body;
  if (!username || !password) return next(errorCreator('Error happened in userController.createUser', 400, 'Could not create user. Make sure you have a username and password input'));

  const newUser = {};
  try {
    const hash = await bcrypt.hash(password, saltRounds);

    newUser.username = username;
    newUser.password = hash;

    res.locals.user = newUser;
    console.log(newUser);
    return next();
  }
  catch (err) {
    return next(errorCreator('Error happened in userController.createUser: ' + err, 400, 'Something broke when signing up user'));
  }
}

userController.loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) return next(errorCreator('Error happened in userController.loginUser', 400, 'Could not login user. Make sure you have a username and password input'));

  try {
    // get the matching username's hash form DB
    const foundUser = { temp: 'temp', password: "$2b$10$9tg/WUrAVN2yRuR.GVgUWuP.ykJLylrXURtXLehlEGSV9Qw5PtPGq" };

    const result = await bcrypt.compare(password, foundUser.password)

    if (result) {
      res.locals.user = foundUser;
      return next();
    }
    else {
      return next(errorCreator('Incorrect username or password input at userController.loginUser.', 400, 'Incorrect username or password input.'));
    }
  }
  catch (err) {
    return next(errorCreator('Error happened in userController.loginUser: ' + err, 400, 'Something broke when logging in user'));
  }
}

module.exports = userController;