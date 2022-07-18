import {reqGetCode,reqUserRegister,reqLogin} from '@/api'
const state={
    code:'',
    token:''
};
const mutations={
    GETCODE(state,code){
        state.code = code
    },
    USERLODIN(state,token){
        state.token=token
    }
};
const actions ={
    //获取验证码
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
       if(result.code==200){
        commit('GETCODE',result.data);
        return 'ok'
       }else{
        return Promise.reject(new Error('faile'))
       }
    },
    //用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //用户登录【token:令牌】
    async userLogin({commit},data){
        let result = await reqLogin(data);
        //服务器下发的token是用户的唯一标识符，经常带着token找服务器要用户信息
        if(result.code==200){
            commit('USERLODIN',result.data.token)
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}