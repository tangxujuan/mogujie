<template>
 <div class="container">
     <!-- 搜索header -->
    <searchBar/>
    <!-- 热门搜索 -->
    <searchHistory/>
    <!-- 历史搜索 -->
    <searchHot/>
 </div>
</template>

<script>
import searchBar from "../template/search-bar/search-bar"
import searchHistory from "../template/search-history/search-history"
import searchHot from "../template/search-hot/search-hot"

export default {
    components:{
        searchHistory,
        searchHot,
        searchBar
    }
}
</script>

<style lang="less" scoped>
    .container{
        height: 100%;
        background-color: white;
        font-size: 0.2rem;
    }
   
</style>

