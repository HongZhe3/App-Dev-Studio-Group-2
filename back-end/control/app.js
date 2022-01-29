const express= require('express');
const post=require('../model/posts');
const user=require('../model/user');
const Vote=require('../model/vote');
const Channel=require('../model/channel');
const comment=require('../model/comment');
// const multer=require('multer');
var app=express();
const cors = require('cors');
const { addCom } = require('../model/comment');
const e = require('express');
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
            res.status(200).send(result);
        }
    });
});//2
app.put('/editPost',(req,res)=>{//3
    console.log('\nedit post',req.body,'\n\nparams',req.query);
    var ID=parseInt(req.query.ID);
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
    var ID=parseInt(req.query.ID);
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
    var ID=parseInt(req.query.ID);
    console.log(ID);
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
    Channel.addCh(name,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//6
app.post('/votePost',(req,res)=>{//a 1
    // add a vote (up or down depending on system)
    console.log('\nvote post',req.body,'\n\nparams',req.query);
    var uID=req.body.uID;
    var pID=req.body.pID;
    var type=req.body.type;
    Vote.vote(uID,pID,type,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//a 1
app.put('/changeVotePost',(req,res)=>{//a 3
    // change a vote (up or down depending on system)
    console.log('\nvote edit',req.body,'\n\nparams',req.query);
    var uID=req.body.uID;
    var pID=req.body.pID;
    var type=req.body.type;
    Vote.voteEdit(pID,uID,type,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(200).send(result);
        }
    });
});//a 3
app.delete('/deleteVotePost',(req,res)=>{//a 4
    // delete a vote (up or down depending on system)
    console.log('\nvote delete',req.body,'\n\nparams',req.query);
    var uID=req.body.uID;
    var pID=req.body.pID;
    var type=req.body.type;
});//a 4
app.post('/addCom',(req,res)=>{
    // add a comment (considering adding images)
    console.log('\ncomment add',req.body,'\n\nparams',req.query);
    var uID=req.body.uID;
    var pID=req.body.pID;
    var cont=req.body.comment;
    comment.addCom(cont,uID,pID,(err,result)=>{
        //conn.end();
        if(err){
            console.log(err,'\n\n2bf\n\n');
            return callback(err,null);
        }else{
            console.log(result,'\n\n2bs\n\n');
            return callback(null,result);
        }
    });
});
app.get('/voteCount',(req,res)=>{//a 2
    var pID=req.body.pID;
    var uID=req.body.uID;
    //count all the upvotes in post
    var resArray=[]
    Vote.upVoteCount(pID,(err,result1)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            // res.status(200).send(result);
            resArray.push(result1[0]);
            console.log('\nDATA\n',resArray,'\n',resArray.length,'\n');
        }
        if (resArray.length==3) {
            console.log('\nDATAsuccess\n',resArray,'\n',resArray.length,'\n');
            res.status(200).send(resArray);
        }else{
            console.log('\nDATAfail\n',resArray,'\n',resArray.length,'\n');
            }
    });
    Vote.downVoteCount(pID,(err,result2)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            // res.status(200).send(result);
            resArray.push(result2[0]);
            console.log('\nDATA\n',resArray,'\n',resArray.length,'\n');
        }
        if (resArray.length==3) {
            console.log('\nDATAsuccess\n',resArray,'\n',resArray.length,'\n');
            res.status(200).send(resArray);
        }else{
            console.log('\nDATAfail\n',resArray,'\n',resArray.length,'\n');
            }
    });
    Vote.getVote(pID,uID,(err,result3)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            // res.status(200).send(result);
            resArray.push(result3[0]);
            console.log('\nDATA\n',resArray,'\n',resArray.length,'\n');
        }
        if (resArray.length==3) {
            console.log('\nDATAsuccess\n',resArray,'\n',resArray.length,'\n');
            res.status(200).send(resArray);
        }else{
            console.log('\nDATAfail\n',resArray,'\n',resArray.length,'\n');
            }
    });
});//a 2
app.post('/login',(req,res) => {//6
    console.log('\nlogin', req.body, '\n\nparams', req.query);
    var username = req.body.username;
    var pswd = req.body.pswd;
    user.login(username, pswd, (err, result) => {
        if (err) {
            res.status(500).send({ 'error': err });
        } else {
            res.status(201).send(result);
        }
    });
});
module.exports=app;