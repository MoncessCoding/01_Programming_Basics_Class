//! Array Review

var myCars = ["Toyota", "Hyundai", "Ford", "Subaru"]

//? .push()
// myCars.push("Honda")
// console.log(myCars)

//? .pop()
// myCars.pop()
// console.log(myCars)


//! Function

function sayHello(){
    console.log("Hello World")
}

// sayHello()

//                parameter
function multiply(x, y){
    return x * y;
}
//                  argument
// console.log(multiply(2, 3))

//! Default Parameter
function decrementByTwo(x, y=2){
    return x - y
}

// console.log(decrementByTwo(10, 6))

//! Return
var a = decrementByTwo(8)
// console.log(a + 10)

function minus (x, y){
    var a = x - y  // output

    console.log(a)
}

// console.log(minus(15 - 5))

// Create a simple calculator function 
// If else for calculation


// 2 argument
// Say which math operation to computer
// Calculate 
// Return result

function calculator(x, y, operator){

    if('+' === operator){
        return x + y;
    } else if('-' === operator){
        return x - y
    } else if('*' === operator){
        return x * y
    } else if('/' === operator){
        return x / y
    } else{
        return "Error";
    }
}

// console.log(calculator(4, 2, '$'))



var numbers = [1,2,3,4,5,1,22,3,10,5]

function arrContainsDuplicates(arr){

    //Check length of array
    if(arr.length <= 1){
        return false;
    } else{

        duplicates = {}

        for (var i = 0; i < arr.length; i++){

            if(duplicates[arr[i]] == undefined){
                duplicates[arr[i]] = true
            } else {
                return true
            }
            return false
        }

    }
}

console.log(arrContainsDuplicates(numbers))