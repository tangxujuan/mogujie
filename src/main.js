// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 加载Vue 的核心
import Vue from 'vue'
// 加载自定义组件
import App from './App'
// 加载自定义 路由模块
import router from "./router/index"

import http from 'vue-resource'
Vue.use(http);

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

// store数据仓库
import store from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
