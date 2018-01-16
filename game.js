//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");
var Word; //= require("./createWord.js")
var Letter; //=require("./createLetter.js")


//Global Variables
var wordBank = ["cat", "dog", "bird", "monkey"];
//J Cole, Kendrick Lamar, Chance the Rapper, Russ, Logic, Vic Mensa,

var guessWord;
var noGuesses = 6;
var prevGuesses = [];


function newGame() {
    inquirer.prompt([{
        name: "newGame",
        type: "confirm",
        message: "Welcome to Hangman! Would you like to play?",
        default: true,

    }]).then(function (answer) {
        if (answer.newGame) {
            console.log("great, let's play!");
            var index = Math.floor(Math.random() * wordBank.length); //Pick a word at random from the wordbank array
            guessWord = wordBank[index]; //global
            var guessWordObj = new CreateWord(guessWord); //Create a word object, and pass to playGame function
            playGame(guessWordObj);
            return;
        } else {
            console.log("Okay, maybe next time.");
        }
    })
};


function playGame(wordObj) {
    console.log("Play game function!");
    console.log(`The word to guess is ${wordObj.word}`);
       
    //  Display dashes for word
    //Display guesses remaining
console.log("-----------------------")
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Please guess  letter using your keyboard:",
        validate: function (userPress) {
            console.log(`\nUser chose: ${userPress}`);
            //Regular expression - Used to validate if input is a letter
            if (userPress.match(/^[A-Za-z]+$/)) {
                console.log("Your guess is a letter");
                prevGuesses.indexOf(userPress)
                if (prevGuesses.indexOf(userPress) === -1) {
                    return true;
                }
                return `You already guessed ${userPress}. Please select another letter`;
            };
            return "Please select a letter A - Z";
        }
    }]).then(compareGuess);

};

var compareGuess = function(letter){
    console.log("compareGuess function!");
    console.log(letter.userGuess);

    //Determine if letter entered is part of word

    //If yes: Update the display with letter replacing dashes. Prompt user to guess again
    //If no, reduce guesses by 1
    //If guesses>0, prompt user to guess again
    //If guesses=0, endGame();
}


function endGame() {
    //if solved:
    //Congrats!

    //If not solved:
    //You lost:
    //Display correct answer

    //Display info about word
    //Ask user to play again. 
    //If yes: newGame();
    //If no: return
};

//Constructor for word to be guessed - to be moved to seperate file
function CreateWord(word) {
    this.word = word;
    this.letterArr = [];

    this.addLetters = function (word) {
        var arr = word.split();
        arr.forEach(function (char) {
            this.letterArr.push(new Letters(char));
        })

    };

    this.guessed = false;

    this.displayWord = function () {
        var wordDisplay = "";
        (this.letterArr).forEach(function (letterObj) {
            if (letterObj.guessed) {
                wordDisplay += letterObj.letter;
            } else {
                wordDisplay += letterObj.blank;
            }
        })
        return wordDisplay;
    }
};

//Create a letter object for each letter in the chosen word using letter Constructor

function Letters(newChar) {
    this.guessed = false;

    if (newChar.match(/^[A-Z]+$/)) {
        this.letter = newChar;
        this.blank = "_ "
    };
    //Determine what properties are needed in constructor for letters
};

//CODE TO RUN:
newGame();


//Next Steps:
//Determine properties needed in Word
//Determine properties needed in Letter
//Determine how to run game
//Determine how to run game w/ spaces
//Determine how to end game
//Choose theme, update array - Hip Hop Hangman
//Move constructors to new files
//Update ReadMe
//Add to portfolio