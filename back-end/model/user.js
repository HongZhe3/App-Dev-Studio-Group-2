const db=require('./databaseConfig');
var userDB={
    addUser:function(username,callback){//1
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   addPost\n\n',username);
                var sql='INSERT INTO user(username)VALUES(?)';
                conn.query(sql,[username],function(err,result){
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,'\n\n2bs\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    }//1
};
module.exports=userDB;