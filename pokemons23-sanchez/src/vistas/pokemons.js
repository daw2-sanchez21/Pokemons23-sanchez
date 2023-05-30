let puntos = 1
export class Pokemons {
// Mapping de propiedades de la tabla perfiles
constructor(id=null, nombre=null, imagen=null, x=null, y=null, velocidad=null, tamaño=null, html=null) {
    this.id = id
    this.nombre = nombre
    this.imagen = imagen 
    this.x = x
    this.y = y
    this.velocidad = velocidad
    this.tamaño = tamaño
    this.html = html
  }
  
  static async cargaDatosPokemon(pokeApi) {
    const url=`https://pokeapi.co/api/v2/pokemon/${this.id}`
    this.imagen=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${this.id}.png`
    const pokemon = await fetch(url)
    const mipokemon = await pokemon.json()
    const ids= this.id
    this.nombre = mipokemon.species.name
    console.log("Nombre desde await: ", mipokemon.species.name)
    //return Pokemons(this.id, this.nombre, this.imagen)
  }
  
  static async generaDatosAleatorios(alto_fondo, ancho_fondo) {
    this.id = Math.floor(Math.random() * 20) + 1;
    this.tamaño = Math.floor(Math.random()*300)-100
    this.x = Math.floor(Math.random()*(ancho_fondo-200))//Revisar
    console.log(this.x)
    this.y =  Math.floor(Math.random()*(alto_fondo-200))+200 
    //Controlar que no salga de la pantalla
    this.velocidad = Math.random()*20-1 //Numeros negativos
  }
  static async insertaPokemon(alto_fondo, ancho_fondo, id) {
    this.generaDatosAleatorios(alto_fondo, ancho_fondo)
    this.cargaDatosPokemon()

    const ficha = document.createElement('div')
    //Añadir id al div
    ficha.setAttribute("id", `${id}`);
    ficha.style.width = this.tamaño +'px'
    ficha.style.height = '120px'
    ficha.innerHTML=`<img src='${this.imagen}' width='${this.tamaño}' class='pokemon' id='${id}'></img>`
     //Si no ha llegado a la barra inferior aumentamos la velocidad
     this.x+=this.velocidad;
     //Actualizamos el top en el css
    this.html = ficha
    this.html.style.top = this.y +'px'
    this.html.style.left = this.x +'px'
    this.html.style.position = 'absolute'


    //this.html.style.width = this.tamaño +'px'
    const main = document.querySelector('#pantalla')
    main.appendChild(this.html)

  }
  static async mataPokemon(id) {
    const pk = document.getElementById(id)
    pk.style.display= "none"
    const pnt = document.querySelector('#puntos')
    pnt.innerHTML=""
    pnt.innerHTML+=`${puntos}`
    puntos ++
  }
  static async observadores(id) {
      this.mataPokemon(id)
  }
  
 
}
