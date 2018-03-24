<template>
    <div class="container">
        <div class="collect">
            <i class="iconfont icon-star"></i><br>收藏
        </div>
         <div class="shop">
            <i class="iconfont icon-home"></i><br>小店
        </div>
        <router-link :to="'/cart?Img='+sendDetail.Img+'&price='+sendDetail.price+'&title='+sendDetail.title+'&itemId='+sendDetail.itemId" tag="div"  class="cart">
            <div>加入购物车</div>
        </router-link>
        <div class="buy">立即购买</div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
            'sendDetail'
        ])
    }
}
</script>

<style lang="less" scoped>
    .container{
        display: flex;
        justify-content: space-between;
        height: 0.7rem;
        font-size: 0.25rem;
        background-color: white;
        position: fixed;
        bottom: 0;
        width: 100%;
        .collect,.shop{
            width:17%;
            line-height: 0.3rem;
            text-align: center;
            color: rgb(95, 93, 93);
            font-size: 0.2rem;
            margin-top:0.1rem;
            border-left: 1px solid rgb(228, 226, 226);;
        }
        .cart{
            width: 33%;
            line-height: 0.7rem;
            text-align: center;
            background-color: rgb(248, 223, 227);
            color: #f72c73;
        }
        .buy{
            width: 33%;
            line-height: 0.7rem;
            text-align: center;
            background-color:#f72c73;
            color: white;
        }
    }
   
</style>

