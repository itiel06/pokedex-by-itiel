const body = document.querySelector('body')
const baseInput = document.getElementById('base')
const boton1 = document.getElementById('boton1')
const contendor3 = document.getElementById('contendor3')

let pokemonContainer= []





const getApi1 = async (base, limite) => {


    for (base; base <= limite; base++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${base} `)
        const data = await response.json()
        pokemonContainer.push(data)
        console.log(pokemonContainer)
    }

   

}

    

const renderPokemon = (pokemonarray) => {

    contendor3.innerHTML = ''
    
    pokemonarray.forEach(pokemon => {

        const { id, name, sprites: { front_default }, types } = pokemon

        const tipo1 = types[0].type.name
        const tipo2 = types[1]?.type.name || ''


        contendor3.innerHTML += `
       <div id='contenedor4'>
       <p> ${id}</p>
       <h1>${name}</h1>
       <p> ${tipo1} ${tipo2}</p>
       <img src="${front_default}" alt="">

       </div>  
        `


    })

}

baseInput.addEventListener('input', (e)=>{

    const textoInput= e.target.value.toLowerCase().trim()
    const pokemonResultado= pokemonContainer.filter(pokemon=>{
        
        if (!textoInput) {
            return true

        }

        const pokemonName= pokemon.name

        return pokemonName.includes(textoInput)

    })

    renderPokemon(pokemonResultado)





})





const inicio = async () => {

    await  getApi1(1, 151)

     renderPokemon(pokemonContainer)
     
}

inicio()