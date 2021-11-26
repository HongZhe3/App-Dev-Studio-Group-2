const db=require('./databaseConfig');
var postDB={
    addPost:function(title,cont,uID,cID,image,callback){//1 complete
        if(image){
            image=null;
            console.log('\nimage',image,'\n');
        }
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   addPost\n\n',title,cont,uID,cID,image,'\n');
                var sql='INSERT INTO posts(postsTitle,postsContent,fk_userID,fk_channelID,imageLink)VALUES(?,?,?,?,?)';
                conn.query(sql,[title,cont,uID,cID,image],function(err,result){
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
    }//1 complete
    ,getPosts:(callback)=>{//2 complete
        // result=[{title:'1st post',content:'lorem ispum',uID:'1',cID:'1',image:undefined}]
        // return callback(null,result)
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   getPost\n\n');
                var sql=`SELECT p.*,u.username,ch.subreddit
                FROM posts AS p,user AS u,channel AS ch
                WHERE p.fk_userID=u.iduser
                AND p.fk_channelID=ch.idchannel`;
                conn.query(sql,[],(err,result)=>{
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
    }//2 complete
    ,editPost:(postID,title,cont/* ,uID,cID,image */,callback)=>{//3 complete
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   editPost\n\n');
                var sql=`UPDATE posts SET postsTitle=?, postsContent=? WHERE idposts=?;`;
                conn.query(sql,[title,cont,postID/* uID,cID,image */],(err,result)=>{
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
    }//3a complete
    ,editPost2:(postID,title,cont,uID,cID,image,callback)=>{
        var conn=db.getConnection();
        var req_cols=[];
        const vals=[];
        /*data prep*/
        if(title!=null){
            req_cols.push('postsTitle=?');
            vals.push(title);
        }
        if(cont!=null){
            req_cols.push('postsContent=?');
            vals.push(cont);
            //
        }
        if(uID!=null){
            req_cols.push('');
            vals.push(uID);
            //
        }
        if(cID!=null){
            req_cols.push('');
            vals.push(cID);
            //
        }
        if(image!=null){
            req_cols.push('');
            vals.push(image);
            //
        }
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{}
            var sql=`UPDATE posts SET postsTitle=?, postsContent=? WHERE idposts=?;`;
        });
    }//3b in progress
    ,deletePost:(postID,callback)=>{//4 complete
        var conn=db.getConnection();
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   deletePost\n\n');
                var sql='DELETE FROM posts WHERE idposts=?;';
                conn.query(sql,[postID],(err,result)=>{
                    conn.end();
                    if(err){
                        conn.end();
                        console.log(err,'\n\n2bf\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,'\n\n2bs\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    }//4 complete
    ,getPost:(postID,callback)=>{//5 complete
        // result=[{title:'1st post',content:'lorem ispum',uID:'1',cID:'1',image:undefined}]
        // return callback(null,result)
        var conn=db.getConnection();
        /* upload steps */
        conn.connect(function(err){
            if(err){
                conn.end();
                console.log(err,'\n\n2a\n\n');
                return callback(err,null);
            }else{
                console.log('\n\nConnected!   getPost\n\n');
                var sql='SELECT*FROM posts WHERE idposts=?';
                conn.query(sql,[postID],(err,result)=>{
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
    }//5 complete
};
module.exports = postDB;