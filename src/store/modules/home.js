import Vue from "vue";

const state={
    bannerlist:[],
    shoplist:[],
    salelist:[],
    hotlist:[],
    likelist:[],
    typelist:[]
}
const getters={
    banner(state){
        return state.bannerlist;
    },
    shop(state){
        return state.shoplist;
    },
    saleleft(state){
        return state.salelist.slice(0,1);
    },
    saleright(state){
        return state.salelist.slice(1,3);
    },
    salebot(state){
        return state.salelist.slice(3);
    },
    hot(state){
        return state.hotlist;
    },
    like(state){
        return state.likelist;
    },
    typeTitle(state){
        return state.typelist;
    }
}
const actions={
    //轮播图,商品分类，超实惠，热门，typeTitle
    getBanner( {commit} ){
        Vue.http.jsonp("https://mce.mogucdn.com/jsonp/multiget/3",
        {
            params:{
                pids:"51822,106930,51833,51836,41789"
            }
        }).then(( {data:{data}} )=>{
            commit("getBanner",data)
            // console.log(data);
        });
    },
    //猜你喜欢
    getlike( {commit} ){
        Vue.http.jsonp("https://list.mogujie.com/search",
        {
            params:{
                pids:"9750",
                sort:"pop"
            }
        }).then(( {data:{result:{wall}}} )=>{
            commit("getlike",wall.list)
        });
    }
}
const mutations={
    getBanner(state,data){
        state.bannerlist=data["51822"].list
        state.shoplist=data["106930"].list
        state.salelist=data["51833"].list
        state.hotlist=data["51836"].list
        state.typelist=data["41789"].list
        //  console.log(state.typelist)
     },
      //猜你喜欢
     getlike(state,data){
         state.likelist=data;
        //  console.log( state.likelist);
     }
}
export default{
    state,
    getters,
    actions,
    mutations
}