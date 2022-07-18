import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import store from './store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'

//全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate(){
   Vue.prototype.$bus= this
  },
  router,
  //组件实例的身上多了$store属性
  store
}).$mount('#app')
