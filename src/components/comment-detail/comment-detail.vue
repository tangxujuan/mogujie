<template>
  <div class="container">
      <div class="bar">
          <router-link tag="div" :to="'/detail?Img='+sendDetail.Img+'&price='+sendDetail.price+'&title='+sendDetail.title+'&itemId='+sendDetail.itemId">
            <div>
                <i class="iconfont icon-fanhui"></i>
            </div>
          </router-link>
          <div style="font-size:0.3rem">所有评价</div>
          <div>
              <i class="iconfont icon-gouwuche"></i>
          </div>
      </div>
      <div class="commentList">
          <commentList/>
      </div>
      
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import commentList from "../template/comment-List/comment-List"
export default {
    computed:{
        ...mapGetters([
            'sendDetail'
        ])
    },
    components:{
        commentList
    }
}
</script>

<style lang="less" scoped>
    .container{
        background-color: #e7e7e7;
        .bar{
            font-size: 0.2rem;
            height: 0.6rem;
            background-color: white;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            color: #929090;
            border-bottom: 0.01rem solid #dad7d7;
            padding-top:0.2rem;
            padding-bottom: 0.1rem;
            div{
                height: 0.6rem;
                line-height: 0.6rem;
                i{
                    font-size: 0.4rem;
                }
            }
            
        }
    }
    
</style>

