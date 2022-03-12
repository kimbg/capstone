// static node modules
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.port_number || 3000;
const bodyParser = require('body-parser');
require('./configure/session')(app);
require('./configure/passport')(app);
const indexRouter = require('./routes/index');

// use req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

// multer 
const multer = require('multer');
app.use(multer({dest : `./images`}).single('singleImage'));


// 정적 파일 제공
app.use('/static',express.static(path.join(__dirname,'/public')));
app.use('/html',express.static(path.join(__dirname,'/views')));


// engine(ejs) setting
app.set('views',path.join(__dirname,'/views/templates'));
app.set('view engine','ejs');




// Router모아둔 곳으로 이동
app.use('/',indexRouter);



// server open
app.listen(port,() => {
    console.log(`app is listening on ${port}`);
})

// module.exports = multer;