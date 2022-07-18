import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import  routes from './routes'

let originPush = VueRouter.prototype.push;
let originReplace =  VueRouter.prototype.replace

//重写push与replace
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        //call||apply区别
        //相同：都可以调用函数一次，都可以篡改函数的上下文一次
        originPush.call(this,location,resolve,reject)
        //不同点：call与apply传递参数：call逗号隔开，apply方法执行
    }else{
        originPush.call(this,location,()=>{},()=>{});

    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}
export default new VueRouter({
    //配置路由
    routes,
    scrollBehavior(){
        //y=0 代表滚动条在最上方
        return {y:0}
    }
})