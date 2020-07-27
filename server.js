var createError = require('http-errors');
var express = require('express');
var testAPIRouter = require('./routes/testAPI');
var app = express();
const bodyParser = require("body-parser");
const port = 9000;

app.use(express.json());
app.use("/testAPI", testAPIRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
// POST method route

module.exports = app;
