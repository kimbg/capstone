const express = require('express');
const router = express.Router();
const passport = require('../configure/passport')(router);
const mySQL_pool = require('../configure/mysql');

let registerCBFunction = (err,result,req,res,conn) => {
    if(err)
        console.log('registerCBFNC err');
    else if(!result[0])
    {
        let queryString = `insert into user values (?,?,?)`;
        conn.query(queryString,[req.body.id,req.body.pw,req.body.age],(err2,result2) => {
            conn.release();
            if(err2)
                console.log('registerCBFNC err2')
            else if(!result2[0])
                res.send("you register successfully!");            
        })
    }
    else 
    {
        res.send("already that id has exists");
        return;
    }
}


router.post('/local',
    passport.authenticate('local',{failureRedirect : '/fail'}),
    (req,res) => {
        req.session.save(() => {
            res.redirect('/success');
        })
    }
)

router.post('/register',(req,res) => {
    let id = req.body.id;
    let pw = req.body.pw;
    let age = req.body.age;

    mySQL_pool.getConnection((err,conn) => {        
        if(err)
        {
            console.log("/register conn connect err[1]");
            conn.release();
        }        
        let queryString = `select * from user where id = ?`;        
        conn.query(queryString,[id],(err,result) => registerCBFunction(err,result,req,res,conn));
    })
})


module.exports = router;
