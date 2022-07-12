import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

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
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true},
        }
        ,
        {
            path:"/login",
            component:Login,
            meta:{show:false}

        }
        ,
        {
            path:"/register",
            component:Register,
            meta:{show:false}

        }
        ,
        {
            name:"search",
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            
        },
        //重定向，在项目跑起来时。访问/，立马定向到首页
        {
            path:'',
            redirect:'/home'
        }
    ]
})