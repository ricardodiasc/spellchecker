import nodehun from 'nodehun';
import fs from 'fs';
import Promise from 'promise';

const encoding = require('encoding');

class SpellChecker {
    constructor(){
        let affBuff = fs.readFileSync(new Buffer(__dirname+'/dic/hunspell/pt_BR.aff',{encoding:'ISO8859-1'}));
        let dicBuff = fs.readFileSync(new Buffer(__dirname+'/dic/hunspell/pt_BR.dic',{encoding:'ISO8859-1'}));
        this.dict = new nodehun(affBuff,dicBuff);
    }

    check(word){
        console.log('Verificando palavra '+word);

        return  new Promise( (resolve,reject)=>{
            console.log('inicia verificacao');
            
            this.dict.spellSuggest(word,(err,correct, sugestion, originalWord)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                let result = {
                    correct: correct,
                    sugestions: sugestions,
                    originalWord: originalWord
                }
                
                resolve(result);
            });

        });
    }

    checkWord(word, callback){
        this.dict.spellSuggestions(word,callback);
    }

}

export default SpellChecker;