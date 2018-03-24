const state={
   cart:{
       //商品信息Img,price,title,itemId
       data:{},
       num:1,
       //选中状态
       flag:false,
       //同类商品总价格
       total:0
   },
   cartdel:{},
    //存放itemID
   exists:[],
   //存放cart
   cartList:[],
      //商品总价钱
    price:0
}
const getters={
    cartList(state){
        return state.cartList;
    },
    price(state){
        return state.price;
    }
}
const actions={
    setCart({ commit },data){
        commit("setCart",data);
    },
    add({ commit },itemId){
        commit("add",itemId);
    },
    reduce({ commit },itemId){
        commit("reduce",itemId);
    },
    doDelete({ commit },itemId){
        commit("doDelete",itemId);
    },
    addPrice({ commit },itemId){
        commit("addPrice",itemId);
    }
}
const mutations={
    // 添加到购物车
    setCart(state,data){
        if(state.exists.indexOf(data.itemId)==-1){
            if(data.itemId){
                 state.cart.data=data;
                 state.cart.total=state.cart.data.price*state.cart.num;
                 state.exists.push(data.itemId);
                 state.cartList.push(state.cart);
                 state.cart={
                     data:{},
                     num:1,
                     flag:false,
                     total:0
                 }
            }
        }else{
            let item= state.cartList[state.exists.indexOf(data.itemId)]
            item.num++;
            item.total=item.data.price*item.num;
            //若是选中状态，则价钱加一个
            if(item.flag){
                 state.price+=1*item.data.price;
                 state.price=Math.round(state.price*100)/100;
             }
        }
     },
     //增加个数
    add(state,itemId){
        let item=state.cartList[state.exists.indexOf(itemId)]
        item.num++;
        item.total=item.data.price*item.num;
        console.log(item.total,1);
        //如果是选中状态，则加价钱
        if(item.flag){
            //计算所有商品价格
            state.price+=1*item.data.price;
            //保留一位小数
            state.price=Math.round(state.price*100)/100;
        }
    },
    //减少个数
    reduce(state,itemId){
        //如果是选中状态则价钱减少一个
        if(state.cartList[state.exists.indexOf(itemId)].flag){
            state.price-=1*state.cartList[state.exists.indexOf(itemId)].data.price;
            state.price=Math.round(state.price*100)/100;
        }
        //商品个数减少
        if( state.cartList[state.exists.indexOf(itemId)].num==1){
            var i=state.exists.indexOf(itemId)
            state.price-= state.cartList[i].total;//???
            state.cartList.splice(i,1);
            state.exists.splice(i,1);
            
        }else{
            let item=state.cartList[state.exists.indexOf(itemId)]
            item.num--;
            item.total=item.data.price*item.num;        
        }
    },
    //删除
    doDelete(state,itemId){
        var i=state.exists.indexOf(itemId)
        // 如果是选中状态，则减少此价钱
        if(state.cartList[i].flag){
            state.price-= state.cartList[i].total;
            state.price=Math.round(state.price*100)/100;
        }
        state.cartList.splice(i,1);
        state.exists.splice(i,1);
    },
    //总计
    addPrice(state,itemId){
        var item=state.cartList[state.exists.indexOf(itemId)]
        if(item.flag){
            state.price+=item.total;
        }else{
            state.price-=item.total;
        }
        state.price=Math.round(state.price*100)/100;
        // console.log(state.price);
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}