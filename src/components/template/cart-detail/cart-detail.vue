<template>
    <div class="cart">
        <div class="container" v-for="(item,i) in cartList" :key="i">
            <div class="left">
                <input type="checkbox" v-model="item.flag" @change="addPrice(item.data.itemId)">
            </div>
            <div class="img">
                <img :src="item.data.Img">
            </div>
            <div class="right">
                <div class="title">
                    {{item.data.title}}
                </div>
                <div class="bot">
                    <span class="price">￥{{item.data.price}}</span>
                    <div class="shuliang">
                        <span class="num add"  @click="reduce(item.data.itemId)">-</span>
                        <span class="num">×{{item.num}}</span>
                        <span class="num reduce"  @click="add(item.data.itemId)">+</span>
                    </div>
                    <i class="iconfont icon-shanchu" @click="doDelete(item.data.itemId)"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
            "cartList"
        ])
    },
    methods:{
        //添加
        add(itemId){
            this.$store.dispatch("add",itemId);
        },
        //减少
        reduce(itemId){
            this.$store.dispatch("reduce",itemId);
        },
        //删除
        doDelete(itemId){
            this.$store.dispatch("doDelete",itemId); 
        },
        //购买结算
        addPrice(itemId){
             this.$store.dispatch("addPrice",itemId);
        }
    }
}
</script>

<style lang="less" scoped>
    .cart{
        margin-bottom: 1.8rem;
        .container{
            font-size: 0.2rem;
            background-color: white;
            display:flex;
            justify-content: space-between;
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            border-top: 0.01rem solid #dad7d7;
            div{
                margin-right: 0.1rem;
            }
            .left{
                text-align: center;
                width: 10%;
            }
            .img{
                text-align: center;
                width: 20%;
                img{
                    width: 100%;
                    height:1.5rem !important;
                    margin-top:0.15rem !important;
                }

            }
            .right{
                width: 70%;
                .title{
                    margin-top:0.1rem;
                    margin-bottom:1rem;
                    line-height: 0.25rem;
                }
                .bot{
                    .shuliang{
                        // width: 2rem;
                        margin-left: 2rem;
                        padding-right:0.3rem;
                        display:inline;
                        border: 1px solid #ccc;
                    }
                    .price{
                        font-size: 0.3rem;
                    }
                    i,.num{
                        color: rgb(151, 148, 148);
                    }
                    .num{
                        position: relative;
                        left: 0.2rem;
                    }
                    .add,.reduce{
                        color: rgb(83, 81, 81);
                        font-size: 0.3rem;
                    }
                    i{
                        position: absolute;
                        right:0.2rem;
                    }
                }
                
            }
        }
    }
    
</style>

