<template>
    <header class="header py-5 flex justify-between border-b">
        <base-button :link="true" router="/">Home</base-button>
        <div class="relative">
            <base-button @click="toggleCart" :bg-blue="true">Cart</base-button>
            <Cart v-if="showCarts"/>
        </div>
    </header>
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Cart from "../home/Cart.vue"
export default {
    components :{
        Cart
    },
    setup() {
        const store = useStore()
        const showCarts = computed(() => {
            return store.getters["Cart/showCarts"]        
        })
        function toggleCart(){
            store.dispatch("Cart/toggleCart")
        }
        return { 
            showCarts,
            toggleCart
        }
    },
}
</script>
<style lang="scss" scoped>
    // @import '../';
</style>