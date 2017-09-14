import express from 'express';

const app = express();

app.get('/',(req,resp)=>{
    console.log('teste');
    resp.write("Hellp");
    resp.end();
});

app.listen(8080,()=>{
    console.log('started on 8080');
});