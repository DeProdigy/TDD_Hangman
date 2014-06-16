describe('hangPerson', function(){
  var testDictionary = ['banana', 'ananas', 'mane', 'nate', 'nay', 'analog'];
  var hangMan = new hangPerson(testDictionary);

  it('should give me one of many words', function(){
    // hangPerson's word is one of many possible words
    expect(hangMan.dictionary).toContain(hangMan.secretWord);
  });

  it('should display all underscores when the word has not been guessed', function(){
    var displayWord = hangMan.displayWord();
    expect(displayWord.length).toEqual(hangMan.secretWord.length);
    // check that all the characters are underscores
    var allUnderscores = displayWord.split('').every(function(element){ return element == '_'; });
    expect(allUnderscores).toBe(true);
  });

  it('should display the guessed letter and all underscores', function(){
    hangMan.checkGuess('a');
    var displayWord = hangMan.displayWord();
    expect(displayWord.split('')).toContain('a');
    expect(displayWord.split('')).toContain('_');
  });

  it('should display all guessed letters and all underscores', function(){
    hangMan.checkGuess('a');
    hangMan.checkGuess('n');
    var displayWord = hangMan.displayWord();
    expect(displayWord.split('')).toContain('a');
    expect(displayWord.split('')).toContain('n');
    expect(displayWord.split('')).toContain('_');
  });

  it('should penalize you if you guess a wrong letter', function(){
    expect(hangMan.guessesRemaining).toEqual(8);
    hangMan.checkGuess('z');
    expect(hangMan.guessesRemaining).toEqual(7);
  });

  it('should tell you if you won or lost', function(){
    var hangMan = new hangPerson(['a']);
    var hangManOutput = hangMan.guess('a');
    expect(hangManOutput).toEqual('You win!');
  });
});


