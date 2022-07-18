//对axios进行二次封装
import axios from 'axios'
//引入进度条
import nProgress from 'nprogress';
//start:进度条开始  done:进度条结束
//引入进度条样式
import "nprogress/nprogress.css"
//引入store仓库
import store from '@/store';


//用axios对象的方法，创建一个axios实例
 const requests = axios.create({
    //配置对象
    //基础路径，发请求的时候，路径当中会出现api
    baseURL:"/api",
    //请求超时的时间
    timeout:5000,

});

//请求拦截器：在发请求之前，请求拦截器可以监测到
requests.interceptors.request.use((config)=>{
    //config:配置对象，对象里面有一个header请求头
    //进度条开始
    if(store.state.detail.uuid_token){
        //给请求头添加字段
        config.headers.userTempId =store.state.detail.uuid_token
    }
    nProgress.start();
    return config;
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数
    nProgress.done();
    return res.data;
},(error)=>{
    //响应失败的回调
    return Promise.reject(new Error('faile'),error);
})

export default requests