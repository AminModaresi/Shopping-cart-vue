import { createStore } from 'vuex'
import ProductList from "./modules/ProductList/index.js"
import Cart from "./modules/cart/index.js"
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProductList : ProductList,
    Cart : Cart
  }
})
