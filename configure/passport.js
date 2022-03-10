const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user,done) => {
    done(null,user);
})

passport.deserializeUser((user, done) => {
    done(null,user);
})

//Local Strategy
passport.use(new LocalStrategy({
        usernameField : 'id',
        passwordField : 'pw',
    },(userInfo,password,done) => {            
    
    let user = {
        id : userInfo,
        pw : password
    }
    return done(null,user);
}))


//module
module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
    
    return passport;
}