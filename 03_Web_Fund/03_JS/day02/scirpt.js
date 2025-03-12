//! Ternary Operator

const age = 23
// if (age >= 18){
//     console.log("You can start driving 🚗")
// } else {
//     console.log("You are too young")
// }

age >= 18 ? console.log("You can start driving 🚗") : console.log("You are too young")

const drink = age >= 18 ? "Wine" : "Water"

console.log(drink)

//! Function
// syntax
//? Declaration
function greet (){
    // block of code
    // scope
    console.log("Hello")
}


// Calling or Invoking
greet()
greet()
greet()

// Parameter == Variable

function fruitProcessor(fruit1, fruit2) {
    const juice = `Juice with ${fruit1} and ${fruit2}.`
    console.log(juice)
}
//             argument == value/data
fruitProcessor('apples', 'oranges')
fruitProcessor('cranberry', 'banana')
fruitProcessor(2025, 'apples')

//? Return statement

function calculateAge(birthYear){
    return 2025 - birthYear
}

let currentAge = calculateAge(1999)
console.log(currentAge)

let increase = currentAge + 4
console.log(increase)


// Function expression

let calcAge = function calculateAge(birthYear){
    return 2025 - birthYear
}

let age2 = calcAge(1995)
console.log(age2)


//? Arrow function

const calculateAge01 = birthYear => 2025 - birthYear
console.log(calculateAge01(2002))

const yearsUntilRetire = (birthYear, firstName) => {
    let age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years` 
}

console.log(yearsUntilRetire(2000, "John"))

//! Arrays 

// index based  0        1        2 
let users = ['Micheal', 'John', 'Peter']

console.log(users[1])
console.log(users.length)  // 3
console.log(users[users.length-1])

users[1] = 'Barney'
console.log(users)

const years = new Array(1991, 1993, 1994, 1995)  

const firstName = 'Jay'

const jay = [firstName, 'Jackson', 1999, 'Software engineer', users]
console.log(jay)

//?Basic Arrays Methods
// Add elements - .push()
let newUsers = users.push('Tommy')
console.log(newUsers)
// Remove element - pop()
let popped = users.pop()
console.log(popped)


//! Object

const person = {
    firstName: 'Jay',
    lastName: 'Jackson',
    age : 32,
    job : 'Software Engineer',
    friends: ['Micheal', 'John', 'Peter'],
    isTeacher: true
}

// Dot . vs bracket notation

console.log(person)

console.log(person.firstName) // Dot notation
console.log(person["lastName"]) // Bracket notation

const person1 = {
    firstName: 'Jay',
    lastName: 'Jackson',
    age : 32,
    job : 'Software Engineer',
    friends: ['Micheal', 'John', 'Peter'],
    isTeacher: true,
    calcAge : function calculateAge(birthYear){
        return 2025 - birthYear
    }
}

console.log(person1.calcAge(2003))