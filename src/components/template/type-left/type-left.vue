<template>
    <div class="container">
        <div class="title" v-for="(item,i) in typeTitle" :key="i" @click="doChange(item.maitKey,item.miniWallkey,i)" :class="flag==i?'color':''">
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
                flag:0
            }
        },
        computed:{
            ...mapGetters([
                "typeTitle",
            ])
        },
        mounted(){
            this.$store.dispatch("getBanner");
        },
        methods:{
            doChange(key1,key2,i){
                this.flag=i;
                this.$store.dispatch("getTypeDress",key1);
                this.$store.dispatch("getSort");
                this.$store.dispatch("getMinikey",key2);

            }
        }
    }

</script>

<style scoped lang="less">
    .container{
        width:25%;
        position: fixed;
        left: 0;
        top: 0.8rem;
        height: 90%;
        overflow-y: scroll;
        .title{
            height:0.8rem;
            background-color: #f6f6f6;
        p{
            font-size: 0.25rem;
            padding-top: 0.05rem;
            text-align: center;
            line-height: 0.3rem;
            position: relative;
            top: 0.2rem;
        }
    }
    }
    .color{
        color:red;
        background-color: white !important;
        p{
            border-left: 4px solid red;
            height: 0.3rem;

           
        }
    }
</style>
