/*

  Devido a alguns conflitos com o 'nodemon' e o a mudança no packge.json ("type" : "modules"),
  que utiliza o moderno sistema de ES Modules, em comparação ao 'var {variavel} = require('path');'.
  Em seu lugar usamos o 'import ... ;'.

  Aqui estão nossas substituições de require para import:
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');

    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');

*/

import createError from './node_modules/http-errors/index.js';
import express from './node_modules/express/index.js';
import path from 'path';
import cookieParser from './node_modules/cookie-parser/index.js';
import logger from './node_modules/morgan/index.js';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();
const __dirname = import.meta.dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
