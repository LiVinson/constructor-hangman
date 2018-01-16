//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");

//Global Variables
var wordBank = ["cat", "dog", "bird", "monkey"];
var guessWord;
var noGuesses = 6;
var prevGuesses = [];


function newGame() {
    inquirer.prompt([{
        name: "newGame",
        type: "confirm",
        message: "Welcome to Hangman! Would you like to play?",
        default: true,

    }]).then(function(answer) {        
        if (answer.newGame) {
            console.log("great!");
            var index = Math.floor(Math.random() * wordBank.length);
            guessWord = wordBank[index]; //global
            console.log(guessWord);
            return;
            // var guessWordObj = new CreateWord(guessWord);
            // playGame(guessWordObj);
        };
        console.log("Okay, maybe next time.")

  })
};


function playGame(word) {

    //Decide what to console. log

    inquirer.prompt([{
        name: "userGuess",
        message: "Please guess a letter using your keyboard",
        type: "input",
        validate: function (value) {
            //Regular expression - Used to validate if input is a letter
            value = value.match(/^[A-Za-z]+$/);
            console.log(value); //If there is a match, should return that letter in an array or returns null (no match)

            if (value) {
                console.log("Your guess is a letter");
                if (prevGuesses.indexOf(value)) {
                    return `You already guessed ${value}. Please select another letter`
                }
                return true;

            } else {
                console.log("Your guess is not a letter");
                return "Please select a letter A - Z";
            }
        }
    }]).then(function (answer) {
        console.log(answers);
    })

}

function CreateWord(word) {
    //Determine what properties are needed in constructor for word


};

function Letters() {

    //Determine what properties are needed in constructor for letters
};

//CODE TO RUN:
newGame();

//Inquirer:

//question 1:
// message: Welcome to Hangman! Guess a letter using your keyboard
//type: input
//Validation:
//Confirm it is a letter
//Make it capital
//Check if already guessed
//


//PseudoCode

//A word is chosen at random from the word database

//Dashes are displayed for each letter in the word

//User is prompted to guess a letter
//Validate that it is a letter.
//Make it capital

//Check if it was previously chosen.
// If so, prompt another letter
//If not, check if that letter is contained in the word

//If yes, display that letter
//Check if all letters are chosen:
//If yes: congratulate user, ask to play again

//If no, prompt user to choose another letter

//If no, decrease # of guesses remaining,
//If # of guesses = 0: Tell user they lost, display correct word.

//If # of guesses remaining is greather than 0, prompt user for another guess