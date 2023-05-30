(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const styles = "";
const header = {
  template: ``
};
const footer = {
  template: ``
};
let puntos = 1;
class Pokemons {
  // Mapping de propiedades de la tabla perfiles
  constructor(id = null, nombre = null, imagen = null, x = null, y = null, velocidad = null, tamaño = null, html = null) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tamaño = tamaño;
    this.html = html;
  }
  static async cargaDatosPokemon(pokeApi) {
    const url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    this.imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${this.id}.png`;
    const pokemon = await fetch(url);
    const mipokemon = await pokemon.json();
    this.id;
    this.nombre = mipokemon.species.name;
    console.log("Nombre desde await: ", mipokemon.species.name);
  }
  static async generaDatosAleatorios(alto_fondo, ancho_fondo) {
    this.id = Math.floor(Math.random() * 20) + 1;
    this.tamaño = Math.floor(Math.random() * 300) - 100;
    this.x = Math.floor(Math.random() * (ancho_fondo - 200));
    console.log(this.x);
    this.y = Math.floor(Math.random() * (alto_fondo - 200)) + 200;
    this.velocidad = Math.random() * 20 - 1;
  }
  static async insertaPokemon(alto_fondo, ancho_fondo, id) {
    this.generaDatosAleatorios(alto_fondo, ancho_fondo);
    this.cargaDatosPokemon();
    const ficha = document.createElement("div");
    ficha.setAttribute("id", `${id}`);
    ficha.style.width = this.tamaño + "px";
    ficha.style.height = "120px";
    ficha.innerHTML = `<img src='${this.imagen}' width='${this.tamaño}' class='pokemon' id='${id}'></img>`;
    this.x += this.velocidad;
    this.html = ficha;
    this.html.style.top = this.y + "px";
    this.html.style.left = this.x + "px";
    this.html.style.position = "absolute";
    const main = document.querySelector("#pantalla");
    main.appendChild(this.html);
  }
  static async mataPokemon(id) {
    const pk = document.getElementById(id);
    pk.style.display = "none";
    const pnt = document.querySelector("#puntos");
    pnt.innerHTML = "";
    pnt.innerHTML += `${puntos}`;
    puntos++;
  }
  static async observadores(id) {
    this.mataPokemon(id);
  }
}
const juego = {
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
  async script() {
    const pantalla = document.querySelector("#pantalla");
    pantalla.style.height = "800px";
    const ancho_fondo = pantalla.clientWidth;
    const alto_fondo = pantalla.clientHeight;
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 1);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 2);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 3);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 4);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 5);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 6);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 7);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 8);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 9);
    await Pokemons.insertaPokemon(alto_fondo, ancho_fondo, 10);
    const pokemons = document.querySelectorAll(".pokemon");
    console.log(pokemons);
    pokemons.forEach((pokemon) => {
      pokemon.addEventListener("click", async (e) => {
        const obtId = pokemon.getAttribute("id");
        console.log(obtId);
        await Pokemons.observadores(obtId);
      });
    });
  }
};
document.querySelector("header").innerHTML = header.template;
document.querySelector("main").innerHTML = juego.template;
juego.script();
document.querySelector("footer").innerHTML = footer.template;
