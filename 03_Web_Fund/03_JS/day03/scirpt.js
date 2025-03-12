// Iteration for Loop


for (let repeat = 1; repeat <=5; repeat++){
    console.log("Lifting", repeat)
}

//index
const person = ['Jay', 'Jackson', 1999, 'teacher', ['Micheal', 'Peter', 'Steven'], true]

console.log(person[3])
console.log(person.length)

for (let i = 0; i < person.length; i++){ // i = i + 2
    console.log(person[i])
}


const years = [1991, 2007, 1969, 2020, 2000, 2001, 2005]
const ages = []
let currentYear = 2030
console.log(ages)
// console.log(currentYear - years[0])
// console.log(currentYear - years[1])
// console.log(currentYear - years[2])
// console.log(currentYear - years[3])

for (let i = 0; i < years.length; i++){
    // console.log(years[i])
    ages.push(currentYear - years[i])
}
console.log(ages)

//! continue and break statement

//continue 
for (let i = 0; i < person.length; i++){

    if(typeof person[i] !== 'string') continue;

    console.log(person[i], typeof person[i])
}

//break 
for(let i = 0; i < person.length; i++){
    
    if(typeof person[i] === 'number') break;

    console.log(person[i], typeof person[i])
}

// looping backward 
for(let i = years.length-1; i >= 0; i--){
    console.log(years[i])
}

// Nested loop - loop in loop
for(let i = 1; i < 4; i++){
    console.log(`------ Starting here i ${i}`)

    for(let y = 1; y < 6; y++){
        console.log(`+++++ Starting here y ${y}`)
    }

}

// while loop

let rep = 1

while (rep <= 10){
    console.log(`While: repeat ${rep}`)
    rep++
}

//Challenge 

/**
 * Part 1
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉


Part 2

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
 */

// let bill = 275

// let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20

// if(bill <= 300 && bill >= 50){
//     tip = bill * 0.15
// } else {
//     tip = bill * 0.20
// }

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

//Part 2

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

let tips = []
let totals = []

function calcTip (bill){
    // let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20
    // return tip
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20
}

for (let i = 0; i < bills.length; i++){
    // console.log(calcTip(bills[i]))
    tips.push(calcTip(bills[i]))

    // console.log(bills[i])
    totals.push(bills[i] + calcTip(bills[i]))
}

console.log(tips)
console.log(totals)