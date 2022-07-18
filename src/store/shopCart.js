import { reqCartList, reqDeletCartById, reqUpdateCheckedByid } from "@/api";
const state = {
  cartList: [],
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  //获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  //删除购物车产品
  async deletCartListBySkuId({ commit }, skuId) {
    let result = await reqDeletCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //修改购物车某一个产品的选中状态
  async UpdateCheckedByid({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //删除全部勾选的产品

  async deleteAllCheckedCart({ dispatch, getters }) {
    //context:小仓库，commit、getters、dispatch、state
    //获取购物车中全部的产品(数组)
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise =
        item.isChecked == 1 ? dispatch("deletCartListBySkuId", item.skuId) : "";
      //将每一次返回的Promise添加到数组中
      PromiseAll.push(promise);
    });
    //只要全部的p1|p2..都成功，返回结果即为成功、Promise.all([p1,p2,p3,...])
    //如果有一个失败，返回结果为失败
    return Promise.all(PromiseAll);
  },
  //修改全部产品的状态
  updateAllCartISChecked({ dispatch, state }, isChecked) {
    //数组
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("UpdateCheckedByid", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
  //计算出来的购物车数据
  cartInfoList(state) {
    return state.cartList.cartInfoList || [];
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
