import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Configuración rutas
const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

// Rutas
// webpackchunkname es para ver el nombre cuando se corre en produccion (size files)
const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load (carga el componente solo cuando sea necesario)
    component: () => import(/* webpackChunkName: "[request]" */
      `@/views/${r.name}/Index.vue`)
  }
})

const router = new VueRouter({
  routes
})

export default router
