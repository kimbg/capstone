const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mysql_pool = require('./mysql');

// MySQL store option
const mysqlStoreOption = {
    clearExpired                : true,
    expiration                  : 1000 * 60 * 60,
    checkExpirationInterval     : 1000 * 60 * 60,
    createDatabaseTable         : true,    
}

// create sessionStore
const sessionStore = new MySQLStore(mysqlStoreOption,mysql_pool)

// sessionOption
const sessionOption = {
    secret              : 'session_secret',
    resave              : false,
    saveUninitialized   : false,    
    store               : sessionStore,
}


// session module
module.exports = (app) => {
    app.use(session(sessionOption));
}