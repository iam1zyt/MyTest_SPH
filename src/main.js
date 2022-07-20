import Vue from "vue";
import App from "./App.vue";
import router from "@/router";

import store from "./store";
import "@/mock/mockServe";
import "swiper/css/swiper.css";

//全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

//ElementUI组件
import {MessageBox} from 'element-ui';
//注册全局组件
//另一种注册方式：挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入插件
import VueLazyload from 'vue-lazyload'
import img from '@/assets/1.jpg'
//注册插件
Vue.use(VueLazyload,{
  //懒加载默认图片
  loading:img
})

//引入自定义插件
import myPlugins from "./plugins/myPlugins";
Vue.use(myPlugins,{
  name:'option444'
})

//引入表单检验插件
import '@/plugins/validate'

//统一接收api文件夹里的全部请求函数
import * as API from "@/api";

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  
  },
  router,
  //组件实例的身上多了$store属性
  store,
}).$mount("#app");
