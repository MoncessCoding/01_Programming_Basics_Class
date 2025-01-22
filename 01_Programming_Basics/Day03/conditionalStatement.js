//? If else if/else - run a block of code if a certain condition meet

//Syntax
/*
    if (condition){
        Run Code if Condition is true
    } else if (anotherCondition){
        Run Code if anotherCondition is true
    } else {
        Run Code if all conditions are false
    }

*/

var age = 0

// if (age < 18){
//     console.log('You are teenager')
// } else if (age === 18){
//     console.log("You became adult")
// } else {
//     console.log("You've been adult for long time")
// }

if (age < 18){
        console.log('You are teenager')
    } else if (age === 18){
        console.log("You became adult")
    } else if (age > 18){
        console.log("you are older than 18")
    }
    else if(age >= 30 ){
        console.log("you are 30 years old")
    }
    else {
        console.log("You've been adult for long time")
    }


//* Naidan
var score = 60

// if (score < 59){
//     console.log("You got a F bro")
// }else if (score === 100){
//     console.log("You got it A+ bro")
// }else{
//     console.log("Not bad bro")
// }

//* Anu
var score = 90

if (score < 100){
    console.log('You got a B')
} else if (score === 100){
    console.log('You got an A')
} else {
    console.log('You got a C')
}

