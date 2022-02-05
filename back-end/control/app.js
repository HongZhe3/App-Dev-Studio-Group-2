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
app.post('/addPost2',(req,res)=>{//1 copy incase website put data in url
    console.log('\n\ninput2',req.body,'\n',req.query,'\n\n');
    // req.body=JSON.parse(req.body);
    var title=req.query.title;
    var bdy=req.query.bdy;
    var uID=req.query.uID;
    var cID=req.query.cID;
    var image=req.query.image;
    post.addPost(title,bdy,uID,cID,image,(err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(201).send(result);
        }
    });
});//1 2
app.get('/getPosts',(req,res)=>{//2
    console.log('\n\nget posts',req.body,'\n\nquery',req.query);
    post.getPosts((err,result)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            res.status(200).send(result);
            // call /voteCount
        }
    });
});//2
app.put('/editPost',(req,res)=>{//3
    console.log('\nedit post',req.body,'\n\nquery',req.query);
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
    console.log('\ndelete post',req.body,'\n\nquery',req.query);
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
    console.log('\nget post',req.body,'\n\nquery',req.query);
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
    console.log('\nadd user',req.body,'\n\nquery',req.query);
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
    console.log('\nadd channel',req.body,'\n\nquery',req.query);
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
    console.log('\nvote post',req.body,'\n\nquery',req.query);
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
    console.log('\nvote edit',req.body,'\n\nquery',req.query);
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
    console.log('\nvote delete',req.body,'\n\nquery',req.query);
    var uID=req.body.uID;
    var pID=req.body.pID;
    var type=req.body.type;
});//a 4
app.post('/addCom',(req,res)=>{
    // add a comment (considering adding images)
    console.log('\ncomment add',req.body,'\n\nquery',req.query);
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
    console.log('\n\nbody data',req.body,'\n',req.query);
    if(req.query){
        console.log('query');
        var pID=parseInt(req.query.pID);
        var uID=parseInt(req.query.uID);
    }else if(req.body){
        console.log('body');
        var pID=parseInt(req.body.pID);
        var uID=parseInt(req.body.uID);
    }
    //count all the upvotes in post
    var resArray=[{}]
    resArray[0].count=0;
    Vote.upVoteCount(pID,(err,result1)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            // res.status(200).send(result);
            // resArray.push(result1[0]);//old method of counting number of responses
            resArray[0].up=result1[0].up;
            resArray[0].count=resArray[0].count+1;//increases count
            console.log('\nupDATA\n',resArray,'\n'/* ,resArray.length,'\n' */);
        }
        if (resArray[0].count==3) {
            console.log('\nDATAsuccess\n',resArray,'\n'/* ,resArray.length,'\n' */);
            res.status(200).send(resArray);
        }else{
            console.log('\nDATAfail\n',resArray,'\n'/* ,resArray.length,'\n' */);
            }
    });
    Vote.downVoteCount(pID,(err,result2)=>{
        if(err){
            res.status(500).send({'error':err});
        }else{
            // res.status(200).send(result);
            // resArray.push(result2[0]);//old method of counting number of responses
            resArray[0].down=result2[0].down
            resArray[0].count=resArray[0].count+1;//increases count
            console.log('\ndownDATA\n',resArray,'\n'/* ,resArray.length,'\n' */);
        }
        if (resArray[0].count==3) {
            console.log('\nDATAsuccess\n',resArray,'\n'/* ,resArray.length,'\n' */);
            res.status(200).send(resArray);
        }else{
            console.log('\nDATAfail\n',resArray,'\n'/* ,resArray.length,'\n' */);
            }
    });
    Vote.getVote(pID,uID,(err,result3)=>{
        //if user isn't logged in, set ID to 0 or null, as no uID will be those values
        if(err){
            res.status(500).send({'error':err});
        }else{
            // res.status(200).send(result);
            // resArray.push(result3[0]);//old method of counting number of responses
            if (result3.length) {
                resArray[0].fk_uID_v=result3[0].fk_uID_v;
                resArray[0].fk_pID_v=result3[0].fk_pID_v;
                resArray[0].type=result3[0].type;
                resArray[0].date=result3[0].date;
                resArray[0].count=resArray[0].count+1;//increases count 
                console.log('\nuserDATA\n',resArray,'\n'/* ,resArray.length,'\n' */);
            }else{
                resArray[0].type=null;
                resArray[0].count=resArray[0].count+1;//increases count 
                console.log('\nuserDATA\n',resArray,'\n');
            }
        }
        if (resArray[0].count==3) {
            console.log('\nDATAsuccess\n',resArray,'\n'/* ,resArray.length,'\n' */);
            res.status(200).send(resArray);
        }else{
            console.log('\nDATAfail\n',resArray,'\n'/* ,resArray.length,'\n' */);
            }
    });
});//a 2
app.post('/login',(req,res) => {//6
    console.log('\nlogin', req.body, '\n\nquery', req.query);
    var username = req.body.username;
    var pswd = req.body.pswd;
    user.login(username, pswd, (err, result) => {
        if (err) {
            res.status(500).send({ 'error': err });
        } else {
            res.status(201).send(result);
        }
    });
});//6
app.post('/login2',(req,res) => {//6 2
    console.log('\nlogin', req.body, '\n\nquery', req.query);
    var username = req.query.username;
    var pswd = req.query.password;
    user.login(username, pswd, (err, result) => {
        if (err) {
            res.status(500).send({ 'error': err });
        } else {
            res.status(201).send(result);
        }
    });
});//6 2
module.exports=app;