function hangPerson(dictionary) {
  this.dictionary = dictionary;
  this.secretWord = this.randomWord();
  this.currentGuess = this.secretWord.replace(/./g, '_');
  this.successfulGuesses = [];
  this.guessesRemaining = 8;
}

hangPerson.prototype = {
  randomWord: function() {
    return this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
  },
  createNewDisplayWord: function() {
    var re = new RegExp('[^' + this.successfulGuesses.join() +']', 'g');
    this.currentGuess = this.secretWord.replace(re, '_');
  },
  guess: function(letter) {
    this.checkGuess(letter);
    // If lost
    // If won
    if(this.currentGuess == this.secretWord){
      return "You win!";
    }
  },
  checkGuess: function(letter) {
    // TODO: ensure it's just a letter and not more of the word
    if(this.unsuccessfulGuess(letter)){
      this.guessesRemaining -= 1;
      // if doesn't exist
      return false;
    } else {
      this.successfulGuesses.push(letter);
      this.createNewDisplayWord();
    }
  },
  unsuccessfulGuess: function(letter) {
    return this.secretWord.indexOf(letter) == -1;
  },
  displayWord: function() {
    console.log(this.secretWord);
    console.log(this.currentGuess);
    return this.currentGuess;
  }
};