import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Configuración rutas
const routerOptions = [
  { path: '/', name: 'lol/Home' },
  { path: '/tft', name: 'tft/Home' },
  { path: '/profile/:region/:summonerName', name: 'Profile' },
  { path: '/:region/:summonerName/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'lol/Home' } }
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
