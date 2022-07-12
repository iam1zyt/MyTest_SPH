import { reqCategoryList } from "@/api";
//search模块的小仓库
const state = {
    categoryList:[]
};
const mutations = {
    CATRGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }

};
const actions = {
    //通过API里的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit("CATRGORYLIST",result.data);
        }
    },
    
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}