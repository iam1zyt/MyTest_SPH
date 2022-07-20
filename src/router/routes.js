/* import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
import myOrder from "@/pages/Center/myOrder";
import groupOrder from "@/pages/Center/groupOrder"; */


export default [
  {
    path: "/center",
    component: ()=>import('@/pages/Center'),
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: ()=>import('@/pages/Center/myOrder'),
      },
      {
        path: "grouporder",
        component: ()=>import('@/pages/Center/groupOrder'),
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: ()=>import('@/pages/PaySuccess'),
    meta: { show: true },
  },
  {
    path: "/pay",
    component: ()=>import('@/pages/Pay'),
    meta: { show: true },
     //路由独享守卫
     beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: ()=>import('@/pages/Trade'),
    meta: { show: true },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/shopcart",
    component: ()=>import('@/pages/ShopCart'),
    meta: { show: true },
  },
  {
    path: "/addCartSuccess",
    name: "addCartSuccess",
    component: ()=>import('@/pages/AddCartSuccess'),
    meta: { show: true },
  },
  {
    path: "/detail/:skuId",
    component: ()=>import('@/pages/Detail'),
    meta: { show: true },
  },
  {
    path: "/home",
    component: ()=>import('@/pages/Home'),//路由懒加载
    meta: { show: true },
  },
  {
    path: "/login",
    component: ()=>import('@/pages/Login'),
    meta: { show: false },
  },
  {
    path: "/register",
    component: ()=>import('@/pages/Register'),
    meta: { show: false },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: ()=>import('@/pages/Search'),
    meta: { show: true },
  },
  //重定向，在项目跑起来时。访问/，立马定向到首页
  {
    path: "",
    redirect: "/home",
  },
];
