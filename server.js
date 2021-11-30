const express=require('express');
const app=express();
var appB=require('./back-end/control/app');

app.use('/be',appB);

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
    // res.send({port:process.env.PORT});
});
app.get('*',(req,res)=>{
    console.log('accessed post');
    res.sendFile('./front-end/public/home2.html',{root:__dirname});
});

// var app=require('./public/app');
const portA=3000;
const httpA=require('http');
const serverA=app.listen(process.env.PORT||portA,function(){
    if(process.env.PORT){
        //
        console.log('Web App Hosted at http://%s',process.env.PORT);
    }else{
        console.log('Web App Hosted at http://%s',portA);
    }
});

//back end
// const portB =3001;
// const httpB=require('http');
// const serverB=appB.listen(process.env.PORT||portB,function(){
//     if(process.env.PORT){
//         //
//         console.log('Web App Hosted at http://localhost:%s',process.env.PORT);
//     }else{
//         console.log('Web App Hosted at http://localhost:%s',portB);
//     }
// });