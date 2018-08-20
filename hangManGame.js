var animalWords = ["deer", "fox", "snake", "cow", "lion", "bobcat", "elephant", "horse", "whale", "shark", "eagle", "bigfoot"];



var guesses = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var startGame = "Start Game";
var usersguess = "";
var guessedLetters = [];
var WrongLetters = [];
var amountOfGuessLeft = "10";


function newGame() {
    var animalWords = ["deer", "fox", "snake", "cow", "lion", "bobcat", "elephant", "horse", "whale", "shark", "eagle", "bigfoot"];

    var randomAnimal = animalWords[Math.floor(Math.random() * animalWords.length)];


    var Wordanswer = [];
    for (var i = 0; i < randomAnimal.length; i++) {
        Wordanswer[i] = "_";
    }
    var remainingLetters = randomAnimal.length;
    while (remainingLetters > 0) {

        console.log(Wordanswer.join(" "));
        break
    }

}


newGame();