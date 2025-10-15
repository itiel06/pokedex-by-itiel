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
<div>
<p> ${id}</p>
<h2>${name}</h2>
<p> ${tipo1} ${tipo2}</p>
<img src='${front_default}'
</div>

`
}


boton.addEventListener('click', ()=> {

getApi(input.value)


} )
