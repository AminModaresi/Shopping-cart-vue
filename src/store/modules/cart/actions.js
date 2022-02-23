export default {
    setItemToCart({commit , state}, payload) {
        let items = {
            number : 1,
            ...payload
        }
        // set item to local storage if it is not exist
        if(!state.cart.find(item => item.id == payload.id)){
            localStorage.setItem('cart', JSON.stringify([...state.cart, items]));
            commit('setCart', [...state.cart, items])
        }
    },
    loadCart({commit}) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
        if(cart) {
            commit('setCart', cart);
        }
    },
    increaseNumber({commit, state}, payload) {
        let cart = [...state.cart];
        let index = cart.findIndex(item => item.id == payload);
        cart[index].number++;
        commit('setCart', cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    decreaseNumber({commit, state}, payload) {
        let cart = [...state.cart];
        let index = cart.findIndex(item => item.id == payload);
        if(cart[index].number > 1) {
            cart[index].number--;
            commit('setCart', cart);
            localStorage.setItem('cart', JSON.stringify(cart));
        }else{
            cart.splice(index, 1);
            commit('setCart', cart);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    },
    removeForCart({commit, state}, payload) {
        let cart = [...state.cart];
        let index = cart.findIndex(item => item.id == payload);
        cart.splice(index, 1);
        commit('setCart', cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    },
    toggleCart({commit, state}) {
        commit('toggleCart');
    }
}