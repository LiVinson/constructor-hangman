var Letters = require("./createLetters.js"); //Determine if this is needed...


//Constructor for word to be guessed - to be moved to seperate file
var CreateWord = function (word) {
    this.word = word;
    this.letterArr = new Array();
    this.guessed = false;

    //Takes in the guessword, splits each character into array, calls Letters function, pushes result into this.array
    this.addLetters = function () {
        // console.log(this.word);
        var arr = this.word.split("");
        // console.log(arr);
        var holderArr = [];
        arr.forEach(function (char) {
            // console.log(char);
            var newLetter = new Letters(char);
            // console.log(newLetter);
            holderArr.push(newLetter);
            
        });
        this.letterArr = holderArr;
        console.log(this.letterArr);
        this.letterArr.forEach(function(char){
            char.firstDisplay();
        })
        // console.log(this.letterArr);
    };

    //Method to display letters or dashes for each letter in word
    this.displayWord = function () {
        var wordDisplay = "";
        // console.log(this.letterArr);
        (this.letterArr).forEach(function (letterObj) {
            letterObj.displayLetter();
            wordDisplay += letterObj.display;
            // if (letterObj.guessed) {
            //     wordDisplay += letterObj.letter;
            // } else {
            //     wordDisplay += letterObj.blank;
            // }
        })
        return wordDisplay;
    };

    this.compareGuess = function (wordObj, answer) {
        console.log("compareGuess function!");
        var userGuess = (answer.userGuess.toUpperCase());
        console.log(userGuess);
        // prevGuesses.push(userGuess);
        // console.log(prevGuesses);
        console.log(this);
        console.log(this.letterArr);
        this.letterArr.forEach(function(char) {

            if (char.letter === userGuess) {
                char.guessed = true;
                char.displayLetter();
                console.log(char.display);
            };

        });
        noGuesses--;
        playGame(this);
    }
};

// var testWord = new CreateWord("CAT");
// console.log(testWord);
// console.log(testWord.letterArr);
// console.log(testWord.guessed);
// testWord.addLetters(this.word);
// console.log(testWord.letterArr);


// var testWord = new CreateWord("DOG");
// testWord.addLetters();
// console.log((testWord.displayWord(testWord.letterArr)));


module.exports = CreateWord;