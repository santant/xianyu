import Vue from 'vue'
// 2017年04月10日15:02:01 作者:827879040@qq.com vue全局过滤器测试
Vue.filter("sum", function (value) {
  return value + 40
})
Vue.filter("json", function (value) {
  console.log(value)
  return JSON.stringify(value)
})

