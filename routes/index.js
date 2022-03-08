const express = require('express');
const router = express.Router();


let user = {
    name : "bk",
    age : 21
}

let data = [
    {title : 'cat1', comment : "cat1 is very good movie"},
    {title : 'cat2', comment : "cat1 is very so so movie"},
    {title : 'cat3', comment : "cat1 is very bad movie"},
]

router.get('/',(req,res) => {
    res.render('test',{user : user,cats : data});
})

module.exports = router;