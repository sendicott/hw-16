
let possibleWords = ["coat", "knee", "arithmetic", "order", "chicken", "skin", "stick", "trick", "zebra", "hospital", "week", "creature"];

/**
 *  returns a random word from an array of possible words
 * 
 * 1. Receive one parameter, which is an array of words
 * 2. Run math random
 * 3. Limit math random to length of array
 * 4. return that number index from array
 * 
 * @param { Array } wordArray - list of words to be chosen from
 * @returns { String } the word chosen from the array
 */

function pickWord(wordArray) {
    let randomNumber = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomNumber].split("");
}

/**
 * returns the number of guesses the user gets based on the word 
 * that's passed in.
 * 
 * 1. return 9
 * 
 * @param { String } chosenWord - word to be guessed, currently 
 *      does not impact function
 * @returns { Number } number of wrong guesses allowed to user
 */

function numGuesses(chosenWord) {
    return 9;
}

// Goal: modify the DOM
function render(word, listOfWrongs) {
    let parent = document.querySelector("#game");
    let template = document.querySelector("#game-template").innerHTML;
    parent.innerHTML = Mustache.render(template, {
        wordToGuess: word,
        graveyard: listOfWrongs,
        lives: numGuesses() - listOfWrongs.length
    });
}

window.addEventListener('load', function () {
    let wordToGuess = pickWord(possibleWords);
    console.log(wordToGuess);
    let wrongGuessArray = [];
    let rightGuessArray = [];
    render(wordToGuess, wrongGuessArray);

    let button = document.querySelector('button');
    button.addEventListener('click', function () {
        let inputValue = document.querySelector("#input").value;
        if (wrongGuessArray.indexOf(inputValue) !== -1 || rightGuessArray.indexOf(inputValue) !== -1) {
            console.log("You've already guessed that");
            document.querySelector("#input").value = "";
            return
        }

        let check = false;
        for (let i = 0; i < wordToGuess.length; i++) {
            if (inputValue === wordToGuess[i]) {
                rightGuessArray.push(inputValue);
                check = true;
                console.log("Right Guesses: " + rightGuessArray);
            }
        }
        if (check === false) {
            wrongGuessArray.push(inputValue);
            console.log("Wrong Guesses: " + wrongGuessArray);
        }
        check = false;

        if (wrongGuessArray.length >= 9) {
            console.log("You lose");
        }

        if (rightGuessArray.length === wordToGuess.length) {
            console.log("You win");
        }

        render(wordToGuess, wrongGuessArray);
        let paragraph = document.querySelectorAll(".letter");

        for (let i = 0; i < wordToGuess.length; i++) {
            for (let j = 0; j <rightGuessArray.length; j++) {
                if (rightGuessArray[j] === wordToGuess[i]) {
                    paragraph[i].classList.remove('transparent');
                }
            }
        }
        document.querySelector("#input").value = "";
    });
});