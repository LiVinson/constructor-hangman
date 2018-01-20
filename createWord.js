var Letters = require("./createLetters.js"); //Determine if this is needed...


//Constructor for word to be guessed - to be moved to seperate file
var CreateWord = function (word) {
    this.word = word;
    // this.letterArr = new Array();
    this.solved = false;

    this.letterArr = [];

    this.noGuesses = 6;


    //Takes in the guessword, splits each character into array, calls Letters function, pushes result into this.array
    this.createArr = function () {
        // console.log(this.word);
        var arr = word.split("");
        // console.log(arr);

        for (var i = 0; i < arr.length; i++) {
            if(arr[i] !== " "){

                
            }
            var newLetter = new Letters(arr[i]);
            newLetter.specChars();
            this.letterArr.push(newLetter);
        };

    };

    //Method to display letters or dashes for each letter in word
    this.displayWord = function () {
        // console.log(arr);
        var wordDisplay = "";
        // console.log(this.letterArr);
        this.letterArr.forEach(function (letterObj) {

            if (letterObj.guessed) {
                wordDisplay += letterObj.letter;
            } else {
                wordDisplay += letterObj.blank;
            }
        })
        console.log(`\n${wordDisplay}\n`);

    };

    this.compareGuess = function (answer) {
        // console.log("compareGuess function!");
        var userGuess = (answer.userGuess.toUpperCase());
        // console.log(userGuess);
        var match = false;
        for (var k = 0; k < this.letterArr.length; k++){
            if (this.letterArr[k].letter.toUpperCase() === userGuess){
                console.log("Correct!");
                this.letterArr[k].guessed = true;
                match = true;
            }

        };

        if (match === false){
            console.log("No matches!")
            this.noGuesses--;
        };

        return match;
    };

    this.checkSolved = function(){
        // console.log("Check solved function!");

        for (var j = 0; j < this.letterArr.length; j++){
            if(this.letterArr[j].guessed === false){

                return false;
            }
        };

        this.solved = true;
        return true;
    }
};




module.exports = CreateWord;