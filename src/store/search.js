//search模块的小仓库
import {reqGetSearchList} from '@/api'
const state = {
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({commit},params){
    let result =  await reqGetSearchList(params)
    if(result.code==200){
        commit("GETSEARCHLIST",result.data)
    }
    }
};
const getters = {
    //当前形参是当前仓库的state
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}