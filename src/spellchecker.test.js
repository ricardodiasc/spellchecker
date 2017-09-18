import SpellChecker from './spellchecker';

describe('Verifica funcionamento do spellchecker', ()=>{
    
    it('Não deve apresentar erro de validação para portugues.',()=>{
        let spellChecker = new SpellChecker();   
        let callback = (err,correct, suggestion,originalWord)=>{
            console.log(err, correct, suggestion,originalWord);
            expect(suggestion).toBeDefined();
        } 
        let response = spellChecker.check('teste', callback);
    });

    it('Should use promisse instead of callback', ()=>{
        let spellChecker = new SpellChecker();   
        spellChecker.checkWord('teste').then((err, correct, sugestion, originalWord)=>{
            expect(correct).toBeTruthy();
        });
    });
});
