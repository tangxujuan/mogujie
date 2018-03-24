<template>
    <search-bar/>
</template>

<script>
import searchBar from "../template/search-bar/search-bar"

export default {
    components:{
        searchBar
    },
    mounted(){
        let q=this.$route.query.q
        this.$store.dispatch('setHistory',q)
    }
}
</script>

<style lang="less" scoped>

</style>

