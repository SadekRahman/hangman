//event listener needed for click on "Begin" to initate Game
runGame();

//variables from HTMl page
let chosenWord = "";
let guesses = [];
let incorrectGuesses = 0;
let guessWeight = null;

//array of words
let words = [
    "Arsenal",
    "Manchester United",
    "Manchester City",
    "Leicester",
    "Chelsea",
    "Tottenham",
    "Aston Villa",
    "Wolves",
    "Liverpool",
    "Dwayne Johnson",
    "Robert Downey Jr",
    "Chris Hemsworth",
    "Chris Evans",
    "Scarlett Johansen",
    "Al Pacino",
    "Cilian Murphy",
    "London",
    "Madrid",
    "Paris",
    "Washington D.C",
    "Moscow",
    "Beijing",
    "Mumbai",
    "Dhaka",
    "Berlin"
]
//array of corresponding clues
let clues = [
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Actor",
    "Actor",
    "Actor",
    "Actor",
    "Actress",
    "Actor",
    "Actor",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
]
//storing of letters
let correctLetters = [];
let incorrectLetters = [];
//decalred variable for chosen word/hint
let chosenWord;
let chosenCLue;

//choosing the random word with clue
function randomWord(words,clues) {
    randomNumber = Math.floor(Math.random());
    chosenWord = randomNumber * words.length;
    chosenCLue = randomNumber * clues.length;
    alert(chosenWord,chosenCLue);


   // showWord();
  }

//generating an interactive keyboard
function generateKeyboard() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
    <button id = '${letter}'
    onClick = 'decideChoice("${letter}') >
    ${letter}
    </button>
    `).join('');
    document.getElementById("keyboard").innerHTML = buttonsHTML;
}

//showing the chosen word   
function showWord(chosenCLue,chosenWord) {
    guessWeight = chosenWord.split('').map(letter => (guesses.indexOf(letter) >= 0 ? letter : "_")).join('');
    document.getElementById("wordFocus").innerHTML = guessWeight;

    //show clue
    $('#clue').innerHTMl(`<p>Clue: ${chosenCLue}</p>`);
}
function runGame (){
randomWord();
generateKeyboard();
showWord();
}