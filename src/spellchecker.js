import nodehun from 'nodehun';
import fs from 'fs';

class SpellChecker {
    constructor(){
        let affBuff = fs.readFileSync(__dirname+'/dic/hunspell/pt_BR.aff');
        let dicBuff = fs.readFileSync(__dirname+'/dic/hunspell/pt_BR.dic');
        this.dict = new nodehun(affBuff,dicBuff);

    }

    checkWord(word){
        return  new Promise((resolve,reject)=>{
            this.dict.spellSuggest(word,(err,correct, sugestion, originalWord)=>{
                if(err){
                    return reject(err);
                }
                return resolve({
                    correct: correct,
                    sugestion: sugestion,
                    originalWord: originalWord
                })
            });

        });
    }
}

export default SpellChecker;

