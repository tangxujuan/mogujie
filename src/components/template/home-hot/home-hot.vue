<template>
    <div class="container">
        <div class="title">
            <span>——</span> 热门市场 <span>——</span>
        </div>
        <div class="hots">
            <div v-for="(item,i) in hot" :key="i">
                <img :src="item.image">
                <p>{{item.title}}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
            "hot"
        ])
    }
}
</script>

<style lang="less" scoped>
    .container{
        margin-top: 0.2rem;
        font-size: 0.25rem;
        background-color: white;
        padding-bottom: 0.3rem;
        .title{
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            span{
                color:gray;
            }

        }
        .hots{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            div{
                width:25%;
                font-size: 0.2rem;
                text-align: center;
                margin-top: 0.1rem;
                img{
                    width: 80%;
                }
                p{
                    text-align: center;
                }
                
            }
        }
        
    }
</style>

