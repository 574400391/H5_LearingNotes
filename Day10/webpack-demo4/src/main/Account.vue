<template>
  <div>
    <h1>Account组件{{msg}}</h1>

    <router-link to="/account/component1">component1</router-link>
    <router-link to="/account/component2">component2</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ""
    }
  },
  methods: {
    show() {
      console.log('调用show方法')
    }
  }
}
</script>
<style>

</style>
