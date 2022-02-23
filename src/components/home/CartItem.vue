<template>
  <div class="px-3 p-2 bg-gray-50 border-b last:p-0">
      <div class="flex justify-between">
        <div class="w-5/6">
          <base-button @click="toggleCart" :just-link="true" :link="true" :router="router">
            {{ productTitle }}
          </base-button>
          <p class="text-xs color-gray-300">$ {{ productPrice }}</p>
          <base-button :btn-sm="true" :bg-red="true" @click="removeForCart">
            Delete For Cart
          </base-button>
        </div>
        <div class="w-1/6">
          <img class="w-full" :src="productImage" alt="">
        </div>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import {useStore} from "vuex"
export default {
    props : ["productId" , "productTitle" , "productImage" , "productPrice"],
    setup(props) {
      const store = useStore(); 
      function removeForCart(){
        store.dispatch("Cart/removeForCart" , props.productId)
      }
      const router = computed(() => {
        return `/product/${props.productId}`
      })
      function toggleCart(){
            store.dispatch("Cart/toggleCart")
        }
      return {
        removeForCart,
        toggleCart,
        router
      }
    }
}
</script>

<style>

</style>