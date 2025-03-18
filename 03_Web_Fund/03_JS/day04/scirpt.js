console.log("Running")

function customFun(){
    alert("From Script.js")
}

function over(){
    alert("mouseover")
}

function out(){
    alert("mouseout")
}


let elementYear = document.querySelector('.year')
console.log(elementYear.innerText, typeof elementYear.innerText)


function increaseYear(){
    let year = parseInt(elementYear.innerText)
    console.log(year, typeof year)

    // year += 1
    // elementYear.innerText = year
    elementYear.innerText = year += 1
}

// increaseYear()

function changeBtnText(element){
    console.log(element) // It prints the entire element
    console.log(element.innerText)
    console.log(element.className)
}

function setColor(element){
    console.log(element)
    element.style.backgroundColor = "blue"
    element.style.color = "white"
}

function choosePet(element){
    alert("You picked " + element.value)
}


//! Timeout
function message (){
    console.log("Delayed message")
}

console.log("start")

setTimeout(message, 3000)

console.log("End")