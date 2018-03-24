import Vue from "vue";

const state={
    typeDress:[],
    maitKey:"41888",
    minikey:"10062603",
    sort:"pop",
    sortDress:[],
    sortTitle:[]
    
}
const getters={
    typeDress(state){
        return state.typeDress;
    },
    sortDress(state){
        return state.sortDress;
    },
    sortTitle(state){
        return state.sortTitle;
    }

}
const actions={
    //获取左边标题类别minikey
    getMinikey({commit},minikey=state.miniKey){
        state.miniKey=minikey;
    },
    //衣服top
    getTypeDress( {commit} ,key=state.maitKey){
        console.log(key,1);
        Vue.http.jsonp("https://mce.mogujie.com/jsonp/makeup/3",{
            params:{
                pid:key
            }
        }).then(( {data:{data:{categoryNavigation}}} )=>{
            commit("getTypeDress",categoryNavigation);
            console.log(categoryNavigation,1);
        }).catch(error=>{
            console.log(error);
        })
    },
    //bottom标题
    getSortTitle({ commit }){
        Vue.http.jsonp("https://list.mogujie.com/search",{
            params:{
                cKey:"h5-cube",
                fcid:50003

            }
        }).then(( {body:{result:{sortFilter}}} )=>{
            commit("getSortTitle",sortFilter);
            // console.log(1);
            // console.log(sortFilter);
        }).catch(error=>{
            console.log(error);
        })
    },
    //商品bottom
    getSort({ commit },sort=state.sort){
        state.sort=sort;
        console.log(state.miniKey);
        Vue.http.jsonp("https://list.mogujie.com/search",
        {
            params:{
                cKey:"h5-cube",
                fcid:state.miniKey,
                sort
            }
        }).then(({data})=>{
            commit("getSort",data.result.wall.docs);
        }).catch(error=>{
            console.log(error);
        })

    }
}
const mutations={
    getTypeDress(state,data){
        state.typeDress=data.list;
    },
    getSort(state,data){
        state.sortDress=data;
    },
    getSortTitle(state,data){
        state.sortTitle=data;
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}