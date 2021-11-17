const express= require('express');
const post=require('../model/posts');
var app=express();
app.post('/addPost',(req,res)=>{//1
    console.log('\n\ninput',req.body,'\n\n');
    // req.body=JSON.parse(req.body);
    var title=JSON.parse(req.body.title);
    var bdy=JSON.parse(req.body.bdy);
    var uID=JSON.parse(req.body.uID);
    var cID=JSON.parse(req.body.cID);
    // var image=req.body.image;
    post.addPost(title,bdy,uID,cID/* ,image */,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//1
app.get('/getPosts',(req,res)=>{//2
    console.log('\n\nget posts',req,'\n\n');
    post.getPosts((err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(200).send(result);
        }
    });
});//2
module.exports=app;