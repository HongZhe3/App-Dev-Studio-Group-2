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
            }else{//check if there is already a vote
                console.log('\n\nConnected!   addVote\n\n',uID,pID,type,'\n');
                var sql=`SELECT * FROM vote_count WHERE fk_uID_v=? AND fk_pID_v=?;`;
                conn.query(sql,[uID,pID,type],function(err,result){
                    //checks
                    if (result==[]){
                        console.log(result,'\n\n2bc\n\nalready voted');
                        return callback(null,result);
                    }else{
                        var sql2=`INSERT INTO
                        vote_count 
                        (fk_uID_v,fk_pID_v,type) 
                        VALUES
                        (?,?,?)`;
                        conn.query(sql2,[uID,pID,type],function(err,result){
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
        });
    }
    ,upVoteCount:function(pID,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   upVoteCount\n\n',pID,'\n');
                var sql=`SELECT count(type)'up' FROM vote_count WHERE fk_pID_v=? AND type="up"`;
                conn.query(sql,[parseInt(pID)],(err,result)=>{
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,result.length,'\n\n2bs\nupVote\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    }
    ,downVoteCount:function(pID,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   downVoteCount\n\n',pID,'\n');
                var sql=`SELECT count(type)'down' FROM vote_count WHERE fk_pID_v=? AND type="down"`;
                conn.query(sql,[parseInt(pID)],(err,result)=>{
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,result.length,'\n\n2bs\ndownVote\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    }
    ,voteEdit:function(pID,uID,type,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   voteEdit\n\n',pID,'\n');
                var sql=`UPDATE vote_count SET type=? WHERE fk_uID_v=? AND fk_pID_v=?;`;
                conn.query(sql,[uID,pID,type],function(err,result){
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,result.length,'\n\n2bs\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    }
    ,getVote:function(pID,uID,callback){
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   getVote\n\n',pID,'\n');
                var sql=`SELECT*FROM vote_count WHERE fk_pID_v=? AND fk_uID_v=?`;
                conn.query(sql,[parseInt(pID),parseInt(uID)],(err,result)=>{
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,result.length,'\n\n2bs\ngetVote\n\n');
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