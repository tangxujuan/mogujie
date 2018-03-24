<template>
    <div class="container">
        <div class="save">价钱</div>
        <div class="cart">总计：￥{{price}}</div>
        <div class="buy">立即购买</div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
           "price"
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
        border-top: 1px solid #f6f6f6;
        .save{
            line-height: 0.7rem;
            text-align: center;
            color: rgb(95, 93, 93);
            width:20%;
        }
        .cart{
            width: 40%;
            line-height: 0.7rem;
            text-align: center;
            background-color: rgb(248, 223, 227);
            color: #f72c73;
        }
        .buy{
            line-height: 0.7rem;
            text-align: center;
            width: 40%;
            background-color:#f72c73;
            color: white;
        }
    }
   
</style>

