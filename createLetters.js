//Create a letter object for each letter in the chosen word using letter Constructor

var Letters = function (newChar) {
    this.letter = newChar;
    this.blank = "_ ";
    this.display = this.blank;
    this.guessed = false;

    this.firstDisplay = function () {
        if (this.letter = " ") {
            this.guessed = true;
            this.blank = "  ";
            console.log("First display!");
        }
    };

    this.displayLetter = function () {
        // if (this.letter.match(/^[A-Z]+$/)) { //If char is a letter

        //     this.guessed = false; //Change to true if user key = this.letter
        // } else
        //  if (this.letter = " ") {
        //     this.guessed = true;
        //     this.blank = "  ";
        // this.display = this.letter;
    } //Add logic for characters that are not letters or blanks (i.e. apostrophe)
    if (this.guessed === true) {
        this.display = this.letter;
    // } else {
    //     this.display = this.letter;
    // }
}

};

module.exports = Letters;