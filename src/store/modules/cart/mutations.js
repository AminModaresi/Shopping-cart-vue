export default {
    setCart(state, payload) {
        state.cart = payload;
    },
    toggleCart(state, payload) {
        state.showCart =  !state.showCart
    }
}