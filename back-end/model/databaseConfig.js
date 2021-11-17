const mysql=require('mysql');
var dbconnect={
    getConnection:function(){
        var conn=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'17112020st0503',
            database:'ads-gp-2'
        });
        return conn;
    }
};
module.exports=dbconnect;