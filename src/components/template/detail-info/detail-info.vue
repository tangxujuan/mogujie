<template>
    <div class="info">
        <div class="img1">
            <img :src="sendDetail.Img" alt="" style="height:8rem">
        </div>
        <div class="img2">
            <img src="https://s11.mogucdn.com/mlcdn/c45406/180316_75538ff4ij5ah01f4he380381agg3_1125x120.jpg" alt="">
        </div>
        <div class="text">
            <p class="title"><span>{{ sendDetail.title }}</span></p>
            <div class="price">
                <span class="code">¥</span>
                <span>{{ sendDetail.price }}</span>
            </div>
            <p class="free">免邮费<span style="float:right;margin-right:0.8rem;">广东省广州市</span></p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default{
        computed:{
            ...mapGetters([
                'sendDetail'
            ])
        }
    }
</script>

<style scoped lang="less">
    .info{
        width:100%;
        background-color: white;
        img{
            width:100%;
        }
       .img2{
           margin-top:-0.4rem;
       }
       .text{
           margin:0.1rem 0.3rem;
           .title{
                font-size: 0.28rem;
                font-weight: 450;
                height:0.35rem;
                line-height: 0.35rem;
                padding-bottom:0.3rem;
            }
            .price{
                font-size: 0.5rem;
                margin-top: 0.5rem;
                font-weight: 550;
                .code{
                    font-size: 0.1rem;
                    display:inline-block;
                    position: relative;
                    top:-0.2rem;
                    font-weight:bold;
                }
            }
            .free{
                font-size: 0.2rem;
                color:rgb(102, 99, 99);
                margin-top: 0.35rem;
                padding-bottom: 0.2rem;
            }
       }
       
    }
</style>