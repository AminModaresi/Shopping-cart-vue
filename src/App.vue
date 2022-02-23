<template>
    <TheHeader />
    <router-view></router-view>
</template>
<script>
import TheHeader from "./components/layout/TheHeader.vue" 
import {useStore} from "vuex"
import { onBeforeMount } from '@vue/runtime-core'
export default {
    components : {
        TheHeader
    },
    setup() {
        const store = useStore()
        function loadCart(){
            store.dispatch("Cart/loadCart")
        }
        onBeforeMount(() => {
            loadCart()
        })
    },
}
</script>
<style lang="scss">
    @import "./assets/sass/app.scss";
</style>
