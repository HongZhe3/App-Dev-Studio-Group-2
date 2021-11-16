// const app=require('./control/app');
const express=require('express');
const app=express();
const port =3001;
const http=require('http');
const server=app.listen(port,function(){
    console.log('Web App Hosted at http://localhost:%s',port);
});