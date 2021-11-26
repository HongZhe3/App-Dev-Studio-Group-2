const express= require('express');
const post=require('../model/posts');
const user=require('../model/user');
const vote=require('../model/vote');
const channel=require('../model/channel');
const comment=require('../model/comment');
var app=express();
const cors = require('cors');
app.options('*',cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.post('/addPost',(req,res)=>{//1
    console.log('\n\ninput',req.body,'\n\n');
    // req.body=JSON.parse(req.body);
    var title=req.body.title;
    var bdy=req.body.bdy;
    var uID=req.body.uID;
    var cID=req.body.cID;
    var image=req.body.image;
    post.addPost(title,bdy,uID,cID,image,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//1
app.get('/getPosts',(req,res)=>{//2
    console.log('\n\nget posts',req.body,'\n\nparams',req.query);
    post.getPosts((err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(200).send({'result':result});
        }
    });
});//2
app.put('/editPost',(req,res)=>{//3
    console.log('\nedit post',req.body,'\n\nparams',req.query);
    var ID=req.query.ID;
    var title=req.body.title;
    var bdy=req.body.bdy;
    post.editPost(ID,title,bdy,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    });
});//3
app.delete('/deletePost',(req,res)=>{//4
    console.log('\ndelete post',req.body,'\n\nparams',req.query);
    var ID=req.query.ID;
    post.deletePost(ID,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            console.log(result);
            res.status(200).send(result);
        }
    });
});//4
app.get('/getPost',(req,res)=>{//5
    console.log('\nget post',req.body,'\n\nparams',req.query);
    var ID=req.query.id;
    post.getPost(ID,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(200).send(result);
        }
    });
});//5 test edit
app.post('/addUser',(req,res)=>{//6
    console.log('\nadd user',req.body,'\n\nparams',req.query);
    var username=req.body.username;
    user.addUser(username,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//6
app.post('/addChannel',(req,res)=>{//6
    console.log('\nadd channel',req.body,'\n\nparams',req.query);
    var name=req.body.name;
    channel.addCh(name,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//6
app.post('/votePost',(req,res)=>{
    console.log('\nvote post',req.body,'\n\nparams',req.query);
    var uID=req.body.uID;
    var pID=req.body.pID;
    var type=req.body.type;
    vote.vote(uID,pID,type,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});
module.exports=app;