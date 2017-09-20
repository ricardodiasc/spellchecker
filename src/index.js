import express from 'express';
import nodehun from 'nodehun';

import SpellChecker from './spellchecker';


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/check/:word',(req,resp,next)=>{

    resp.write("Hellp");
    resp.end();
});

app.listen(8080,()=>{
    console.log(`Spell checker started on ${PORT}`);
});