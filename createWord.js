var Letters = require("./createLetters.js"); //Determine if this is needed...


//Constructor for word to be guessed
var CreateWord = function (word) {
    this.word = word;
    this.solved = false;
    this.letterArr = [];
    this.noGuesses = 6;
};

//Adds methods on constructor prototype property

//Called once word is chosen; creates an array of letter objects
CreateWord.prototype.createArr = function () {
    var arr = this.word.split("");
    for (var i = 0; i < arr.length; i++) {
        var newLetter = new Letters(arr[i]);
        newLetter.specChars(); //Changes guessed value to true if character is not a letter (display spaces and special characters)
        this.letterArr.push(newLetter);
    };

};

//Method to display letters or dashes for each letter in word
CreateWord.prototype.displayWord = function () {
    var wordDisplay = "";
    this.letterArr.forEach(function (letterObj) {

        if (letterObj.guessed) {
            wordDisplay += letterObj.letter;
        } else {
            wordDisplay += letterObj.blank;
        }
    });
    console.log(`\n${wordDisplay}\n`);

};

//Called once user provides valid guess. Checks if there is a match to any of the letter objects
CreateWord.prototype.compareGuess = function (answer) {
    var userGuess = (answer.userGuess.toUpperCase());
    var match = false;
    for (var k = 0; k < this.letterArr.length; k++) {
        if (this.letterArr[k].letter.toUpperCase() === userGuess) {
            this.letterArr[k].guessed = true; //Will result in letter displaying instead of blank
            match = true;
        }
    };

    if (match === false) {
        console.log("\nWRONG!");
        this.noGuesses--; //Decrement guesses
    } else {
        console.log("\nCORRECT!");

    }
};
//Function called to determine if word is solved and game should end or continue
CreateWord.prototype.checkSolved = function () {

    for (var j = 0; j < this.letterArr.length; j++) {
        if (this.letterArr[j].guessed === false) {
            return false;
        }
    };
    this.solved = true;
    return true;
};

module.exports = CreateWord;