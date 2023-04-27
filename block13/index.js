// Is Truthy

// Create values
let value = "i am a string";

// test values for truthy
if (Boolean(value) === true) {
    // display true 
    console.log("true");
    // else value is falsy
} else if (value === false) {
    console.log("The boolean value false is falsy");
} else if (value === null) {
    console.log("The null value is falsy");
} else if (value === undefined) {
    console.log("undefined is falsy");
} else if (value === 0) {
    console.log("The number 0 is falsy (the only falsy number)");
} else if (value === "") {
    console.log("The empty string is falsy (the only falsy string)");
}


// Number Line

// Create variables 
let num1 = -5;
let num2 = 0;

// Get the sume of the variables 
let sum = num1 + num2;

// test sum is less than -1000
if (sum < -1000) {
    // display sum is less than -1000
    console.log(sum + " is less than -1000");

    // test if sum is less than 0 but greater than 1000
} else if (sum < 0 && sum >= -1000) {

    // display sum is a negative number
    console.log(sum + " is a negative number");
    // test if sum is equal to zero
} else if (sum == 0) {

    // display sum is equal to 0
    console.log(sum + " is equal to 0");

    // test if sum is greater than 0 but less than 100
} else if (sum > 0 && sum < 100) {
    // display sum is larger that 0
    console.log(sum + " is larger than 0");

    // test if sum is greater than 100
} else if (sum > 100) {

    // display sum is larger than 100
    console.log(sum + " is larger than 100");
}


// Greater Than 5

// create variables 
let num3 = 10;
let num4 = 11;

// Test to see if both variables are greater than or equal to 5
if (num3 >= 5 && num4 >= 5) {
    // display true
    console.log("true");
} else {
    // display false
    console.log("false");
}

// Pair and compare

// create variables
let [param1A, param1B, param2A, param2B] = [ 0, false, "horse", "horse"];

// test variables for truthy 
if ((param1A === param1B) || (param2A === param2B)){
    // display true 
    console.log("true");
}else {
    // display false
    console.log("false");
}




console.log(Boolean(null));