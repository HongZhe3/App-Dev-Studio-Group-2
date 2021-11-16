const express=require('express');
const app=express();
app.get('/post',(req,res)=>{
    console.log('accessed post');
    res.sendFile('./public/test.html',{root:__dirname});
});
const port=3000;
const http=require('http');
const server=app.listen(port,function(){
    console.log('Web App Hosted at http://localhost:%s',port);
});