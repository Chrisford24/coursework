// create a customer object

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com", 
    phone: undefined, 
    zipCode: "631", 
    favoriteFlavors: 32,
    cupSize: "medium", 
    favoriteStore: "Target", 
    firstVisit: false
}

console.table(customer);

// modify the mistakes
customer.email = "jak3Smith1992@email.com";
customer.phone = 3195551234;
customer.zipCode = "63132";
customer.favoriteFlavors = ["coffe", "Strawberry", "matcha"];
console.table(customer);

// delete keys from the object
delete customer["zipCode"];
delete customer["favoriteStore"];
console.table(customer);

// add keys to the object
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;
console.table(customer);

// display the new object
console.log(Object.keys(customer));




