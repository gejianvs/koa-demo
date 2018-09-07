var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456Ww(',
    database : 'koa_demo'
});


connection.connect((err)=>{
    if(err){
        console.log(err.stack)
        return;
    }
    console.log('connected as id ' + connection.threadId);

})
// // 执行sql脚本对数据库进行读写
// connection.query('SELECT * FROM user_info',  (error, results, fields) => {
//     console.log('in')
//     if (error) throw error
//     // connected!
//
//     // 结束会话
//     connection.release()
// });
// console.log(connection)



