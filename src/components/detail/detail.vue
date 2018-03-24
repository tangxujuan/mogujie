<template>
    <div class="detail">
        <!-- 商品详情介绍 -->
        <info/>
        <!-- 评论 -->
        <comment/>
        <!-- 添加购物车 -->
        <footAdd/>
    </div>
</template>

<script>
    import info from '../template/detail-info/detail-info.vue'
    import comment from '../template/comment/comment'
    import footAdd from '../template/datail-footAdd/detail-footAdd'
    export default{
        data(){
            return {
                data:{
                    Img:"",
                    price:"",
                    title:"",
                    itemId:""
                }
            }
        },
        mounted(){
            this.data.Img=this.$route.query.Img;
            this.data.price=this.$route.query.price;
            this.data.title=this.$route.query.title;
            this.data.itemId=this.$route.query.itemId;
            // console.log(this.Img);
            // console.log(this.$route.query);
            // console.log(this.data,1);
            this.$store.dispatch("sendDetail",this.data);
            this.$store.dispatch("sendComment",this.data.itemId);
        },
        
        components:{
            info,
            comment,
            footAdd
        }
    }
</script>

<style scoped lang="less">
    .detail{
        // overflow-y: scroll;
        background-color: rgb(228, 225, 225);
    }
</style>