//* Function Declaration

//* StatiC Function
function countTo7 (){

    for (var i = 1; i < 8; i++){
        // console.log(i)
    }

}


// To use the function, we have to call it by using its name
// countTo7()

//* Dynamic function

function sayHello(name){
    // console.log("Hello", name)
}

//Function call to usage
// sayHello("Anu")
// sayHello("Naidan")
// sayHello("Bill")

function greet(name, age){
    // console.log("Hello, I'm", name,". I'm", age,"years old.")
}

// greet('John', 50)

//* Return statement
var myNum

function square(num){
    return num * num
}

// console.log(square(2))

myNum = square(2)

console.log(myNum)

console.log(myNum + myNum)