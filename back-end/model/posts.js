const db=require('./databaseConfig');
var postDB={
    addPost:function(title,cont,uID,cID,image){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'2a');
                return callback(err,null);
            }else{
                console.log('Connected!   addPost');
                var sql='INSERT INTO post(title,content,uID,cID,image)VALUES(?,?,?,?,?)';
                conn.query(sql,[title,cont,uID,cID,image],function(err,result){
                    conn.end();
                    if(err){
                        console.log(err,'2b');
                        return callback(err,null);
                    }else{
                        console.log(result,'2b');
                        return callback(result,null);
                    }
                });
            }
        });
    }
};
module.exports = postDB;