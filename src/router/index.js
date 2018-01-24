import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

// 首页
import Home from '@/components/home/home'
// 用户页
import User from '@/components/user/user'
// Register 注册
import Register from '@/components/user/register'
// 登录
import Login from '@/components/user/login'

// 发布商品
import Release from '@/components/release/release'

// 商品详情
import goodsInfo from '@/components/home/goodsInfo'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [{
    // 首页
    path: '/',
    name: 'Home',
    component: Home
  }, {
    // 用户
    path: '/user/userinfo',
    name: 'User',
    component: User
  }, {
    // 用户注册
    path: '/user/register',
    name: 'Register',
    component: Register
  }, {
    // 用户登录
    path: '/user/login',
    name: 'Login',
    component: Login
  }, {
    // 发布商品
    path: '/goods/release',
    name: 'Release',
    component: Release
  }, {
    // 商品详情
    path: '/goods/goodsInfo',
    name: 'goodsInfo',
    component: goodsInfo
  }, {
    path: '*',
    // 可以直接到404自己定义的组件
    // component: noFound
    // 路由重定向的姿势 redirect ,可以写一个已经存在的路由
    redirect: '/'
  }]
})

export default router

