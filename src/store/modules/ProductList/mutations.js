export default {
    getProductList(state, payload) {
        state.productList = payload;
    },
    getProduct(state, payload) {
        state.product = payload;
    }   
}