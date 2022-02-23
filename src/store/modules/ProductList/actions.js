export default {
    async getProductList({commit}, payload) {   
        const response = await fetch("https://fakestoreapi.com/products")
        const responseData = await response.json()
        commit('getProductList', responseData);
    },
    async getProduct({commit}, payload) {
        const response = await fetch("https://fakestoreapi.com/products/" + payload)
        const responseData = await response.json()
        commit('getProduct', responseData);
    },
}