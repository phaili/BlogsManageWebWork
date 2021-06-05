// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routers from './routers'


//配置axios
axios.defaults.baseURL="https://myblogs-77703-default-rtdb.firebaseio.com"
// 阻止显示生产模式的消息。
Vue.config.productionTip = false

// 使用vueResource
// Vue.use(VueResource) 
Vue.use(VueRouter)

//自定义全局指令
// Vue.directive('rainbow',{
//   //el代表当前元素, binding为调用指令时传递的参数
//   bind(el,binding,vnode){
//     el.style.color = '#'+ Math.random().toString(16).slice(2,8);
//   }
// })
// binding为调用指令时双引号中传递的参数
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
        el.style.maxWidth = "1260px";
    }
    else if(binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    // binding.arg中就是传递过来的：后的参数。
    if(binding.arg == 'column'){
      el.style.background = '#CDC8B1'
      el.style.padding = '20px'
    }
  }
})


//创建路由
const router = new VueRouter({
    routes: Routers,
    //去掉/#号
    mode: 'history'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
