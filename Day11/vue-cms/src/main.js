import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import App from './App.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// import './lib/mui/js/mui.min.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})