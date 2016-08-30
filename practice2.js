/** 
 * Write a function that returns and array of 
 * strings that present the product name and 
 * price for all in stock items. In this case: 
 * ['Soap dispenser ($12.45)', 'Chainsaw blade ($41.45)']
 */

let products = [
    { name: 'Soap Dispenser', price: 12.45, inStock: true },
    { name: 'Chainsaw Blade', price: 41.45, inStock: true },
    { name: 'Bath Towel Warmer', price: 87.14, inStock: false },
];

function stockCheck(productArray) {
    if (productArray.inStock === true) {
        return true;
    } else {
        return false;
    }
}

function nameAndPrice(item) {
    return item.name + ": " + item.price;
} 

let stocked = products.filter(stockCheck).map(nameAndPrice);

console.log(stocked);