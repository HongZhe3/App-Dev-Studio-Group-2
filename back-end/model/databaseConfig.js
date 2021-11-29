const mysql=require('mysql');
var dbconnect={
    getConnection:function(){
        var conn=mysql.createConnection({
            host:'us-cdbr-east-04.cleardb.com',
            user:'b401a6edc988da',
            password:'00881f71',
            database:'heroku_67f6c6c6df72328'
        });
        return conn;
    }
};
module.exports=dbconnect;