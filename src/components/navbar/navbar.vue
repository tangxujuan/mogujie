<template>
    <div id="navbar">
        <router-link tag="div" to="/">
            <div>
                <i class="iconfont icon-home"></i>
                <p>首页</p>
            </div>
        </router-link>
        <router-link tag="div" to="/type">
            <div>
                <i class="iconfont icon-fenlei"></i>
                <p>分类</p>
            </div>
        </router-link>
        <router-link  tag="div" to="/cart">
            <div>
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
            </div>
        </router-link>
        <router-link  tag="div" to="/my">
            <div>
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="less">
#navbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  padding-bottom: 0.1rem;
  z-index:100;
  background-color: white;
  text-align: center;
  div {
    width: 1rem;
    margin-top: -0.2rem;
    p {
      font-size: 0.2rem;
    }
  }
  i {
    font-size: 0.35rem;
  }
}
</style>
