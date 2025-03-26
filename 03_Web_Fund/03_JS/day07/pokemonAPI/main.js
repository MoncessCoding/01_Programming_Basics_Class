console.log("Running")

let pokemonList = document.querySelector('.ten-pokemon-list') //select by class
// console.log(pokemonList)

let pokemonName = document.querySelector('#your-pokemon') // select by id
let form = document.querySelector('form')  // select by tag
form.addEventListener('submit', searchPokemon)

let input = document.querySelector('input')
// console.log(input.value)
let pokemonImg = document.querySelector('.pokemon-img')
pokemonImg.addEventListener('click', changeImage)

//* Get 10 Pokemons

async function getTenPokemons(){
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    let pokemon = await response.json()

    // console.log(pokemon.results)

    for (let i = 0; i < pokemon.results.length; i++){
        // console.log(pokemon.results[i].name)

        let listItem = document.createElement('li')
        // console.log(listItem)
        listItem.innerText = pokemon.results[i].name
        pokemonList.appendChild(listItem)

    }


}

getTenPokemons()


//* Search Pokemon

async function searchPokemon (element) {
    element.preventDefault() // it prevents the default form submission which cause the page to reload

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    let pokemon = await response.json() // extracts JSON content from the response returned by fetch request
    console.log(pokemon)

    pokemonName.innerText = pokemon.name
    pokemonImg.src = pokemon.sprites.front_shiny
    
    input.value = "" 
}

//* Change Image
async function changeImage () {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.innerText}`)
    let pokemon = await response.json() // extracts JSON content from the response returned by fetch request
    console.log(pokemon.sprites.back_shiny)

    if(pokemonImg.src === pokemon.sprites.front_shiny){
        pokemonImg.src = pokemon.sprites.back_shiny
    } else if(pokemonImg.src === pokemon.sprites.back_shiny){
        pokemonImg.src = pokemon.sprites.front_shiny
    }
}

