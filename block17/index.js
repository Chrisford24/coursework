const coffee_data = require("./coffee_data.js");

// 2. print out all the drinks on the menu
coffee_data.forEach(word => console.log(word.name));

// 3. Print an array of drinks that cost 5 and under.
const result = coffee_data.filter(drinksUnderFive);

function drinksUnderFive(items){
    return items.price <= 5
}
console.table(result);

// 4. Print an array of drinks that are priced at an even number.
const result1 = coffee_data.filter(drinksPricedEven);
function drinksPricedEven(items){
    return items.price % 2 == 0;
}
console.table(result1);

// 5. Print the total if you were to order one of every drink.
const sum = coffee_data.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0,);
console.log(sum);

// 6. Print an array with all the drinks that are seasonal.
const result2 = coffee_data.filter(seasonalDrinks);
function seasonalDrinks(items){
    return items.seasonal;
}
console.table(result2);

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const result3 = coffee_data.filter(seasonalDrinks);
function seasonalDrinks(items){
    return items.seasonal;
}
result3.forEach(word => console.log(`${word.name} with imported beans`))