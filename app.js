
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
    let randomNumber = Math.floor(Math.random()* wordArray.length);
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

window.addEventListener('load', function() {
    let parent = document.querySelector("#game");
    let wordToGuess = pickWord(possibleWords);
    let template = document.querySelector("#game-template").innerHTML;
    let rows = document.createElement('section');
    rows.innerHTML = Mustache.render(template, { wordToGuess: wordToGuess });
    parent.appendChild(rows);
    // let inputValue = document.querySelector("#input").value;
    let button = document.querySelector('button');
    button.addEventListener('click', function() {
        let inputValue = document.querySelector("#input").value;
        let paragraph = document.querySelector("p");
        console.log(inputValue);
        for (let i = 0; i < wordToGuess.length; i++) {
            if (inputValue === wordToGuess[i]) {
                paragraph.classList.remove("transparent");
            }
        }
    });
});

