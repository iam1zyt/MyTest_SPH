//对所有的api接口进行统一的管理
import requests from './requests'
import mockRequests from './mockAjax'

//三级联动接口
///api/product/getBaseCategoryList  get 无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',method:'get'});

//获取banner
export const reqBannerList  = () =>mockRequests.get('/banner')  

//获取Floor组件数据
export const reqFloorList = () =>mockRequests.get('/floor')

//获取搜索模块的数据 地址：/api/list 请求方式：post 参数：需要参数
export const reqGetSearchList = (params) =>requests({url:'/api/list',method:'post',data:params})