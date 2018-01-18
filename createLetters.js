//Create a letter object for each letter in the chosen word using letter Constructor

var Letters = function(newChar) {
    this.letter = newChar;
    if (newChar.match(/^[A-Z]+$/)) {
        this.blank = "_ ";
        this.guessed = false;//Change to true if user key = this.letter
        this.display = this.blank; //If this.guessed is true, change display to this.letter
    }else if (newChar = " "){
        this.guessed = true;
        this.display = this.letter;
    }
    
};

module.exports= Letters;
