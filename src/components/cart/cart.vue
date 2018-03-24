<template>
  <div> 
    <div class="container">
      <div class="bar">
          <router-link tag="div" :to="'/detail?Img='+sendDetail.Img+'&price='+sendDetail.price+'&title='+sendDetail.title+'&itemId='+sendDetail.itemId">
              <i class="iconfont icon-fanhui"></i> 
              <span class="cart">购物车</span>
          </router-link>
          <div>
              <i class="iconfont icon-gouwuche1"></i>
          </div>
      </div>
    </div>
    <!-- 购物车商品信息 -->
    <cartDetail/>
    <!-- 购物车商品价格 -->
    <cartPrice/>
  </div>
</template>

<script>
    import navbar from '../navbar/navbar'
    import cartDetail  from "../template/cart-detail/cart-detail"
    import cartPrice from "../template/cart-price/cart-price"

    import {mapGetters} from "vuex"
    export default{
        data(){
            return {
                data:{
                    Img:"",
                    price:"",
                    title:"",
                    itemId:""
                }
            }
        },
        computed:{
            ...mapGetters([
                'sendDetail'
            ])
        },
        mounted(){
            console.log(this.$route.query);
            this.data.Img=this.$route.query.Img;
            this.data.price=this.$route.query.price;
            this.data.title=this.$route.query.title;
            this.data.itemId=this.$route.query.itemId;
            console.log(this.data);
            this.$store.dispatch("setCart",this.data);
        },
        components:{
            navbar,
            cartDetail,
            cartPrice
        }
    }
</script>

<style scoped lang="less">
    .bar{
        margin-left: 0.2rem;
        margin-top: -0.2rem;
        margin-bottom: 0.1rem;
            .cart{
            font-size: 0.3rem;
        }
    }
</style>
