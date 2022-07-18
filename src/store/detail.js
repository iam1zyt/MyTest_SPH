import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
//封装游客身份模块uuid---->生成一个睡觉字符串（不变）
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodIfo:{},
    //游客临时身份
    uuid_token:getUUID()

};
const mutations ={
    GETGOODINFO(state,goodIfo){
        state.goodIfo = goodIfo
    }
};
const actions ={
    //获取产品信息
    async getGoodInfo ({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code == 200){
            commit("GETGOODINFO",result.data)
        }
    },
    //将产品添加到购物车中
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        //加入购物车返回的结果
        //加入购物车以后（发请求）,前台将参数带给服务器
        //服务器写入数据成功，并没有返回数据
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if(result.code==200){
            return  'ok'
        }else{
            //加入购物车失败
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters ={
    //路径导航简化的数据
    categoryView(state){
        return state.goodIfo.categoryView ||{};
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodIfo.skuInfo || {}
    },
    //产品售卖属性
    spuSaleAttrList(state){
        return state.goodIfo.spuSaleAttrList ||{}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}