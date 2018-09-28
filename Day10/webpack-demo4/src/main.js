import Vue from 'vue'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
import login from './login.vue'

import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
import component1 from './subcom/component1.vue'
import component2 from './subcom/component2.vue'

import './lib/mui/css/mui.css'//导入mui的样式表
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [{
      path: '/account',
      component: account,
      children: [{
          path: 'component1',
          component: component1
        },
        {
          path: 'component2',
          component: component2
        }
      ]
    },
    {
      path: '/goodslist',
      component: goodslist
    }
  ]
})
var vm = new Vue({
  el: '#app',
  render: c => c(login),
  router

})