//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");
var CreateWord = require("./createWord.js");
var Letters = require("./createLetters.js"); //Determine if this is needed...

//Global Variables

var wordBank = ["Kendrick Lamar", "J. Cole", "Chance the Rapper", "Logic", "Vic Mensa", "Lauryn Hill", "Wale", "Big Sean", "Childish Gambino", "Brockhampton"];
var guessWord;
var prevGuesses = [];

//Functions

//Called when file is run
function newGame() {
    inquirer.prompt([{
        name: "newGame",
        type: "confirm",
        message: "Welcome to Hip-Hop Hangman! Do you want to try guessing some of my favorite rappers?",
        default: true,

    }]).then(function (answer) {
        if (answer.newGame) {
            console.log("\nGreat! Let's play!\n");
            newWord(wordBank);
        } else {
            console.log("Okay, maybe next time.");
            return;
        }
    })
};


//Called if user confirms play
function newWord(guessArr) {
    prevGuesses = [];
    var index = Math.floor(Math.random() * wordBank.length); //Pick a word at random from the wordbank array
    guessWord = guessArr[index];
    
    var guessObj = new CreateWord(guessWord); //Create a word object, 
    
    guessObj.createArr(); //Creates array inside of word object holding letter objects
    playGame(guessObj); //Pass word object into playGame function
};

//Called after word is chosen
function playGame(wordObj) {
    console.log("play Game function")
    wordObj.displayWord();

    if (wordObj.checkSolved()){
        endGame("won", wordObj.word);
    } else if (wordObj.noGuesses < 1) {
        console.log("You have no more guesses!");
        endGame("lost", wordObj.word);
    } else {
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: `Choose a letter. You have ${wordObj.noGuesses} guesses remaining!`,
            validate: function (userPress) {

                //Regular expression (RegExp) - Used to validate if input is a letter
                if (userPress.match(/^[A-Za-z]+$/)) {
                    if (prevGuesses.indexOf(userPress.toUpperCase()) === -1) {
                        prevGuesses.push(userPress.toUpperCase());
                        return true;
                    }
                    return `You already guessed ${userPress.toUpperCase()}. Please select a different letter.`;
                }
                return "Please select a letter A - Z";
            }
        }]).then(function (answer) {
            wordObj.compareGuess(answer);
            playGame(wordObj);
        })
    }
};

//Called once word is solved or guesses = 0
function endGame(outcome, word) {
    if (outcome == "won"){
        console.log(`You got it! The answer is ${word}`);
        
    } else {
        console.log(`You're out of guesses! The correct answer is ${word}\n`);
    };

    inquirer.prompt([{
        type: "confirm",
        name: "replay",
        message: "Would you like to play again?"
    }]).then(function(answer){
        if (answer.replay){
            newWord(wordBank);
        }else{
            console.log("Thanks for playing!");
        }
   
    })
};

//CODE TO RUN:
newGame();


//Next Steps:

//Add to portfolio
//Update ReadMe
