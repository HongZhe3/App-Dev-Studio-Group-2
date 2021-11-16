const express= require('express');
const post=require('../model/posts');
var app=express();
app.post('/addPost',(req,res)=>{
    console.log('input',req);
    var title=req.body.title;
    var bdy=req.body.bdy;
    post.addPost(title,bdy,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
    // p
});