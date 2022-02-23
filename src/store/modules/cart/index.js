import getters from './getters.js';
import actions from './actions.js';
import mutations from "./mutations.js";
export default {
    namespaced: true,
    state: {
        cart: [],
        cartTotal: 0,
        showCart: false,
    },
    getters,
    actions,
    mutations
}