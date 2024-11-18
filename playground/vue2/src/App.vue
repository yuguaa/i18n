<template>
  <div id="app">
    <nav>
      <div>你好</div>
      <div>{{ '关于' }}</div>
      <div>{{ msg }}</div>
      <div>{{ text }}</div>
    </nav>
    <div>
      <button @click="changeMsg">更改msg</button>
      <button @click="changeText">更改text</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎来到我的网站',
      text: `这是一个关于Vue2的项目`
    }
  },
  methods: {
    changeText() {
      this.text = `${msg}这是一个关于Vue2的项目，现在时间是${new Date().toLocaleString()}`
    },
    changeMsg() {
      this.msg = '你知道' + '是我啊' + new Date().toLocaleString() + '了吗'
    }
  }
}
</script>
