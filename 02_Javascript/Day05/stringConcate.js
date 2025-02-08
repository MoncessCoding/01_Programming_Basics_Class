//!String concatenation and Template String
var firstName = "Naidan"
var lastName = "Jigjiddorj"

var fullName = firstName + ' ' + lastName
console.log(fullName)

//Output: Hello, My name is John Wick
var hello = "Hello"
var myName = "My name is"

var ev = hello + ', ' + myName + " " +  fullName
console.log(ev)

var hello01 = hello + ', ' + myName + ' ' + fullName

console.log(hello01)

// Hello, My name is Naidan Jigjiddorj. I am .. years old

var iAm = "I am"
var age = 35
var yearsOld = 'years old'

console.log(hello + ', ' + myName + fullName + '. ' + iAm + ' ' + age + yearsOld)

console.log(`${hello}, ${myName} ${fullName}. ${iAm} ${age} ${yearsOld}`)