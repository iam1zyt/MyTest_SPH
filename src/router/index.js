import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "./routes";
import store from "@/store";

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push与replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    //call||apply区别
    //相同：都可以调用函数一次，都可以篡改函数的上下文一次
    originPush.call(this, location, resolve, reject);
    //不同点：call与apply传递参数：call逗号隔开，apply方法执行
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
let router = new VueRouter({
  //配置路由
  routes,
  scrollBehavior() {
    //y=0 代表滚动条在最上方
    return { y: 0 };
  },
});

//全局前置守卫
router.beforeEach(async (to, from, next) => {
  //to:可以获取到你想要跳转到的那个路由信息
  //from：获取到从哪个路由而来
  //next:放行函数 next()放行  next('/login)放行到指定位置 next(false)
  // next();
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    if (to.path == "/login") {
      next("/home");
    } else {
      //登陆了，但去的不是login
      //如果用户名已有
      if (name) {
        next();
      } else {
        //没有用户信息、派发action让仓库存储用户信息再跳转
        try {
            //获取用户信息成功
        await store.dispatch("getUserInfo");
        next();
        } catch (error) {
            //token过期获取不到用户信息
            //清除token
            await store.dispatch('UserLogout');
            next('/login')
            alert(error.message)
        }
      }
    }
  } else {
    //未登录:不能去交易相关的页面【trade】、支付相关【pay、paysuccess】、个人中心[center]
    let toPath = to.path;
    if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1 ||  toPath.indexOf('/center')!=-1){
      //把未登录时未跳转成的信息存储在地址栏中【路由】78
      next('/login?redirect='+toPath)
    }else{
      next();
    }
  }
});

export default router;
