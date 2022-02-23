<template>
  <section class="col-span-6 sm:col-span-3 border">
    <div class="product__cart py-2 relative">
      <div class="w-full">
        <img :src="productImage" class="w-32 h-32 mx-auto" alt="" />
        <span class="absolute top-0 left-0 text-xs text-gray-600 p-1 bg-gray-300 rounded-br-sm">
          {{ productPrice }} $
        </span>
      </div>
      <div class="flex flex-col p-3">
        <p class="bold text-xs md:text-sm text-gray-600 truncate my-4">{{ productTitle }}</p>
        <base-button :router="setRouter" :link="true" :bg-gray="true">
            Buy
        </base-button>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
  props: ["productId", "productImage", "productTitle" , "productPrice"],
  setup(props){
    const setRouter = computed(() => {
      return "/product/"+props.productId
    })
    return { 
      setRouter
    }
  }
};
</script>

<style>
</style>