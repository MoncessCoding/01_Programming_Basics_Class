//? let, var, const

// Global, Class, Function 

//* var
/*
    Function-scoped
*/

var x = 5
console.log(x)

if (true){
    var y = 8
}

console.log(y)

x = 222
console.log(x)

//* let 
/*
block-scoped
*/
let a = 12

console.log(a)

if (true){
    let b = 8
    console.log(b)
}

a = 333
console.log(a)

//* const

const birthYear = 1995
console.log(birthYear)

//* Array - a collection of data
// index based  0         1         2
var users = ["Bilguun", "Naidan", "Anu"]

//? access to value
// console.log(users[1])
// console.log(users[2])


var user = users[2]

console.log(user)

var lastName = "Kizer"

console.log(user, lastName)


var phoneNumbers = [12314324, 23421341234, 234123412]

var trueOrFalse = [true, false]

var emptyArr = []

/*
    Declare a variable for the store name (a string).
    Create an array named inventory to store three fruit in the store. 

*/
//* Anu
var str = "Store Name";
// console.log(str);

var users = ["apples","oranges","bananas"]

//* Naidan

var str = "fruitNames"

// console.log("apple", "Banana", "Grape")

// var inventory = ["apple", "Banana", "Grape"]

//* Anu
//                   0         1          2        3        4
var fruitBasket = ["apple", "banana", "orange", "grape", "mango"]
console.log(fruitBasket[0])
console.log(fruitBasket[3])

//* Naidan
var fruitBasket = [ "apple", "banana", "orange", "grape", "mango"]
// console.log(apple)

// var lastFruit = "grape"
// console.log(lastFruit)