const express = require('express');
require('dotenv').config({ path: 'api-token.env' });
const path = require('path');

// add cookieparser/bcrypt for authentication
const apiRouter = require(path.resolve(__dirname, 'routers/apiRouters.js'))
const userRouter = require(path.resolve(__dirname, 'routers/userRouters.js'))

const app = express();
const PORT = 3000;

// TODO: Connect to database

//TODO: Add/import router files

app.use(express.json());
app.use(express.urlencoded())

//TODO: Add express.static handler, ensure it works
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../dist')));
}
else {
  app.use(express.static(path.resolve(__dirname, '../client')));
}


//TODO: router stuff
app.use('/api', apiRouter);

app.use('/user', userRouter);




//TODO: Serve generic file
app.get('/', (req, res) => {
  res.status(200).send(path.resolve(__dirname, './client/index.html'));
});

app.use('/login', (req, res) => {
  res.status(200).json(req.body);
});

//TODO: Double check 404 handler
app.use('*', (req, res) => res.status(404).send('Nothings exists here :O'));

// Error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Begins listening to port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;