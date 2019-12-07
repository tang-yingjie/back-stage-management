var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var managersRouter = require('./routes/managers');
var managersAddRouter = require('./routes/managersAdd');
var managersDelRouter = require('./routes/managersDel');
var managersUpRouter = require('./routes/managersUp');
var goodsRouter = require('./routes/goods');
var goodsAddRouter = require('./routes/goodsAdd');
var goodsDelRouter = require('./routes/goodsDel');
var goodsUpRouter = require('./routes/goodsUp');
var moneysRouter = require('./routes/money');
var moneysAddRouter = require('./routes/moneysAdd');
var moneysDelRouter = require('./routes/moneysDel');
var moneysUpRouter = require('./routes/moneysUp');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', managersRouter);
app.use('/', managersAddRouter);
app.use('/', managersDelRouter);
app.use('/', managersUpRouter);
app.use('/', goodsRouter);
app.use('/', goodsAddRouter);
app.use('/', goodsDelRouter);
app.use('/', goodsUpRouter);
app.use('/', moneysRouter);
app.use('/', moneysAddRouter);
app.use('/', moneysDelRouter);
app.use('/', moneysUpRouter);
app.use('/', loginRouter);

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

module.exports = app;
