<template>
    <div>
        <div class="container" v-for="(item,i) in lists" :key="i">
            <div class="left">
                <img :src="item.user.avatar" alt="" >
            </div>
            <div class="right">
                <p class="name">{{ item.user.uname }}</p>
                <p class="comment">{{ item.content }}</p>
                <p class="detail">
                    <span>{{ item.time }}</span>
                    <span>{{ item.style }}</span>
                    <span>规格:18g</span>
                </p>
                <img :src="img" alt="" v-for="(img,i) in item.images" :key="i" >
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        computed:{
            ...mapGetters([
                "lists"
            ])
        }
    }
</script>

<style lang="less" scoped>
    .container{
        padding: 0.2rem;
        display: flex;
        justify-content: space-around;
        background-color: white;
        font-size: 0.2rem;
        border-bottom: 0.01rem solid #dad7d7;
        .left{
            width: 18%;
            img{
                width: 80%;
            }
        }
        .right{
            width: 80%;
            p{
                margin-top: 0.1rem;
            }
            .name{
                font-size: 0.28rem;
            }
            .comment{
                color: rgb(83, 81, 81);
                line-height: 0.3rem;
            }
            .detail{
                color: rgb(153, 151, 151);
            
            }
            img{
                width: 30%;
                height:1.5rem;
                margin-top:0.2rem;
                margin-right:0.1rem;
            }
        }
        
    }
</style>

