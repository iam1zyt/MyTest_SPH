//对所有的api接口进行统一的管理
import requests from "./ajax";
import mockRequests from "./mockAjax";

//三级联动接口
///api/product/getBaseCategoryList  get 无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests({ url: "/api/product/getBaseCategoryList", method: "get" });

//获取banner
export const reqBannerList = () => mockRequests.get("/banner");

//获取Floor组件数据
export const reqFloorList = () => mockRequests.get("/floor");

//获取搜索模块的数据 地址：/api/list 请求方式：post 参数：需要参数
export const reqGetSearchList = (params) =>
  requests({ url: "/api/list", method: "post", data: params });

//获取产品详情信息的接口
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/api/item/${skuId}`, method: "get" });

//将产品添加到购物车中/更新产品个数
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/api/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

//购物车数据
export const reqCartList = () =>
  requests({ url: "/api/cart/cartList", method: "get" });

//删除购物车数据
export const reqDeletCartById = (skuId) =>
  requests({ url: `/api/cart/deleteCart/${skuId}`, method: "delete" });

//修改商品的选中状态
export const reqUpdateCheckedByid = (skuId, isChecked) =>
  requests({ url: `/api/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

//获取验证码
export const reqGetCode = (phone) =>
  requests({ url: `/api/user/passport/sendCode/${phone}`, method: "get" });

//注册
export const reqUserRegister = (data) =>
  requests({ url: "/api/user/passport/register", data, method: "post" });

//登录
export const reqLogin = (data) =>
  requests({ url: "/api/user/passport/login", data, method: "post" });

//获取用户信息【需要带着用户的token向服务器要信息】
export const reqUserInfo = () =>
  requests({ url: "/api/user/passport/auth/getUserInfo", method: "get" });

//退出登录
export const reqLogout = () =>
  requests({ url: "/api/user/passport/logout", method: "get" });

//获取用户地址信息
export const reqAddressInfo = () =>
  requests({
    url: "/api/user/userAddress/auth/findUserAddressList",
    method: "get",
  });

//获取商品清单
export const reqOrderInfo = () =>
  requests({ url: "/api/order/auth/trade", method: "get" });

//提交订单
export const reSubmitOrder = (tradeNo, data) =>
  requests({
    url: `/api/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post",
  });

//获取支付信息
export const reqPayInfo = (orderId) =>
  requests({
    url: `/api/payment/weixin/createNative/${orderId}`,
    method: "get",
  });

//获取订单支付状态
export const reqPayStatus = (orderId) =>
  requests({
    url: `/api/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
  });

//获取个人中心数据
export const reqMyOrderList = (page, limit) =>
  requests({ url: `/api/order/auth/${page}/${limit}`, method: "get" });
