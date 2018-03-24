<template>
    <div class="seach-container">
        <router-link to="/" tag="div" class="back">
            <div >
                <i class="iconfont icon-fanhui"></i>
            </div>
        </router-link>
       
        <div class="search">
            <input type="text"  v-model="q">
        </div>
        <router-link tag="div" :to="'/searchDetail?q='+q" class="delete">
            搜索
        </router-link>
    </div>
</template>

<script>

export default {
    data(){
        return {
            q:"连衣裙"
        }
    }
    
}
</script>

<style lang="less" scoped>
    .seach-container{
        font-size: 0.2rem;
        height: 1rem;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        color: #b3b1b1;
        div{
            height: 1rem;
            line-height:1rem;
            text-align: center;
        }
        .back,.delete{
            width: 15%;
            color: #b3b1b1;
        }
        .search{
            width: 70%;
            input{
                width: 90%;
                outline: 0;
                border:0.01rem solid #b3b1b1;
                height: 0.4rem;   
                padding-left: 0.2rem;
                border-radius: 0.1rem;
            }
        }
    }
   
</style>

