import './scss/styles.scss'
import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { home } from './vistas/home'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
document.querySelector('footer').innerHTML = footer.template