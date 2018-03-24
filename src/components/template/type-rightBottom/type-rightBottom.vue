<template>
    <div id="top">
        <div class="title">
            <div v-for="(item,i) in sortTitle" :key="i" @click="getsort(item.sortKey)">
                <span>{{item.title}}</span>
            </div>
        </div>

        <div class="content">
            <router-link  tag="div" :to="'/detail?Img='+item.img+'&price='+item.price+'&title='+item.title+'&itemId='+item.tradeItemId" class="imgdetail" v-for="( item,i ) in sortDress" :key="i">
                <img :src="item.img" alt="">
                <p class="text-title">{{ item.title }}</p>
                <div>
                    <p class="price">￥{{ item.price }}</p>
                    <p class="point">
                        {{ item.sale }}
                        <i class="iconfont icon-star"></i>
                    </p>
                </div>
            </router-link>
        </div>    
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters([
                "sortDress",
                "sortTitle"
            ])
        },
        methods:{
            getsort(sortkey){
                // console.log(sortkey,1);
                this.$store.dispatch("getSort",sortkey);
            }
        },
        mounted(){
            this.$store.dispatch("getSort");
            this.$store.dispatch("getSortTitle");
        }
    }
</script>

<style scoped lang="less">
    #top{
        text-align: center;
    }
    .title{
        margin-top: -0.2rem;
        border-bottom: 1px solid #ccc;
        div{
            width:25%;
            display:inline-block;
            span{
                font-size: 0.3rem;
                display: inline-block;
                border-left: 1px solid #ccc;
                padding-left: 0.3rem;
            }
        }
    }
    .content{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
        .imgdetail{
            width:45%;
            background-color: rgb(250, 244, 244);
            margin-top: 0.2rem;
            margin-bottom:0.1rem;
            img{
                width:100%;
                height:2.5rem;
            }
            .text-title{
                width:90%;
                font-size: 0.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-top:0.15rem;
                margin-left:0.1rem;
            }
            .price{
                width:45%;
                margin-top:0.15rem;
                float: left;
                color:red;
                font-size:0.2rem;
                // margin-left:0.1rem;
                margin-top: 0.2rem;
            }
            .point{
                width:45%;
                margin-top:0.15rem;
                float: right;
                font-size: 0.2rem;
                color:rgb(134, 131, 131);
            }
        }
    }
    
</style>