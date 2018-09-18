var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue11111!'
    }
  })

var app_2 = new Vue({
    el:"#app-2",
    data: {
        message:'页面加载于 ' + new Date().toLocaleString()
    }
})
var app_3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})
var app_4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            {text: "学习js"},
            {text: "学习vue"},
            {text: "学习webpack"}
        ]
    }
})
var app_5 = new Vue({
    el: "#app-5",
    data: {
        message: 'hello, Vue!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// var app5 = new Vue({
//     el: '#app-5',
//     data: {
//       message: 'Hello Vue.js!'
//     },
//     methods: {
//       reverseMessage: function () {
//         this.message = this.message.split('').reverse().join('')
//       }
//     }
//   })