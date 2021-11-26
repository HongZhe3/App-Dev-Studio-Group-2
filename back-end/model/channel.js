const db=require('./databaseConfig');
var channDB={
    addCh:function(name,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   addPost\n\n',name,'\n');
                var sql='INSERT INTO channel(subreddit)VALUES(?)';
                conn.query(sql,[name],function(err,result){
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
    }
};
module.exports=channDB;