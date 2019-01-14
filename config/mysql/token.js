
const pool=require('./configSql')

function getToken(params,cb) {
    pool.getConnection(function(err, connection){
        if(err){
            console.log('查询失败', err);
        }else{
            var modSql ='UPDATE userlogin SET token = ? WHERE Id = ?';
            var modSqlParams = [params.token,params.id];
            connection.query(modSql,modSqlParams, function(err, result) {
                if (err) {
                    console.log('更新数据失败', err);
                } else {
                    console.log('更新数据成功');
                    cb(result)
                    connection.release(); 
                }
            })
       
        }
     })
}
module.exports=getToken