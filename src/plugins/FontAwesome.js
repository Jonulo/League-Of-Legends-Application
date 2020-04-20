import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
// Iconos de tipo "Solid"
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'
// Iconos de tipo "Brand" (marcas o logos de empresas)
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
// El componente que vamos a utilizar
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Darlo de alta

// Le añadimos los iconos que acabamos de importar (todos, los de tipo solid y de tipo brand)
library.add(
  faHome,
  faUsers,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

// Esta es la forma de registrar un componente global con Vue
// El primer parámetro es cómo queremos que se use/llame nuestro componente desde el HTML
// El segundo parámetro es la referencia al componente (que acabamos de importar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
