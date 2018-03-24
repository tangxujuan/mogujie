<template>
    <div id="type">
        <!-- 搜索 -->
        <search/>
        <!-- 内容 -->
        <div id="content">
            <div id="typeleft">
                <typeleft/>
            </div>
            <div id="typeright">
                <typerightTop/>
                <typerightBottom/>
            </div>
        </div>

        <!-- 底部导航 -->
        <navbar/>
    </div>
</template>

<script>
    import search from '../template/search/search'
    import typeleft from '../template/type-left/type-left'
    import typerightTop from '../template/type-rightTop/type-rightTop'
    import typerightBottom from '../template/type-rightBottom/type-rightBottom'
    import navbar from '../navbar/navbar'

    export default{
        components:{
            search,
            typeleft,
            typerightTop, 
            typerightBottom,       
            navbar,
        }
    }
</script>

<style scoped lang="less">
    #type{
        #typeleft{
            width:25%;
            background-color: #f6f6f6;
            float: left;
        }
        #typeright{
            margin-top:0.4rem;
            width:75%;
            float: right;
        }
    }
    
</style>
