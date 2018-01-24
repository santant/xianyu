<template>
  <div id="login">
    <mt-header title="登录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="form_user">
      <mt-field label="用户名" v-model="username" placeholder="请输入用户名"></mt-field>
      <mt-field label="密码" v-model="password" placeholder="请输入密码" type="password"></mt-field>
      <!--<mt-field label="邮箱" v-model="email" placeholder="请填写邮箱,方便找回密码" type="email"></mt-field>-->
    </div>
    <mt-button class="login_btn" @click="login" type="primary" size="large">登录</mt-button>
    <a href="/user/register" class="p_user">还没账号？快去注册吧! >></a>
  </div>
</template>
<script>
  import api from '@/api.js'
  import {Field, Toast} from 'mint-ui';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        username: '',
        email: '',
        password: '',
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      login() {
        api.userList.userLogin({
          "username": this.username,
          "password": this.password,
          "email": this.email
        }).then(res => {
          if (res.data.code === 100) {
            localStorage.setItem("userDbId",res.data.data.userdbid)
            localStorage.setItem("id",res.data.data.id)
            location.href="/"
            Toast({
              message: res.data.msg,
              position: 'middle',
              duration: 5000
            })
          } else {
            Toast({
              message: res.data.msg,
              position: 'middle',
              duration: 5000
            })
          }
        })
      }
    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
//      api.userList.userRegister({"passId": "2a585f8c5c664c6ab555cffa71a815ce"}).then(res => {
//        console.log(res)
//      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #login {
    .p_user {
      text-align: center;
      color: #26a2ff;
      display: block;
    }
    background: #efeff4;
    width: 100%;
    height: 100%;
    .form_user {
      margin-top: 1rem;
    }
    .login_btn {
      width: 80%;
      margin: 2rem auto;
    }

    .ft-slider {
      position: relative;
      text-align: center;
      font-size: 12px;
      background-color: rgb(232, 232, 232);
      color: rgb(102, 102, 102);
    }

    .ft-slider .ft-slider-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-user-select: none;
      user-select: none;
    }

    .lock {
      background: -webkit-gradient(linear, left top, right top, color-stop(0, #4d4d4d), color-stop(.4, #4d4d4d), color-stop(.5, #fff), color-stop(.6, #4d4d4d), color-stop(1, #4d4d4d));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-animation: lock 2.6s infinite;
      -webkit-text-size-adjust: none;
    }

    .ft-slider .transition {
      transition: all .4s;
    }

    .ft-slider .ft-slider-content.success {
      color: #fff;
    }

    .ft-slider .ft-slider-bar {
      position: absolute;
      top: 0;
      left: 0;
      background: url(../../assets/image/slider.png) no-repeat center center #fff;
      background-size: 16px 16px;
      border: 1px solid #ccc;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    .ft-slider .ft-slider-bar.success {
      background-image: url(../../assets/image/success.png);
    }

    .ft-slider .ft-slider-bg {
      width: 0;
      height: 100%;
      background-color: rgb(122, 194, 60);
    }

    @-webkit-keyframes lock {
      0% {
        background-position: -140px 0;
      }
      100% {
        background-position: 140px 0;
      }
    }

    @keyframes lock {
      0% {
        background-position: -140px 0;
      }
      100% {
        background-position: 140px 0;
      }
    }
  }
</style>
