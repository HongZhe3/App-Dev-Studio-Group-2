const appB=require('./control/app');
// const express=require('express');
// const app=express();
const port =3001;
const http=require('http');
const server=appB.listen(port,function(){
    console.log('Web App Hosted at http://localhost:%s',port);
});

// const express=require('express');
// const app=express();
// app.get('/post',(req,res)=>{
//     console.log('accessed post');
//     res.sendFile('post.html',{root:__dirname});
// });
// app.get('*',(req,res)=>{
//     console.log('accessed post');
//     res.sendFile('home.html',{root:__dirname});
// });
// const portA=3000;
// const httpA=require('http');
// const serverA=app.listen(portA,function(){
//     console.log('Web App Hosted at http://localhost:%s',portA);
// });