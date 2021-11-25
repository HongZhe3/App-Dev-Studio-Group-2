const mysql=require('mysql');
var dbconnect={
    getConnection:function(){
        var conn=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'password',
            database:'ads-gp-2'
        });
        return conn;
    }
};
module.exports=dbconnect;