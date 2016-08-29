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
    return wordArray[randomNumber];
}

/**
 * returns the number of guesses the user gets based on the word 
 * that's passed in.
 * 
 * 
 */

function numGuesses(chosenWord) {

}