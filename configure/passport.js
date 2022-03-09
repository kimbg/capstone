const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user,done) => {
    done(null,user);
})

passport.deserializeUser((user, done) => {
    done(null,user);
})


passport.use(
    new LocalStrategy(
        {
            usernameField : 'id',
            passwordField : 'pw',
        },
    (userInfo,password,done) => {
    console.log("유저정보 출력 현재 위치는 /configure/passport.js");
    let user = {
        id : userInfo,
        pw : password
    }
    console.log(user);
    return done(null,user);
}))



module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    
    return passport;
}