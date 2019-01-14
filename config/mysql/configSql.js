const mysql = require("mysql")

var pool = mysql.createPool({
    host: 'localhost',
    database: 'test', //数据库表名
    port: 3306,
    user: 'root',
    password: ''
})

module.exports=pool;