const express = require('express');
const router = express.Router();
const passport = require('../configure/passport')(router);



router.post('/local',
    passport.authenticate('local',{failureRedirect : '/fail'}),
    (req,res) => {
        req.session.save(() => {
            res.render('mainPage');
        })
    }
)



module.exports = router;
