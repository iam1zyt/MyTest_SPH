import {reqAddressInfo,reqOrderInfo} from '@/api'
const state = {
    address:[],
    OrderInfo:{}
};
const mutations = {
    GETUSERADDRESS(state,address){
        state.address = address
    },
    GETORDERINFO(state,OrderInfo){
        state.OrderInfo = OrderInfo;
    }
};
const actions = {
    //获取用户地址信息
    async getUSerAddress({commit}){
        let result  = await reqAddressInfo();
        if(result.code==200){
            commit('GETUSERADDRESS',result.data)
        }
    },
    //获取商品清单数据
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code==200){
            commit('GETORDERINFO',result.data)
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