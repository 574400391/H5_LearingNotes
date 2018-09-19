# Vue实例

## 创建一个vue实例
```
var vm = new Vue({
    //选项
})
```

## 数据与方法
当一个Vue实例被创建时，它向Vue的响应式系统中加入了其data对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”（类似于MVVM模型），即匹配更新为新的值。
```
//数据对象
var data = {a: 1}

//该对象被加入到一个Vue实例中
var vm = new Vue({
    data: data
})

//获得这个实例上的属性
//返回源数据中对应的字段
vm.a == data.a // => true

//设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

//...反之亦然
data.a = 3
vm.a // => 3
```

当这些数据改变时，视图会进行重新渲染。值得注意的是只有当实例被创建时data中存在的属性才是响应式的。

这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。

```
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})
```

```
<div id="app">
    <p>{{ foo }}</p>
    <!-- 这里的foo不会更新 -->
    <button v-on:click="foo = 'baz'">Change it</button>
</div>
```

除了数据属性，Vue实例还暴露了一些游泳的实例属性与方法。它们都有 __$__ 前缀，以便与用户定义的属性区分开。
```
var data = {a: 1}
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById("example") // => true

//$swatch是一个实例方法
vm.$swatch('a', function (newValue, oldValue) {
    //这个回调将在'vm.a'改变后调用
})
```

## 实例生命周期钩子

每个vue实例在被创建时都要经过一系列的初始化过程--例如，需要设置数据监听、编译模板、将实例挂在到DOM并在数据变化时更新DOM等。同时在这个过程中也会运行一些叫做 __生命周期钩子__ 的函数，给用户在不同阶段添加自己代码的机会。

比如 __created__ 钩子可以用来在一个实例被创建之后执行代码：

```
new Vue({
    data: {
        a: 1
    }, 
    created: function () {
        console.log('a is： ' + this.a)
    }
})

// ==> 'a is: 1'
```

## 生命周期图示
![Aaron Swartz](https://cn.vuejs.org/images/lifecycle.png)

----

# 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。


## 插值

----

### 文本
数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
```
<span>Message : {{ msg }}</span>
```
Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。

通过使用 __v-once__ 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：
```
<span v-once>这个将不会改变: {{ msg }}</span>
```

### 原始HTML

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 __v-html__ 指令：
```
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
这个 span 的内容将会被替换成为属性值 rawHtml，直接作为 HTML——会忽略解析属性值中的数据绑定。注意，你不能使用 v-html 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

ps.
```
你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值。
```

### 特性
Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：

```
<div v-bind:id="dynamicId"></div>
```
在布尔特性的情况下，它们的存在即暗示为 true，v-bind 工作起来略有不同，在这个例子中：
```
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 isButtonDisabled 的值是 null、undefined 或 false，则 disabled 特性甚至不会被包含在渲染出来的 \<button> 元素中。


### 使用JavaScript表达式

```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

### v-bind缩写
```
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
```

### v-on缩写
```
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```

----

# 计算属性和侦听器

## 计算属性
对于任何复杂逻辑，你都应当使用计算属性。

### 基础例子
```
<div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```
var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    }, 
    computed: {
        //计算属性的getter
        reversedMessage: function () {
            return this.message.split('').join('')
        }
    }
})
```

### 计算属性 VS 方法
- 计算属性： 计算属性是基于它们的依赖进行缓存的，仅在没有缓存情况下会调用一次。
- 方法： 每当触发重新渲染时，调用方法将总会再次执行函数

### 计算属性 VS 侦听属性
Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。细想一下这个例子：
```
<div id="demo">{{ fullName }}</div>
```
```
var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Wang',
        LastName: 'HL',
        fullName: 'WangHL'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + " " + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + " " + val
        }
    }
})
```

上面的代码是命令式且重复的，将它与计算属性的版本进行比较：
```
var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Wang',
        lastName: 'HL',
        fullName: 'WangHL'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})
```

### 计算属性的setter
计算属性默认只有getter，不过在需要时你可以提供一个setter：
```
//...
computed: {
    get: function () {
        return this.firstName + ' ' + this.lastName
    }
    set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
    }
}
```

现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。

### 侦听器
虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
```
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

```
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```
在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

----

# Class与Style绑定
大体看了下，先跳过，后面有需要再补笔记。

# 条件渲染

## v-if
```
<h1 v-if='ok'>Yes</h1>
<h1 v-else>No</h1>
```

### 在\<template>元素上使用v-if条件渲染分组

v-if是一个指令，必须将它添加到一个元素上。如果想切换多个元素，可以把一个\<template>元素当作不可兼得包裹元素，并在上面使用v-if。最终的渲染结果不包含\<template>元素
```
<template v-if='ok'>
    <h1>Title</h1>
    <p> P 1</p>
    <p> P 2</p>
</template>
```

### v-else-if
```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

### 用 __key__ 管理可复用的元素
Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：
```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```
那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，\<input> 不会被替换掉——仅仅是替换了它的 placeholder。

这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：
```
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
    <label>UserEmail</label>
    <input placeholder="Enter your email" key="email-input">
</template>
```

### v-show
根据条件展示元素的指令。

不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display。

ps.
```
注意，v-show 不支持 <template> 元素，也不支持 v-else。
```

### v-if VS v-show
v-if是‘真正’的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

v-if也是惰性的：如果在初始渲染时条件为假，则什么也不做--直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

### v-if 与 v-for一起使用
当v-if和v-for一起使用时，v-for比v-if有更高的优先级

----

# 列表渲染

### 用v-for把一个数组对应为一组元素
我们用 v-for 指令根据一组数组的选项列表进行渲染。v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。
```
<ul id="example-1">
    <li v-for="item in items">
        {{ item.message }}
    </li>
</ul>
```
```
var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})
```

在 v-for 块中，我们拥有对父作用域属性的完全访问权限。v-for 还支持一个可选的第二个参数为当前项的索引。
```
<ul id="example-2">
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
</ul>
```
```
var example2 = new Vue({
    el:'#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            {message: 'Foo'},
            {message: 'Bar'}
        ]
    }
})
```

你也可以用 of 替代 in 作为分隔符，因为它是最接近 JavaScript 迭代器的语法：

```
<div v-for="item of items"></div>
```

### 可以用v-for来遍历对象

----
## 数组更新检测

### 变异方法
Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

### 替换数组
变异方法 (mutation method)，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，例如：filter(), concat() 和 slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：
```
example1.items = example1.items.filter(function (item) {
    return item.message.match(/Foo/)
})
```

