<template>
  <div>
    <h1>component111111111111组件{{msg}}</h1>
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
