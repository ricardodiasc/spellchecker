import SpellChecker from '../spellchecker';

describe('Check the conversion from callbacks to promise', ()=>{
    
    it('Check if word teste in portuguese and should be correct', ()=>{
        let spellChecker = new SpellChecker();
        spellChecker.check('teste').then((theResult)=>{
            expect(theResult.correct).toBeTruthy();
        });
    });

    it('Check word test in portuguese and should not be correct', ()=>{
        let spellChecker = new SpellChecker();
        spellChecker.check('test').then((result)=>{
            expect(result.correct).toBeFalsy();
        });
    });

    it('Check word and test the list of sugestions',()=>{
        let spellChecker = new SpellChecker();
        spellChecker.check('test').then((result)=>{
            expect(result.sugestion).toBe("test�");
        });
    })

    
});
