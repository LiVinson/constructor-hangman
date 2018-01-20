//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");
var CreateWord = require("./createWord.js");
var Letters = require("./createLetters.js"); //Determine if this is needed...


//Global Variables

var wordBank = ["Kendrick Lamar", "J. Cole", "Chance the Rapper", "Logic", "Vic Mensa", "Lauryn Hill", "Wale", "Big Sean", "Childish Gambino", "Brockhampton"];
var guessWord;
var prevGuesses = [];


function newGame() {
    inquirer.prompt([{
        name: "newGame",
        type: "confirm",
        message: "Welcome to Hip-Hop Hangman! Can you guess some of my favorite rappers?",
        default: true,

    }]).then(function (answer) {
        if (answer.newGame) {
            console.log("Great! Let's play!\n");
            newWord(wordBank);
        } else {
            console.log("Okay, maybe next time.");
            return;
        }
    })
};

function newWord(guessArr) {
    var index = Math.floor(Math.random() * wordBank.length); //Pick a word at random from the wordbank array
    guessWord = guessArr[index];
    
    var guessObj = new CreateWord(guessWord); //Create a word object, 
    guessObj.createArr(); //Creates array inside of word object holding letter objects
    playGame(guessObj); //Pass word object into playGame function
};

function playGame(wordObj) {
    // console.log("Play game function!");
    // console.log(`The word to guess is ${wordObj.word}`);
    wordObj.displayWord();
    // wordObj.displayWord();
    if (wordObj.checkSolved()){
        endGame("won", wordObj.word);
    } else if (wordObj.noGuesses < 1) {
        console.log("You have no more guesses!");
        endGame("lost", wordObj.word);
    } else {
        // console.log(`You have ${wordObj.noGuesses} guesses remaining!`);
        // wordObj.displayWord();
       
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: `Please guess a letter using your keyboard. You have ${wordObj.noGuesses} remaining!`,
            validate: function (userPress) {
                console.log(`\nUser chose: ${userPress}`);
                //Regular expression - Used to validate if input is a letter
                if (userPress.match(/^[A-Za-z]+$/)) {
                    if (prevGuesses.indexOf(userPress) === -1) {
                        prevGuesses.push(userPress.toUpperCase());
                        return true;
                    }
                    return `You already guessed ${userPress}. Please select another letter.`;
                }
                return "Please select a letter A - Z";
            }
        }]).then(function (answer) {
            wordObj.compareGuess(answer);
            playGame(wordObj);
        })


    }
};

function endGame(outcome, word) {
    console.log("end game!");
    if (outcome == "won"){
        console.log(`You got it! The answer is ${word}`);
        
    } else {
        console.log(`You're out of guesses! The correct answer is ${word}`);
    };

    inquirer.prompt([{
        type: "confirm",
        name: "replay",
        message: "Would you like to play again?"
    }]).then(function(answer){
        if (answer.replay){
            newWord(wordBank);
        };
        console.log("Thanks for playing!");
    })

};

//CODE TO RUN:
newGame();


//Next Steps:

//Add to portfolio
//Update ReadMe
