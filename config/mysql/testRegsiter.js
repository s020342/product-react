
const pool=require('./configSql')

function testReg(params,cb) {
    pool.getConnection(function(err, connection){
        if(err){
            console.log('查询失败', err);
        }else{
            var sql = 'select * from userlogin';
            connection.query(sql, function(err, result) {
               
                if (err) {
                    console.log('查询失败', err);
                } else{
                    console.log(result)
                   let flag= result.some(item=>{
                        return item.user===params.user
                    })
                 cb(flag)
                }   
                connection.release();//连接释放          
            })
       
        }
     })
}
module.exports=testReg