<template>
  <div class="container">
      <div v-for="(item,i) in shop" :key="i">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
      </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
            "shop"
        ])
    }
}
</script>

<style lang="less" scoped>
    @fontColor:0.15rem;
    .container{
        width: 100%;
        background-color:white;
        div{
            display: inline-block;
            width: 20%;
            padding-top: 0.1rem;
            text-align: center;
            img{
                width:63%;
            }
            p{
                font-size: @fontColor;
                text-align: center;
            }
        }
    }
</style>

