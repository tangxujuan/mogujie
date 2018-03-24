<template>
    <div id="home">
        <!-- 搜索 -->
        <search/>
        <!-- bannner轮播图 -->
        <homeBanner/>
        <!-- 商品导航 -->
        <homeShop/>
        <!-- 超级实惠 -->
        <homeSale/>
        <!-- 热门 -->
        <homeHot/>
        <!-- 猜你喜欢 -->
        <homeLike/>
        <!-- 底部导航 -->
        <navbar/>
    </div>
</template>

<script>
    import search from '../template/search/search'
    import homeBanner from '../template/home-banner/home-banner'
    import homeShop from '../template/home-shop/home-shop'
    import homeSale from '../template/home-sale/home-sale'
    import homeHot from '../template/home-hot/home-hot'
    import homeLike from '../template/home-like/home-like'
    import navbar from '../navbar/navbar'
    export default{
        components:{
            navbar,
            search,
            homeBanner,
            homeShop,
            homeSale,
            homeHot,
            homeLike
        }
    }
</script>

<style scoped lang="less">

</style>
