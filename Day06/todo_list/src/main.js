import Vue from 'vue'
import todo_list from './todo_list.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(todo_list)
}).$mount('#app')
