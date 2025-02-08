//! Strings

var myNum = "100";

var myNum01 = 100;

var output1 = myNum + 2
var output2 = myNum01 + 5

var output3 = parseInt(myNum) + 4

console.log(typeof(output1)) //102  Naidan
console.log(typeof(output2)) // 105
console.log(output3)


//Immutable vs Mutable

// Primitive values are immutable

var myStr = "Immutable"

myStr = "New Value"

console.log(myStr)

var myArr = [2, 3, 4, 5, 5]

myArr.push(16)

console.log(myArr)


//! String Methods

//? .length()

var myStr01 = "Hello World"

console.log(myStr01.length)


//Print each character of "Hello World"

//         01234567
var wrd = "Hello World";

// for (var i = 0; i < wrd.length; i++) {
//     console.log(wrd[i]);
// }

//? .slice()
//               inclusive exclusive
console.log(wrd.slice(1, 7))

//? .split() -- returns an array of strings

var myStr02 = "Hello, My name is ChatGpt"

var newArr = myStr02.split(' ')
console.log(newArr)

var newArr02 = myStr02.split(',')
console.log(newArr02)


console.log(newArr[2])

console.log(newArr.join())

//? .toString -> Convert data to string 
var newArr03 = [1,2,3,4,5]
console.log(typeof(newArr03))
var convertedArr = newArr03.toString()
console.log(typeof(convertedArr))