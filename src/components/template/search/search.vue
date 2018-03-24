<template>
 <div id="search-bar">
    <div id="wx">
        <i class="iconfont icon-weixin"></i>
    </div>

    <router-link tag="div" to="/search">
      <div id="search">
        <div>
        <i class="iconfont icon-icon-"></i>
        <font>毛衣</font>
        </div>
    </div>
    </router-link>

    <div id="cart">
        <i class="iconfont icon-gouwuche"></i>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    #search-bar{
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    color:#bdb8b8;
    border-bottom: 1px solid #ccc;
    position:fixed;
    top:0;
    z-index:100;
    div{
      height:0.8rem;
      text-align: center;
      line-height: 0.4rem;
    }
    i{
      font-size: 0.35rem;
    }
    #wx{
      width: 15%;
    }
    #search{
      height: 0.6rem;
      width: 65%;
      div{
        width:4rem;
        height: 0.5rem;
        line-height: 0.1rem;
        margin-top: 0.15rem;
        text-align: left;
        background-color: #efeded;
        padding-left: 0.1rem;
        border-radius: 0.05rem;
      }
      font{
        font-size: 0.1rem;
        position: relative;
        bottom: 0.04rem;
        left: -0.2rem;
      }
    }
    #cart{
      width: 15%;
    }
  }
</style>

