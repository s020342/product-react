const pool=require('./configSql')
const getToken=require('./token.js')
const testReg=require('./testRegsiter')
const md5=require('md5')
function connect(type,params,res) {
    pool.getConnection(function(err, connection) {
            if (err) {
                console.log('与mysql数据库建立连接失败');
            } else {
                if(type==='regsiter'){
                    testReg(params,(flag)=>{
                       if(!flag){
                        var addSe = 'insert into userlogin(user,pwd) values (?,?)';
                        var addData = [params.user, params.pwd];
                        connection.query(addSe, addData, function(err, result) {
                            if (err) {
                                console.log('插入数据失败', err);
                                res.send({code:0,msg:'失败'})
                            } else {
                                console.log('插入数据成功');
                                res.send({code:1,msg:'succes'})
                                connection.release(); 
                            }
                        })
                       }else{
                        res.send({code:0,msg:'账号已存在！'})
                       }
                    })
                   
                }else if(type==='login'){
                    var sql = 'select * from userlogin where user=? and pwd=?';
                    var sqlData = [params.user, params.pwd];
                    connection.query(sql, sqlData, function(err, result) {
                        console.log(result)
                        if (err) {
                            console.log('查询失败', err);
                        } else {
                           if(result.length>=1){
                                let times=new Date().getTime()
                                let token=md5(times+result[0].id)
                                let params={
                                    id:result[0].id,
                                    user:result[0].user,
                                    pwd:result[0].pwd,
                                    token:token
                                }
                                console.log('数据查询成功');
                                getToken(params,(data)=>{
                                    res.send({code:1,msg:result})
                                })
                           }else{
                            res.send({code:0,msg:'失败'})
                           }
                            connection.release();//连接释放
                        }
                    })
                }
            }
        })
        //处理数据库服务器连接中断时的操作
    pool.on('error', function(err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('与mysql数据库之间的连接丢失');
            //3秒后重新尝试连接数据库
            setTimeout(function() {
                connect();
            }, 3000);
        } else {
            throw err;
        }
    })
  }

module.exports=connect