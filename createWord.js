var Letters = require("./createLetters.js"); //Determine if this is needed...


//Constructor for word to be guessed - to be moved to seperate file
var CreateWord = function(word) {
    this.word = word;
    this.letterArr =new Array();
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
            // console.log(holderArr);
        });
        this.letterArr = holderArr;
    };

    //Method to display letters or dashes for each letter in word
    this.displayWord = function () {
        var wordDisplay = "";
        (this.letterArr).forEach(function (letterObj) {

            wordDisplay += letterObj.display;
            // if (letterObj.guessed) {
            //     wordDisplay += letterObj.letter;
            // } else {
            //     wordDisplay += letterObj.blank;
            // }
        })
        return wordDisplay;
    };

    this.compareGuess = function (answer) {
        console.log("compareGuess function!");
        console.log(answer.userGuess);

        this.letterArr.forEach(function (item) {
            if (item === answer.userGuess) {
                item.guessed = true;
            };

        });
        noGuesses--;
        // this.displayWord();
        // playGame(this);
    }
};

// var testWord = new CreateWord("CAT");
// console.log(testWord);
// console.log(testWord.letterArr);
// console.log(testWord.guessed);
// testWord.addLetters(this.word);
// console.log(testWord.letterArr);



module.exports= CreateWord;