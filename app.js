var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));
app.use('/css', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname,'/node_modules/jquery/dist')));

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/', (req, res) => {
    //res.send('Hello from my library app');
    res.render('index', {list: ['a','b'], title:'Library'});
})

app.listen(port, function(){
    debug('listening on port : ' + chalk.green(port));
});