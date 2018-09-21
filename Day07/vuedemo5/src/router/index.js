import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

//如果需要增加组件那就在components文件下定义xx.vue文件并编写代码即可，
//如果需要配置路由就要进行在index.js进行路由“路径”配置，
//还需要点击跳转就要用到<router-link></router-link>标签了。
//至于后面的过滤器啊，事件啊，钩子函数，ajax等等之类的和vue1.0差不多就不一一叙述
//但是会在用到的时候简单说明一下的。我会用下面大约俩个章节来展示一个简单的“小项目”。

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
