const express=require('express');
const app=express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/post',(req,res)=>{
    console.log('accessed post');
    res.sendFile('./front-end/public/post.html',{root:__dirname});
});
app.get('*',(req,res)=>{
    console.log('accessed post');
    res.sendFile('./front-end/public/home.html',{root:__dirname});
});
// var app=require('./public/app');
const portA= process.env.PORT || 3000;

app.listen(portA, "0.0.0.0", function(){
    console.log('Web App Hosted at http://localhost:%s',portA);
});


//back end
var appB=require('./back-end/control/app');
const portB =process.env.PORT || 3001;

appB.listen(portB, "0.0.0.0", function(){
    console.log('Web App Hosted at http://localhost:%s',portB);
});