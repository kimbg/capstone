const express = require('express');
const router = express.Router();
const passport = require('../configure/passport')(router);
const mySQL_pool = require('../configure/mysql');

let registerCBFunction = (req,res,conn,err,result) => {
    if(err)
        console.log('registerCBFNC err');
    else if(!result)
    {
        let queryString = `insert into user values (?,?,?)`;
        conn.query(queryString,[req.body.data.id,req.body.data.pw,req.body.data.age],(err2,result) => {
            conn.release();
            if(err2)
                console.log('registerCBFNC err2')
            else if(!result)
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
            console.log("/register conn connect err[1]");
        
        let queryString = `select * from user where id = ?`;        
        conn.query(queryString,[id],(err,result) => {
            conn.release();
            
            if(err)
                console.log("register mysql error");
            else if(!result[0])
            {
                let queryString2 = `insert into user values(?,?,?)`;
                conn.query(queryString2,[id,pw,age],(err2,result2) => {
                    if(err2) 
                        console.log("register mysql error2");                        
                    else if(!result2[0]) 
                        res.send("you register successfully!");                        
                    else 
                        res.send("there is an error");
                })
            }
            else res.send("already that id has exists");
        })
    })
})


module.exports = router;
