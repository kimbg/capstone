// static node modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port_number | 3000;

// router
const indexRouter = require('./routes/index');

// engine(ejs) setting
app.set('views',path.join(__dirname,'/views/templates'));
app.set('view engine','ejs');

//use req.body
app.use(express.urlencoded({extended:false}));



app.use('/static',express.static(__dirname + '/public'));
app.use('/',indexRouter);



app.listen(port,() => {
    console.log(`app is listening on ${port}`);
})