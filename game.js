//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");
var CreateWord = require("./createWord.js");
var Letters = require("./createLetters.js"); //Determine if this is needed...


//Global Variables
var wordBank = ["CAT", "DOG", "BIRD", "MONKEY"];
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
            console.log("Great! Let's play!\n");
            var index = Math.floor(Math.random() * wordBank.length); //Pick a word at random from the wordbank array
            guessWord = wordBank[index]; //global
            // console.log(guessWord);
            var guessObj = new CreateWord(guessWord); //Create a word object, 

            guessObj.addLetters(); //Creates array inside of word object holding letter objects

            playGame(guessObj); //Pass word object into playGame function
            return; //determine if this is needed;
        } else {
            console.log("Okay, maybe next time.");
        }
    })
};


function playGame(wordObj) {
    console.log("Play game function!");
    console.log(`The word to guess is ${wordObj.word}`);
    // console.log(`Guesses Remaining: ${noGuesses}`);
    if (noGuesses < 1) {e
        console.log("You have no more guesses!")
        endGame();
    } else {

        console.log("");
        console.log(wordObj.displayWord()); //  Display dashes for word
        console.log(`Guesses Remaining: ${noGuesses}`);
        //     //Display guesses remaining
        console.log("-----------------------");
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
        }]).then(function () {
            console.log("Question Received!"); //wordObj.compareGuess);
        })
    }
};


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