const express = require('express');
const router = express.Router();
const session = require('express-session');
const session_store = require('session-file-store')(session);


//DB를 사용할거면 store을 Mysql로 바꿔야함
const sessionOption = {
    secret              : 'session_secret',
    resave              : false,
    saveUninitialized   : false,
    store               : new session_store(),
}










module.exports = (app) => {
    app.use(session(sessionOption));
}