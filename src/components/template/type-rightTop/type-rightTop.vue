<template>
    <div id="top">
        <a class="dress" v-for="(item,i) in typeDress" :key="i">
            <img :src="item.image">
            <p>{{ item.title }}</p>
        </a>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
        computed:{
            ...mapGetters([
                "typeDress"
            ])
        },
        mounted(){
            this.$store.dispatch("getTypeDress");
        }
    }
</script>

<style scoped lang="less">
    #top{
        margin-top:1rem;
    }
    .dress{
        width:33%;
        display:inline-block;
        text-align: center;
        img{
            width:1.2rem;
            padding-left:0.1rem;
            padding-right:0.1rem;
        }
        p{
            font-size: 0.2rem;
            margin-bottom:0.6rem;
        }
    }
</style>