import { reqBannerList, reqCategoryList ,reqFloorList} from "@/api";
//search模块的小仓库
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]

};
const mutations = {
    CATRGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GRTFLOORLIST(state,floorList){
        state.floorList = floorList
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
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqBannerList();
        if(result.code == 200){
            commit("GETBANNERLIST",result.data)
        }
    },
    //获取floor数据
    async getFloorList({commit}){
        let result  = await reqFloorList();
        if(result.code == 200){
            commit("GRTFLOORLIST",result.data)
        }
    }
    
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}