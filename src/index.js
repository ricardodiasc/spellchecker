import express from 'express';
import nodehun from 'nodehun';




const app = express();

app.get('/check/:word',(req,resp,next)=>{
    console.log('teste');
    resp.write("Hellp");
    resp.end();
});

app.listen(8080,()=>{
    console.log('started on 8080');
});