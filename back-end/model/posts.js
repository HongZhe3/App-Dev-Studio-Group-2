const db=require('./databaseConfig');
var postDB={
    addPost:function(title,cont,uID,cID,image,callback){ //1
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
                        console.log(err,'\n\n2b\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result.inser,'\n\n2b\n\n');
                        return callback(null,result);
                    }
                });
            }
        });
    },//1
    getPosts:(callback)=>{//2
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
                var sql='';
                conn.query(sql,[],(err,result)=>{
                    conn.end();
                    if(err){
                        console.log(err,'\n\n2b\n\n');
                        return callback(err,null);
                    }else{
                        console.log(result,'\n\n2b\n\n');
                        return callback(result,null);
                    }
                });
            }
        });
    }//2
};
module.exports = postDB;