const express=require('express');
const app=express();
app.get('/post',(req,res)=>{
    console.log('accessed post');
    res.sendFile('./public/post.html',{root:__dirname});
});
app.get('*',(req,res)=>{
    console.log('accessed post');
    res.sendFile('./public/home.html',{root:__dirname});
});
module.exports=app;