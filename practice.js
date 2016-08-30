/** 
 * Write a function that returns the names of
 * all foods that can be eaten by someone who 
 * is vegetarian with a gluten allergy
*/

let foods = [
    { name: 'Toaster Streudel', vegetarian: true, glutenFree: false },
    { name: 'Chicken Salad', vegetarian: false, glutenFree: true },
    { name: 'French Fries', vegetarian: true, glutenFree: true }
];

function makesTheCut(items) {
    if (items.vegetarian === true && items.glutenFree === true) {
        return true;
    } else {
        return false;
    }
}

function fineTuning(objects) {
    return objects.name;
}

let narrowMenu = foods.filter(makesTheCut).map(fineTuning);
console.log(narrowMenu);