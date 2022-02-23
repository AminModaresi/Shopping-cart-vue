<template>
    <div class="absolute right-1 w-80 z-50 border rounded mt-2">
        <CartItem v-for="CartItem in showCart" :key="CartItem.id" :product-id="CartItem.id" :product-image="CartItem.image" :product-title="CartItem.title" :product-price="CartItem.price"/>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from "vuex"
import CartItem from "./CartItem.vue"
export default {    
    components : {
        CartItem
    },
    setup(){
        const store = useStore()
        let showCart = computed(() => {
            return store.getters["Cart/showCartProduct"]
        })
        return { 
            showCart
        }
    }
}
</script>

<style>

</style>