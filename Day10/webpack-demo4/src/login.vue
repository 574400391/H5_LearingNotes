<template>
  <div>
    <h1>组件{{msg}}</h1>

    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: "123123123123"
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