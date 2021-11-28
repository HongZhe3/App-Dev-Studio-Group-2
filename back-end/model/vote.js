const db=require('./databaseConfig');
var voteDB={
    vote:function(uID,pID,type,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   addPost\n\n',uID,pID,type,'\n');
                var sql=`INSERT INTO
                vote_count 
                (fk_uID_v,fk_pID_v,type) 
                VALUES
                (?,?,?)`;
                conn.query(sql,[uID,pID,type],function(err,result){
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result.inser,'\n\n2bs\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    }
    // suggested add on: adaptative endpoint, gets vote status:
    //if not present, then add 1 and current status,
    //if present:
    //  and type is same (selected upvote, in db is also upvote), delete vote,
    //  type not same, edit type
};
module.exports=voteDB;