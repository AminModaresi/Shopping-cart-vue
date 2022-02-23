<template>
    <main class="main">
        <div class="container-fluid mx-auto">
            <div class="grid-cols-12 grid">
                <BaseProduct v-for="product in ShowProducts" :product-price="product.price" :product-id="product.id" :product-title="product.title" :product-image="product.image" :key="product.id" />
            </div>
        </div>
    </main>
</template>
<script>
import { computed , ref , onMounted } from "vue"
import { useStore } from "vuex"
export default {
    setup() {
        const store = useStore()
        const ShowProducts = computed(() => {
            return store.getters["ProductList/showProductList"]
        })
        function getProductList(){
            store.dispatch("ProductList/getProductList")
        }
        onMounted(() => {
            getProductList()
        })
        return {
            ShowProducts
        }
    },
}
</script>