import nodehun from 'nodehun';
import fs from 'fs';
import Promise from 'promise';

const encoding = require('encoding');

class SpellChecker {
    constructor(){
        let affBuff = fs.readFileSync(new Buffer(__dirname+'/dic/hunspell/pt_BR.aff'));
        let dicBuff = fs.readFileSync(new Buffer(__dirname+'/dic/hunspell/pt_BR.dic'));
        this.dict = new nodehun(affBuff,dicBuff);
    }

    checkWord(word, callback){
        this.dict.spellSuggestions(word,callback);
    }

}

export default SpellChecker;