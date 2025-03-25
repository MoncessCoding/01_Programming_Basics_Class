console.log("Running")


//Global level
//Grab form and add eventlistener
let form = document.querySelector('form')
// console.log("Form",form)

// Submit the form
form.addEventListener('submit', submitTodo)

//grab the input to get value
let input = document.querySelector('input')
// console.log("Input", input.value)
let todos = document.querySelector('.todos')




//Submit function
function submitTodo(event){
    console.log("Submitted")
    console.log(event)

    // prevent default actions
    // event.preventDefault()
    //!CRUD

    //? Create 
    // unique ID for each task - current timestamp
    // task from input field
    // completion status
    let newTodo = {
        id: Date.now(),
        task: input.value,
        isComplete: false
    }

    // console.log(newTodo)

    //Create div element for each todo
    let todoDiv = document.createElement('div')
    console.log(todoDiv)



    //Read 
    //Update
    //Delete


    input.value = ''


}
