const express = require('express');
const router = express.Router();
const loginRouter = require('./login');


let user = {
    name : "bk",
    age : 21
}

let data = [
    {title : 'cat1', comment : "cat1 is very good movie"},
    {title : 'cat2', comment : "cat1 is very so so movie"},
    {title : 'cat3', comment : "cat1 is very bad movie"},
]
// -----------------------위는 테스트 데이터

router.use('/login',loginRouter);

// router.get('/success',(req,res) => {
//     res.render('/mainPage');
// })

router.get('/fail',(req,res) => {
    res.render('failPage');
})

router.get('/',(req,res) => {
    res.render('test',{user : user,cats : data});    
})

module.exports = router;