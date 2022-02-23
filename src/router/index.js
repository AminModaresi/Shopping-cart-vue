import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path : "/" , redirect : "/home"},
  {path : "/home" , component : () => import("../views/Home.vue")},
  {path : "/product/:id" , props : true , component : () => import("../views/Product.vue")},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
