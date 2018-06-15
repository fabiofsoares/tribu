//Server and config
const express   = require('express'),
      app       = express(),
      host      = '127.0.0.1',
      port      = 3000,
      path      = require('path'),
      Twig      = require("twig");      

app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
  
//Routes
let indexRouter = require('./app/routes/index'),
    usersRouter = require('./app/routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, host, function () {
  console.log('Example app listening on : ' + host + ':' + port)    
})