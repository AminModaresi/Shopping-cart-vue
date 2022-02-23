<template>
    <button v-if="!link" class="rounded" :class='{"bg-blue-300 px-4 py-2 text-sm" : bgBlue , "bg-gray-300 px-4 py-2 text-sm" : bgGray , "px-1 by-2 text-xs" : btnSm , "bg-red-300" : bgRed}'>
        <slot></slot>
    </button>
    <router-link v-else :to="router" class="px-4 py-2 text-center rounded text-sm" :class='{"bg-blue-300" : bgBlue , "bg-gray-300" : bgGray , "just-link" : justLink}'>
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props : ["link" , "bgBlue" , "bgGray" , "router" , "justLink" , "bgRed" , "btnSm"]
}
</script>

<style scoped lang="scss">
.just-link{
    padding: 0 !important;
    margin: 0 !important;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
</style>