//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");

//Global Variables
var wordBank = ["cat", "dog", "bird", "monkey"];
var guessWord;
var noGuesses = 6;
var prevGuesses = ["q", "s"];


function newGame() {
    inquirer.prompt([{
        name: "newGame",
        type: "confirm",
        message: "Welcome to Hangman! Would you like to play?",
        default: true,

    }]).then(function (answer) {
        if (answer.newGame) {
            console.log("great!");
            var index = Math.floor(Math.random() * wordBank.length);
            guessWord = wordBank[index]; //global
            var guessWordObj = new CreateWord(guessWord);
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

    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Please guess  letter using your keyboard:",
        validate: function(userPress) {
            console.log(`User chose: ${userPress}`);
            //Regular expression - Used to validate if input is a letter
            if (userPress.match(/^[A-Za-z]+$/)) {
                console.log("Your guess is a letter");
                prevGuesses.indexOf(userPress)
                if (prevGuesses.indexOf(userPress)===-1) {
                    return true;
                }
                return `You already guessed ${userPress}. Please select another letter`;
            }; 
            return "Please select a letter A - Z";
        }
    }]).then(compareGuess(answer.userGuess));

};

function compareGuess(){




};

//Constructor for word to be guessed - to be moved to seperate file
function CreateWord(word) {
    this.word = word;
    this.blanks=function(this){
        //for each character in the string "word", check if it is a letter or a string
        //if a letter, replace with a "_ "
        //if a space, leave as is
        //return _ _ _

    };
    this.guessed=false; 

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