<template>
    <div class="container">
        <div class="title">
            <span>——</span> 猜你喜欢 <span>——</span>
        </div>
        <div class="likes">
            <div v-for="(item ,i ) in like" :key="i">
                <img :src="item.show.img">
                <p class="props">
                    <span v-for="(prop ,i ) in item.props" :key="i">{{prop}}  </span>
                </p>
                <p class="price">{{item.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
            "like"
        ])
    },
    mounted(){
        this.$store.dispatch("getlike");
    }
}
</script>

<style lang="less" scoped>
    .container{
        margin-top: 0.2rem;
        margin-bottom: 1rem;
        font-size: 0.25rem;      
        .title{
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            span{
                color:gray;
            }

        }
        .likes{
            background-color: white;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            div{
                width:50%;
                text-align: center;
                margin-top:0.2rem;
                img{
                    width: 80%;
                    height:3.5rem;
                }
                .props{
                    height: 1rem;
                    overflow: hidden;
                    font-size: 0.2rem;
                    width: 76%;
                    margin-top:0.1rem;
                    margin-left: 12%;
                    text-align: left;
                    line-height: 0.3rem;
                    color: gray;
                }
                .price{
                    margin-left: 12%;
                    width: 76%;
                    text-align: left;
                    font-weight: bold;
                    margin-top: 0.1rem;
                }
            }
        }
       
        
    }
</style>

