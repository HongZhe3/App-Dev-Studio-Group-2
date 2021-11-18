const express=require('express');
const app=express();
app.get('/post',(req,res)=>{
    console.log('accessed post');
    res.sendFile('post.html',{root:__dirname});
});
app.get('*',(req,res)=>{
    console.log('accessed post');
    res.sendFile('home.html',{root:__dirname});
});
module.exports=app;