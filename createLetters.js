//Creates a letter object for each letter in the chosen word using letter Constructor

var Letters = function (newChar) {
    this.letter = newChar;
    this.blank = "_ ";
    this.guessed = false;
};

Letters.prototype.specChars = function () {
    if (!this.letter.match(/^[A-Za-z]+$/)) { //Checks if letter is a special character, and sets guessed to true so it displays
        this.guessed = true;
    }
};

module.exports = Letters;