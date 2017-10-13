import 'babel-polyfill';
import express from 'express';
import iconv from 'iconv-lite';

import SpellChecker from './spellchecker';


const app = express();
const PORT = process.env.PORT || 3000;


const spellchecker = new SpellChecker();

app.get('/check/:word',async (req,resp,next)=>{
    spellchecker.checkWord(req.params.word, (err,correct, sugestions, originalWord)=>{

        if(err){
            console.log(err);
        }
        let result = {
            correct: correct,
            sugestions: sugestions,
            originalWord: originalWord
        }
        
        resp.json(result);
        resp.end();
        next();
    });    
});

app.listen(PORT,()=>{
    console.log(`Spell checker started on ${PORT}`);
});
