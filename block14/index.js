// Question 1: Only odds

// Create a variable Array of numbers
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = []

// Loop through the Array 
for (let index = 0; index < myArray.length - 1; index++) {
    // Check each value in the Array to see if it a odd
    if (myArray[index] % 2 === 1) {
        newArray.push(myArray[index]);
    }
}
console.log(newArray);


// Question 2: Vowel vs Constant

// Create variables
const myArrayInput = "textbook";
const vowels = ["a", "e", "i", "o", "u"];
let consonantCount = 0;
let vowelCount = 0;

// loop through the string and check each character, if it's a vowel
for (let index = 0; index < myArrayInput.length; index++) {
    if (vowels.includes(myArrayInput[index])) {
        vowelCount++;
    } else {
        consonantCount++;
    }
}

// display to the screen
console.log(`${myArrayInput} has ${consonantCount} consonants and ${vowelCount} vowels`);


// Question 3: Reverse Array

// create variables 
const inputArray = [1, -1, 2, -3, 5, -8, 13];
const answer = [];

// loop through backwards throught the array and add to new array
for(let index=inputArray.length - 1; index >= 0 ; index--){
    answer.push(inputArray[index]);
}

console.log(answer);


// Question 4: FizzBuzz

// go from 1 to 100 displaying number and check if current number is a multiple of 3, 5 or both
for(let index=1; index <= 100; index++){
    if(index % 3 == 0 && index % 5 == 0){
        console.log("FizzBuzz");
    }else if(index % 3 == 0){
        console.log("Fizz");
    }else if(index % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(index);
    }
}