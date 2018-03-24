import Vue from "vue";

const state={
    sendDetail:[],
    commentList:[]
}
const getters={
    //产品信息
    sendDetail(state){
        return state.sendDetail;
    },
    //全部评价
    lists(state){
        return state.commentList;
    },
    // 部分评价
    some(state){
        return state.commentList.slice(0,3);
    }
}
const actions={
    sendDetail({ commit }, data){
        commit("sendDetail",data);
    },
    sendComment({ commit }, Id){
        console.log(Id);
        Vue.http.jsonp("https://rate.mogujie.com/h5/rate/jsonp/x6.rate.ratelist/v1",{
            params:{
                itemId:Id
            }
        }).then(({data:{data:{list}}})=>{
            // console.log(list,1);
            commit("sendComment",list);
        }).catch(error=>{
            console.log(error);
        })
        
    }
}
const mutations={
    sendDetail(state,data){
        state.sendDetail=data;
        console.log(state.sendDetail);
    },
    sendComment(state,data){
        state.commentList=data;
        // console.log(state.commentList);
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}