const mysql = require('mysql');

// MySQL pool option
let poolOption = {
    host                : process.env.DB_host,
    user                : process.env.DB_user,    
    password            : process.env.DB_password,
    database            : process.env.DB_name,
    port                : process.env.DB_port,  
    connectionLimit     : 20,  
}

// create MySQL pool
const pool = mysql.createPool(poolOption);

// module
module.exports = pool;