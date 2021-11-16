const mysql=require('mysql');
var dbconnect={
    getConnection:function(){
        var conn=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'17112020st0503',
            database:'assignment_2122'
        });
        return conn;
    }
};
module.exports=dbconnect;