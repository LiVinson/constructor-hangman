//Create a letter object for each letter in the chosen word using letter Constructor

var Letters = function (newChar) {
    this.letter = newChar;
    this.blank = "_ ";
    // this.display = this.blank;

    
    this.guessed = false;

   this.specChars = function(){
    if (!this.letter.replace(/\s/g, '').length || !this.letter.match(/^[A-Za-z]+$/) ) {
        // string only contained whitespace (ie. spaces, tabs or line breaks)
    this.guessed = true;
    }
   }
};



module.exports = Letters;