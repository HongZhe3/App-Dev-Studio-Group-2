const db=require('./databaseConfig');
var commDB={
    addCom:function(comment,uID,pID,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   addCom\n\n',comment,uID,pID,'\n');
                var sql='INSERT INTO comment(comment,fk-uID-c,fk-pID-c)VALUES(?,?,?)';
                conn.query(sql,[comment,uID,pID],function(err,result){
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
module.exports=commDB;