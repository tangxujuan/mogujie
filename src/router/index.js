import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);

import home from '../components/home/home.vue'
import type from '../components/type/type.vue'
import cart from '../components/cart/cart.vue'
import my from '../components/my/my.vue'
import searchPage from '../components/searchPage/searchPage'
import searchDetail from '../components/search-detail/search-detail'
import commentDetail from '../components/comment-detail/comment-detail'
import detail from '../components/detail/detail'

export default new Router({
    routes:[
        {
            path:"/",
            name:"home",
            component:home
        },
        {
            path:"/type",
            name:"type",
            component:type
        },
        {
            path:"/cart",
            name:"cart",
            component:cart
        },
        {
            path:"/my",
            name:"my",
            component:my
        },
        {
            path:"/search",
            name:"search",
            component:searchPage
        },
        {
            path:"/searchDetail",
            name:"searchDetail",
            component:searchDetail
        },
        {
            path:"/commentDetail",
            name:"commentDetail",
            component:commentDetail
        },
        {
            path:"/detail",
            name:"detail",
            component:detail
        }
    ]
})