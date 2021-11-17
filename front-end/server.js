var app=require('./public/app');
const portA=3000;
const httpA=require('http');
const serverA=app.listen(portA,function(){
    console.log('Web App Hosted at http://localhost:%s',portA);
});

//back end
var appB=require('../back-end/control/app');
const portB =3001;
const httpB=require('http');
const serverB=appB.listen(portB,function(){
    console.log('Web App Hosted at http://localhost:%s',portB);
});