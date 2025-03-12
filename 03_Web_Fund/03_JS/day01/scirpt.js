console.log("Hello word")

//! Variable and Values 

//? var, let, const

let firstName = "Billy" // string

const birthYear = 1995 // int

// Data type 
//? Primitive 
/**
 * Integer - Number
 * String 
 * Undefined
 * Null
 * Boolean
 * BigInt
 * Symbol
 */

let lastName

console.log(lastName)

//? Non-Primitive - Object - key and value pair

let person = {
    fullName: "John Wick",
    year: 2000,
    isStudent: false
}

console.log(person.fullName)
console.log(person["year"])

//! Operators
//? Math operators - *, /, -, +

const now = 2025 
const myAge = now - 1996

//? Assignment operators
let x = 10 + 5
x += 10 // x = x + 10

x++ // x = x + 1
x-- // x = x - 1

console.log(x)

//? Comparison Operators - ><, >=, <=, ==, === (strict)

const isAdult = myAge >= 18


//! Strings and Template Literals

let greet = "Hello, "

console.log(greet + firstName + ". I am a teacher")

console.log(`${greet} ${firstName}. I am an instructor`)

//! if else statement

if (myAge >= 18){
    console.log("You can start driving 🚗")
} else {
    console.log("You are too young")
}

//? Challenge

let massMark = 95;
let heightMark = 1.88

let massJohn = 85
let heightJohn = 1.76

//Mark 
let bmiMark = massMark / heightMark ** 2
console.log(bmiMark)

//John 
let bmiJohn = massJohn / heightJohn ** 2
console.log(bmiJohn)

let markHigherBMI = bmiMark > bmiJohn
console.log(markHigherBMI)

if (bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
}


//! Type conversion and type coercion

//? Type Conversion

const inputYear = '1993'
const inputYear2 = 2000

const fullName = 'John Wick'



console.log(typeof inputYear)

console.log(Number(inputYear) + 7) // 2000

console.log(inputYear2 + '7') 

console.log(String(fullName) + 23)

//? Type Coercion

// Number to String
console.log("I am " + 23 + ' years old') 

// String to Number
console.log(typeof('23' - '10' - 3))
console.log('23' / '2')


let n = '1' + 1 // 11
console.log(n)
console.log(typeof n)

n = n - 1

console.log(n)
console.log(typeof n)

//! Truthy and falsy

console.log(Boolean(0))

console.log(Boolean(1))

let isStudent = 0

if (isStudent){
    console.log("I am student")
} else {
    console.log("I am not student")
}

console.log(Boolean(undefined))

let myCar
console.log(typeof myCar)

console.log(Boolean({}))
console.log(Boolean([]))

let person1 = {
    name: "Tommy",
    isStudent: false
} // truthy 

if (person1){
    console.log("Person 1 is truthy")
} else {
    console.log("Person 1 is falsy")
}