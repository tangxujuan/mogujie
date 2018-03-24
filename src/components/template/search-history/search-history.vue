<template>
    <div>
        <div class="title">
            <div>
                <i class="iconfont icon-icon-"></i>
                <font>历史搜索</font>
            </div>
            <div class="del">
                <i class="iconfont icon-shanchu" @click="delHistory()"></i>
            </div>
        </div>
        <div class="content">
            <router-link v-for="(item,i) in history" :key="i" :to="'/searchDetail?q='+item" tag="div">
                {{item}}
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters([
            "history"
        ])
    },
    methods:{
        delHistory(){
            this.$store.dispatch('delHistory');
        }
    }
}
</script>

<style lang="less" scoped>
    .title{
        padding-top: 0.1rem;
        border-top:0.01rem solid #eeecec;
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        color: #999595;
        div{
            width: 40%;
        }
        .del{
            text-align: right;
        }
    }
    .content{
        width: 90%;
        display:flex;
        margin-left: 5%;
        flex-wrap: wrap;
        div{
            margin-top:0.2rem;
            margin-right: 0.2rem;
            font-size: 0.2rem;
            height: 0.4rem;
            line-height: 0.4rem;
            padding-left: 0.1rem;
            padding-right: 0.1rem;
            border:0.01rem solid #eeecec;
            border-radius: 0.1rem;
        }
    }
</style>

