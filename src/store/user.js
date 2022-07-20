import {
  reqGetCode,
  reqUserRegister,
  reqLogin,
  reqUserInfo,
  reqLogout,
} from "@/api";
import { setToken, getToken ,removeToken} from "@/utils/token";
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLODIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  //清除本地数据
  CLEAR(state){
    state.token ='';
    state.userInfo={};
    removeToken();
  }
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //用户注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    console.log(result);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //用户登录【token:令牌】
  async userLogin({ commit }, data) {
    let result = await reqLogin(data);
    //服务器下发的token是用户的唯一标识符，经常带着token找服务器要用户信息
    if (result.code == 200) {
      //已经登录成功并且获取到了token
      commit("USERLODIN", result.data.token);
      //持久化存储token
      // localStorage.setItem('TOKEN',result.data.token)
      setToken(result.data.token);
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
  //退出登录
  async UserLogout({ commit }) {
    //向服务器发请求清除用户信息
    let result = await reqLogout();
    //actions中不能直接操作state，需要提交到mutation中修改state
    if(result.code==200){
      commit('CLEAR')
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
};
const getters = {};
export default {
  namespace:true,
  state,
  mutations,
  actions,
  getters,
};
