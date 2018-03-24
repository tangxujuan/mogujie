<template>
  <div id="app">
    <router-view></router-view>
    <!-- <detail/> -->
  </div>
</template>

<script>
import home from './components/home/home';
import type from './components/type/type';
import cart from './components/cart/cart';
import my from './components/my/my';
// import detail from './components/template/detail/detail'

export default {
  name: 'App',
  components: {
    home,
    type,
    cart,
    my,
    // detail
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.router-link-exact-active{
  color:#f72c73;
}
</style>
