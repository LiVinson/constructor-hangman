//packages/built in node methods
var fs = require("fs");
var inquirer = require("inquirer");

//Global Variables
var wordBank=["cat", "dog", "bird", "monkey"];
var guessWord;
var noGuesses = 6;

var index = Math.floor(Math.random() * wordBank.length);
guessWord = wordBank[index];
var guessObj = new CreateWord(guessWord);

function CreateWord(word){
    //Determine what properties are needed in constructor for word


};

function Letters(){

    //Determine what properties are needed in constructor for letters
};

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
            
    