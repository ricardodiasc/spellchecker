import SpellChecker from './spellchecker';

describe('Check the conversion from callbacks to promise', ()=>{
    let spellChecker = new SpellChecker();
    it('Check if word teste in portuguese and should be correct', ()=>{
        spellChecker.checkWord('teste').then((theResult)=>{
            expect(theResult.correct).toBeTruthy();
        });
    });

    it('Check word test in portuguese and should not be correct', ()=>{
        spellChecker.checkWord('test').then((result)=>{
            expect(result.correct).toBeFalsy();
        });
    });

    
});
