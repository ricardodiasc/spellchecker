import nodehun from 'nodehun';
import fs from 'fs';
import iconv from 'iconv-lite';

const encoding = require('encoding');

class SpellChecker {
    constructor(){
        let affBuff = fs.readFileSync(__dirname+'/dic/hunspell/utf/pt_BR.aff');
        let dicBuff = fs.readFileSync(__dirname+'/dic/hunspell/utf/pt_BR.dic');
        this.dict = new nodehun(affBuff,dicBuff);

    }

    check(word){
        return  new Promise((resolve,reject)=>{
            this.dict.spellSuggest(word,(err,correct, sugestion, originalWord)=>{
                if(err){
                    return reject(err);
                }
                try{
                    let s = sugestion;
                    console.log(encoding.convert(s,'win1252','utf8').toString());

                    

                    console.log(s);
    
                }catch(e){
                    console.log(e);
                    return reject(err);
                }
                
                
                let result = {
                    correct: correct,
                    sugestion: sugestion.map((element) =>  iconv.decode(new Buffer(element),'win1251')),
                    originalWord: originalWord
                }
               
                return resolve(result);
            });

        });
    }
}

export default SpellChecker;

