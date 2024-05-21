const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const { checkOverload } = require('./helpers/check.connect');
const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
checkOverload();

// init db
require('./dbs/init.mongodb');

// init routes
app.get('/', (req, res, next) => {
  // const strCompress = 'Help FanTipjs';

  return res.status(200).json({ 
    message: 'Welcome FanTipJs',
    // metadata: strCompress.repeat(100000)
  })
})
// handling error

module.exports = app;