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
}

export default SpellChecker;

