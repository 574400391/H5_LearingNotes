import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'

//newslist
import NewsList from './components/news/NewsList.vue'

var router = new VueRouter({
  routes: [
    //配置路由规则
    {path:'/', redirect: '/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer},
    {path: '/home/newslist', component: NewsList}
  ],
  linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
})

export default router