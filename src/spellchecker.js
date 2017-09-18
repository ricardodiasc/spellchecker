import nodehun from 'nodehun';
import fs from 'fs';

class SpellChecker {
    constructor(){
        let affBuff = fs.readFileSync(__dirname+'/dic/hunspell/pt_BR.aff');
        let dicBuff = fs.readFileSync(__dirname+'/dic/hunspell/pt_BR.dic');
        this.dict = new nodehun(affBuff,dicBuff);

    }

    check(word, callback){
        this.dict.spellSuggest(word,callback);
    }

    checkWord(word){
        let resolve = this.check.bind(this);
        let c =  new Promise(resolve);
        return c;
    }
}

export default SpellChecker;

