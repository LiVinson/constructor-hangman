//Creates a letter object for each letter in the chosen word using letter Constructor

var Letters = function (newChar) {
    this.letter = newChar;
    this.blank = "_ ";
    this.guessed = false;
};

Letters.prototype.specChars = function () {
    if (!this.letter.match(/^[A-Za-z]+$/)) {
    // if (!this.letter.replace(/\s/g, '').length || !this.letter.match(/^[A-Za-z]+$/)) { //If character has a length of 0 (false) after removing (i.e. a space) or if not a match to letters
        // string only contained whitespace (ie. spaces, tabs or line breaks)
        this.guessed = true;
    }
};

module.exports = Letters;