/**
 * Write a function that determines whether a number is
 * a narcissistic number. Return true if it is and
 * false if it isn't.
 */

// needs to be an array before I map it

let initialNumber = prompt("Please enter a number", "153");

let splitArray = initialNumber.split("")

function narcissify(num) {
    let arrayCount = splitArray.length;
    let intArray = parseInt(num);
    return Math.pow(intArray, arrayCount);
}

function addItUp(x, y) {
    x[0] = x[0] + y;
    // console.log(x[0]);
    // console.log(x);
    return x;
}

function compare(finalNumber) {
    // console.log(typeof(finalNumber));
    // console.log(typeof(initialNumber));
    if (finalNumber === parseInt(initialNumber)) {
        return true;
    } else {
        return false;
    }
}

function flip(snowball, snowflake) {
    return true;
}

let narcissusCheck = splitArray.map(narcissify).reduce(addItUp, [0]).filter(compare).reduce(flip, false);
console.log(narcissusCheck);