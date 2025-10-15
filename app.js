const body = document.querySelector('body')
const contenedor = document.getElementById('contenedor')
const input= document.getElementById('idPokemon')
const boton= document.getElementById('botonpokemon')



const getApi = async(pokemon) =>{

const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
const data = await response.json()

const {id, name,sprites:{front_default}, types } = data

const tipo1 = types[0]?.type.name || ''
const tipo2 = types[1]?.type.name || ''

console.log(id)
console.log(name)



contenedor.innerHTML = `
<div id='contenedor1'>
<p id='idx'> ${id}</p>
<h2 id='namex' >${name}</h2>
<p id='tipox'> ${tipo1} </p>
<p id='tipoz'> ${tipo2} </p>
<img id='imgx' src='${front_default}'

</div>

`
}


boton.addEventListener('click', ()=> {

getApi(input.value)


} )
