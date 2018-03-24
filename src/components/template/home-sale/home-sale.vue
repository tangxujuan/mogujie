<template>
  <div class="container">
      <div class="title">
          超实惠－促销直达
      </div>
      <div class="top">
          <div class="left" v-for="(item,i) in saleleft" :key="i">
              <p class="title">{{item.title}}</p>
              <p class="vice">{{item.viceTitle}}</p>
              <img :src="item.image">
          </div>
           <div class="right">
             <div class="right-container" v-for="(right,i) in saleright" :key="i">
                 <div class="content">
                    <p class="title">{{right.title}}</p>
                    <p class="vice">{{right.viceTitle}}</p>
                 </div>
                <div class="img">
                    <img :src="right.image">
                </div>
            </div>
            
          </div>
      </div>
      <div class="bot">
          <div class="bot-content" v-for="(bot,i) in salebot" :key="i">
                <p class="title">{{bot.title}}</p>
                <p class="vice">{{bot.viceTitle}}</p>
                <img :src="bot.image">
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    computed:{
       ...mapGetters([
          "saleleft",
          "saleright",
          "salebot"
      ])
    }
}
</script>

<style lang="less" scoped>
    .container{
        margin-top:0.2rem;
        background-color: white;
        font-size: 0.25rem;
        .title{
            height: 0.8rem;
            line-height: 0.8rem;
            padding-left: 3%;
           
        }
        .top{
            border-top:0.01rem solid #e7e7e7;
            height: 2.5rem;
            background-color: white;
            display: flex;
            justify-content: space-around;
            .left{
                border-bottom:0.01rem solid #e7e7e7;
                border-right:0.01rem solid #e7e7e7;
                height: 100%;
                width: 49.5%;
                text-align: center;
                overflow: hidden;
                .title{
                   font-size:0.25rem;
                   margin-bottom: -0.14rem;
                   font-weight: bold;
                }
                .vice{
                    color: #f72c73;
                    font-size: 0.2rem;
                }
                img{
                    height: 1.6rem;
                }
            }
            .right{
                width: 49%;
                height: 100%;
                .right-container{
                    height: 50%;
                    overflow: hidden;
                    border-bottom:0.01rem solid #e7e7e7;
                    .content{
                        height: 100%;
                        float: left;
                        width: 60%;
                        .title{
                            font-size:0.25rem;
                            margin-bottom: -0.14rem;
                            font-weight: bold;
                        }
                        .vice{
                            color: #f72c73;
                            font-size: 0.2rem;
                        }
                    }
                    .img{
                        float: left;
                        width: 35%;
                        height: 100%;
                        img{
                            width: 90%;
                        }
                    }
                }
            }
        }
        .bot{
            display: flex;
            justify-content: space-around;
            .bot-content{
                text-align: center;
                width: 30%;
                border-right:0.01rem solid #e7e7e7;
                .title{
                    font-size:0.25rem;
                    margin-bottom: -0.14rem;
                    font-weight: bold;
                }
                .vice{
                    color: #f72c73;
                    font-size: 0.2rem;
                }
                img{
                    height: 1rem;
                    padding-bottom: 0.2rem;
                }
            }
        }
    }
</style>

