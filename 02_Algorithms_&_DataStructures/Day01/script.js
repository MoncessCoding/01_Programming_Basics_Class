//? Data Types 

//* Primitive 
/*
    integer
    string
    boolean
    null
    undefined
*/

var myNum = 123;
var myStr = "Bilguun";
var isTrue = true;
var myUndefined;

//Person
var fullName = "Tonny";
var age = 42;
var isPerson = true

// console.log(fullName, age, isPerson)

fullName = "Jonhny"
// console.log(fullName)

//Objective - key and value pair

var student = {
    fullName: "John Wick",
    age: 32,
    isStudent: false,
    assassin: "",
    weapon: ["Knife", "Pistol", "Arrow"],
}

// console.log(student)

//Access Object Values

// console.log(student.weapon)
// console.log(student.fullName)
// console.log(student.age)

// console.log(student['weapon'])
// console.log(student['age'])

// student.fullName = "Jr John Wick"
// student['age'] = 18
// student['isStudent'] = true

// console.log(student.fullName)
// console.log(student['age'])
// console.log(student)

// delete student['fullName']

// console.log(student)

// car object - model, year, color, isUsed, make
// print all properties
// color - gray 
// print new color

//* Anu
// var Car = {
//     model: "Toyota",
//     year: 2020,
//     color: "black",
//     isUsed: true,
//     make: "Camry"
// }
// console.log(Car)
// color = "gray"
// console.log(color)
// console.log(Car.color)


//* Naidan
// var carObject = {

//     var :make = Cadillac,
//     var :model = "Ct5",
//     var :year = 2025,
//     var :color = Black,
//     var :isUsed= false,
    
// }

// console.log(carObject)

// console.log(carObject.color) 


var billyCar = {
    model :  "Ct5",
    year : 2025,
    color : "Black",
    isUsed : false,
    make : 'Cadillac'

}

// console.log(billyCar)

// billyCar['color'] = "Gray"

// console.log(billyCar.color)
// console.log(billyCar)

/*
Create an employee object with the following properties:

name (string)
position (string)
salary (number)
collection of clothes (array)

Then Add a method called giveRaise that increases the salary by a given amount.
*/

//? Naidan
// var employee = {

//     name: "Naidan",
//     position: "FullStuck",
//     salary: 120000,
//     cofc: "jordan"
    
//     }
    
//     console.log(employee)
    
//     employee.salary = 200000

//     console.log(employee.salary)

//? Anu
var Employee = {
    name: "Julia",
    position: "Secretary",
    salary: 10000,
    collectionofclothes: ["blouse", "jacket", "skirt"]
}
console.log(Employee)

Employee.salary = 200000

console.log(Employee['salary'])

console.log(Employee)

function giveRaise (amount){
   return Employee.salary + amount
}

console.log(giveRaise(9999))

Employee.salary = giveRaise(9999)

console.log(Employee)