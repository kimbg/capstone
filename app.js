// static files
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.port_number | 3000;

// router
const indexRouter = require('./routes/index');

// engine setting
app.set('views',__dirname + '/views/templates');
app.set('view engine','ejs');



app.use('/static',express.static(__dirname + '/public'));
app.use('/',indexRouter);



app.listen(port,() => {
    console.log(`app is listening on ${port}`);
})