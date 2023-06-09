// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:



// --------------------1) What will this log?

const cohort = "LEARN 2023"
 //console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: 
        //output: 10 because the .length method will tell us how many characters are in the string. It also includes the space as a character which I missed. 



// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: 
    // output: "o"  because the square brackets indicates the index and the number 4 indicates what position in the index we would like to be output. Because index starts with 0, from left to right. See below breakdown:
    //         H e l l o  W o r l d ! 
    //index:   0 1 2 3 4  5 6 7 8 9 10





// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: 
    // output: Ruby - In console.log the computer interprets [index] as 1 due to previously declaring the variable, index = 1. and reads it as console.log(languages[1]). Because the square brackets indicate index location the console.log is asking what element is at the 1 index location of the array named languages.
    //         ["JavaScript", "Ruby", "Python", "C++"]
    //index:       0             1      2         3  





// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain:
    // output: TypeError - Not a function. After some research I found that JS does not really support toUpperCase() on arrays. In order to get the output [SATURDAY, SUNDAY] I haven chosen to change the array to a string, capitalize the string and then revert thet string back into an array. 
    // const weekendDays = ["saturday", "sunday"]
    // let newName = weekendDays.toString()
    // newName = newName.toUpperCase()
    // newName = newName.split(',')

   //console.log(newName)

//OR

    // const test = weekendDays.toString().toUpperCase().split(',')
    // console.log(test)
    // output: ['SATURDAY, 'SUNDAY]




   
// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
//console.log(typeof dataTypes.length)

// a) Your answer:   number 
// b) Verify and explain: 
// output: number
// in the console.log it is asking for:
// the typeof: which is asking what type of data follows... dataTypes.length 
// dataTypes.length is asking for the number of elements in the dataTypes array 
    // the dataTypes array has 4 elements
    // dataTypes.length = 4
    // (typeof 4) = number (4 is the primitive data type - number)
    // output: number