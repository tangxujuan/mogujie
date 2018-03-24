
<template>
  <div>
      <div class="title">
          <div>
              <i class="iconfont icon-star"></i>
              <font>热门搜索</font>
          </div>
      </div>
      <div class="content">
          <router-link tag="div" :to="'/searchDetail?q='+item.frontword" v-for="(item,i) in hotWord" :key="i" :style="'color:'+item.color">
                {{item.frontword}}
          </router-link>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['hotWord'])
    },
    mounted(){
        this.$store.dispatch("getHotWord");
    }
}
</script>

<style lang="less" scoped>
    .title{
        margin-top:0.2rem;
        padding-top: 0.1rem;
        border-top:0.01rem solid #eeecec;
        width: 100%;
        padding-left: 5%;
        color: #999595;
        div{
            width: 40%;
        }
    }
    .content{
        width: 90%;
        display:flex;
        margin-left: 5%;
        flex-wrap: wrap;
        div{
            margin-top:0.2rem;
            margin-right: 0.2rem;
            font-size: 0.2rem;
            height: 0.4rem;
            line-height: 0.4rem;
            padding-left: 0.1rem;
            padding-right: 0.1rem;
            border:0.01rem solid #eeecec;
            border-radius: 0.1rem;
        }
    }
</style>


