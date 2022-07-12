//对所有的api接口进行统一的管理
import requests from './requests'

//三级联动接口
///api/product/getBaseCategoryList  get 无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',method:'get'});
    