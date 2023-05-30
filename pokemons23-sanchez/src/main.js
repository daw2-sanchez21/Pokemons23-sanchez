import './scss/styles.scss'
import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { home } from './vistas/home'
import { juego } from './vistas/juego'
document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = juego.template
juego.script()
document.querySelector('footer').innerHTML = footer.template