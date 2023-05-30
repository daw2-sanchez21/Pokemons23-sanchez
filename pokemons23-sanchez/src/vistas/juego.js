import { Pokemons } from "./pokemons";

export const juego= {
    template: `
    <div class="container-fluid border" style="background-color:#FF8484;">
        <div class="row" >   
            <div class="col-6">
                <h1>Pokemons</h1>
            </div>
            <div class="col-6">
                <h1>Puntos: </h1><h1 id="puntos">0</h1>
            </div>
        </div>
        <div class="container-fluid border d-flex mt-5" style="background-color:#E1CDCD;" id="pantalla">
        
        </div>
    </div>`,
    async script (){
        const url='https://pokeapi.co/api/v2/pokemon/'
        const pantalla= document.querySelector('#pantalla')
        pantalla.style.height='800px'
        const ancho_fondo = pantalla.clientWidth 
        const alto_fondo =pantalla.clientHeight
        //await Pokemons.generaDatosAleatorios(ancho_fondo, alto_fondo)
        
        
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 1)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 2)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 3)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 4)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 5)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 6)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 7)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 8)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 9)
        await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 10)

        const pokemons = document.querySelectorAll('.pokemon')
        console.log(pokemons)
        
        pokemons.forEach((pokemon) => {
            pokemon.addEventListener('click', async (e) => {
              const obtId = pokemon.getAttribute('id')
              console.log(obtId)
              await Pokemons.observadores(obtId)
            })
        })
    }
}