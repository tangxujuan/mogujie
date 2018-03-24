<template>
   <div class="wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- 轮播图start -->
        <swiper-slide v-for='(item,i) in banner' :key="i">
            <img :src="item.image_800">
        </swiper-slide>
        <!-- 轮播图end   -->
        <!-- 分页符start -->
        <div class="swiper‐pagination paginations" slot="pagination"></div>
        <!-- 分页符end -->
      </swiper>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    data(){
      return {
        swiperOption: { 
          autoplay: 800,
          loop : true,
          pagination : '.swiper‐pagination', 
          paginationClickable :true, 
        
        } 
      }
    },

  computed:{
      ...mapGetters([
          "banner"
      ])
  },
  mounted(){
      this.$store.dispatch("getBanner");
  }
}
</script>

<style lang="less" scoped>
  .wrap{
    height: 2.8rem;
    margin-top:0.8rem;
    img{
        width: 100%;
        height: 2.8rem;
    }
    .paginations{
      position: absolute;
      bottom: 0.2rem;
      z-index: 1;
    }
  }
  .swiper-pagination-bullet-active {
    background:red!important;
  }
</style>
