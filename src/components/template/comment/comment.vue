<template>
    <div class="comment">
        <div class="wid">
            <div class="text">
                <router-link tag="div" to="/commentDetail">
                    <p class="t" style="font-size:0.25rem;margin-top:0.2rem">
                        买家评论<span>4574</span>｜销量<span>3264</span>
                        <span class="right">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></span>
                    </p>
                </router-link>
            </div>  
            <div class="content" v-for="(item ,i) in some" :key="i">
                <div class="content-title">
                    <img :src="item.user.avatar" alt="">
                    <span>{{ item.user.uname }}</span>
                </div>
                <div class="details">
                    <p>{{item.content}}</p>
                    <p> {{item.time}}</p>
                    <p class="detail">{{item.style}}</p>
                    <img v-for="(img,index) in item.images" :key="index" :src="img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters([
                'some'
            ])
        }
    }
</script>

<style scoped lang="less">
    .comment{
        padding:0.2rem;
        background-color: white;
        font-size: 0.2rem;
        margin-bottom: 0.8rem;
        .wid{
            width:90%;
            margin:auto;
        }
        .text{
            color: gray;
            margin-bottom: 0.2rem;
            display: flex;
            justify-content: space-between;
        }
        .content{
            margin-top:0.2rem;
            border-top: 0.01rem solid rgb(216, 215, 215);
            padding-top: 0.2rem;
            .content-title{
                img{
                    width: 0.6rem;
                    border-radius: 0.8rem;

                }
                span{
                    position: relative;
                    top:-0.2rem;
                    font-size: 0.2rem;
                }
            }
            .details{
                p{
                    margin-top:0.1rem;
                    color: rgb(83, 81, 81);
                    line-height: 0.3rem;
                    // text-indent: 2em;
                }
                .detail{
                    color: rgb(153, 151, 151);
                }
                img{
                    width: 28%;
                    margin-top:0.2rem;
                    margin-right: 0.1rem;
                    height:1.5rem;
                }
            }
        }
    }
</style>