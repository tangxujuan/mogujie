import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);


import home from './modules/home'
import cart from './modules/cart'
import type from './modules/type'
import search from './modules/search'
import detail from './modules/detail'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
export default new Vuex.Store({
    actions,
    getters,
    mutations,
    modules:{
        home,
        cart,
        type,
        search,
        detail
    }
})