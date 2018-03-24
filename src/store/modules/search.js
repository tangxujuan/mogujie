import Vue from "vue";
const state={ 
    history:[],
    hotWord:[]
}
const getters={
    //获取搜索历史
    history(){
        return state.history;
    },
    //热门搜索
    hotWord(state){
        return state.hotWord;
    }
    
}
const actions={
    //热门搜索
    getHotWord({ commit }){
        Vue.http.jsonp("https://list.mogujie.com/module/mget",
            {
                params:{
                    code:"sketch,hotWord",
                    platform:"H5"
                }
            }).then(({data:{data:{hotWord}}})=>{
                commit("getHotWord",hotWord.data);
                // console.log(hotWord.data);
            });
    },
    //搜索历史搜索
    setHistory({commit},q){
        commit("setHistory",q)
    },
    //清除历史搜索
    delHistory({commit}){
        commit("delHistory")
    }
}
const mutations={
    //热门搜索
    getHotWord(state,data){
        state.hotWord=data;
        // console.log(state.hotWord);
    },
    //搜索历史
    setHistory(state,q){
       if(state.history.indexOf(q)==-1){
            state.history.push(q);
       }
           
    },
    //清除历史
    delHistory(){
        state.history=[];
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}