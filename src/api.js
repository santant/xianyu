import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios
// 常量 API 接口地址
const HOST = "http://testuser.artup.com/"

// 用户名全局变量获取
// localStorage.setItem("sessionId","2141731");
var userDbId = localStorage.getItem('userDbId')
var userId = localStorage.getItem('id')
const VueHttp = new Vue()
var HTTP = VueHttp.$http.create({
// baseUrl:'http:www.baidu.com',
// timeout:5000, //请求超时配置
  params: { // 每一个连接都跟手的东西，查询字符串
    // "userDbId": userDbId,
    // "id": userId
  },
  headers: {}// 设置请求头的对象
})

// 用户资料
const USER_MSG = `${HOST}artup-user-api/f/userInfo`
// 用户登陆
const USER_LOGIN = `${HOSTS}xianyu/user/login`
// 用户注册
const USER_REGISTER = `${HOSTS}xianyu/user/register`
// 获取个人信息
const USER_INFO = `${HOSTS}xianyu/user/userInfo`

// 发布帖子
const RELEASE_ORDER = `${HOSTS}xianyu/comment/addGoogsList`

// 查询帖子
const RELEASE_LIST = `${HOSTS}xianyu/comment/getGoodsBgPage`

// 只要访问ajax的时候，没有这个用户信息，就跳到首页去登录获取用户信息
export default {
  userList: {
    user_msg: (jsons) => {
      return HTTP.get(USER_MSG, {params: jsons})
    },
    userinfo: (jsons) => { // 用户个人信息
      return HTTP.get(USER_INFO, {params: jsons})
    },
    userLogin: (jsons) => { // 用户登陆
      return HTTP.post(USER_LOGIN,
        qs.stringify(jsons)
      )
    },
    userRegister: (jsons) => { // 用户注册
      return HTTP.post(USER_REGISTER,
        qs.stringify(jsons)
      )
    }
  },
  goods: {
    addGoodsList: (jsons) => { // 帖子增加接口
      return HTTP.post(RELEASE_ORDER,
        qs.stringify(jsons)
      )
    },
    getGoodsList: (jsons) => {
      return HTTP.get(RELEASE_LIST, {params: jsons})
    }
  }
}

