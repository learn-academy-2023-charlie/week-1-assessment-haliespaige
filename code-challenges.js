// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"




// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
//Function name: boilingPoint
// input: num1 (number datatype)
// output: string stating whether the input is below boiling point, at boiling point or above boiling point
// process: create a function called boilingPoint that takes in the variable at fahrenheit called num1 and returns a string that determines (conditional tool)
// if num1 is less than 212 then it is below boiling point
// if num1 is equal to 212 then it is at boiling point
// if num1 is greater thatn 212 then it is above boiling point

const temperature1 = 42 
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"


const boilingPoint = (num1) => {
    if (num1 < 212) {
    return `${num1} is below boiling point`
    }
    else if (num1 > 212) {
        return `${num1} is above boiling point`
    }
    else {
        return `${num1} is at boiling point`
    }
}

console.log(boilingPoint(temperature1))
//output: 42 is below boiling point

console.log(boilingPoint(temperature2))
//output: 350 is above boiling point

console.log(boilingPoint(temperature3))
//output: 212 is at boiling point





// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

// Name: combinedArrayLength
// input: const padres1984WorldSeriesRuns, const padres1998WorldSeriesRuns 
// output: length of array1 and array2 combined 
// process: create a new variable named combinedArrayLength that will combine the length of array1 and array2 and return a number datatype. (.length method)

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const combinedArrayLength = padres1984WorldSeriesRuns.length + padres1998WorldSeriesRuns.length

console.log(combinedArrayLength)
//output: 9





// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

// Name: reverseString
// input: currentCohort
// process: create a new variable named reverseString and set it equal to the const variable named currentCohort and use the following built in methods to work through - .split("") to separate each character then .reverse() to reverse the characters and finall .join("") to join each character back together.
// .split("")
    // output "C h a r l i e  2 0 2 3"
// . reverse()
    // output "3 2 0 2  e i l r a h C"
// .join("")
    //output "3202 eilrahC"        

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

//const reverseString = currentCohort.split("").reverse().join("")

//console.log(reverseString)
// output: "3202 eilrahC"

//OR

const reverseString = (backwards) => {
    return backwards.split("").reverse().join('')
}

console.log(reverseString(currentCohort))
// output: "3202 eilrahC"



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code: 

// We can use the accessor method .lastIndexOf to identify where in the index the givenVale is located. Because the accessor method is only pulling out information from the array and not actually changing the array itself, we are able to use the method directly in the console.log
// However I have also written a function:
// Name: location
// Input: num1 (given value)
// Output: the index location of the given value in the array numberOfConnections
// Process: Create a function named location with the input num1. the output will take the array numberOfConnections and find the last index location of the input num1 ~ use the .lastIndexOf() method

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8


//console.log(numberOfConnections.lastIndexOf(givenValue1))
// output: 7
//console.log(numberOfConnections.lastIndexOf(givenValue2))
// output: 8

//OR

const location = (num1) => {
    return numberOfConnections.lastIndexOf(num1)
}

console.log(location(givenValue1))
// output: 7
console.log(location(givenValue2))
// output: 8




// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

// Name: seasonTemps
// Input: season
// Output: season temperatures in descending order 
// Process: create a funciton called temperatures with an input of seasonTemps. return the seasonTemps and sort the given San Diego season temperatures in descending order (largest to smallest)

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]



const temperatures = (seasonTemps) => {
    return seasonTemps.sort(function(a, b) {return b - a})
}

console.log(temperatures(sanDiegoSummerTemperatures))
// output: [[82, 80, 79, 77, 76, 73, 72]

console.log(temperatures(sanDiegoWinterTemperatures))
// output: [68, 67, 66, 66, 62, 59, 59]

//OR

//const summer = sanDiegoSummerTemperatures.sort(function(a, b) {return b - a})
//console.log(summer)
// output: [[82, 80, 79, 77, 76, 73, 72]

//const winter = sanDiegoWinterTemperatures.sort(function(a, b) {return( b - a)})
//console.log(winter)
// output: [68, 67, 66, 66, 62, 59, 59]

//OR

//console.log(sanDiegoSummerTemperatures.sort(function(a, b) {return b - a}))
// output: [[82, 80, 79, 77, 76, 73, 72]

//console.log(sanDiegoWinterTemperatures.sort(function(a, b) {return( b - a)}))
// output: [68, 67, 66, 66, 62, 59, 59]