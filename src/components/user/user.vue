<template>
  <div class="user">
    <mt-header title="我">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!--头像上传-->
    <div class="file_portrait">
      <img v-if="!userInfo.previewimg" src="../../assets/image/banner01.jpg" alt="">
      <img v-if="userInfo.previewimg" :src="HOSTIMG+userInfo.previewimg" alt="">
      <span>{{userInfo.username}}</span>
      <p v-if="userInfo.nickname">{{userInfo.nickname}}</p>
      <p v-if="!userInfo.nickname">点击修改昵称</p>
      <!--<mt-button icon="more"></mt-button>-->
    </div>
    <!--    font-size: 16px;
    line-height: 1;
    min-height: inherit;
    overflow: hidden;
    padding: 0 10px;
    width: 100%;-->
    <ul class="list_grup">
      <li>
        <i style="" class="iconfont">&#xe619;</i><span>主页</span>
        <b class="iconfont">&#xe6ae;</b>
      </li>
      <li>
        <i style="" class="iconfont">&#xe620;</i><span>发帖</span>
        <b class="iconfont">&#xe6ae;</b>
      </li>
      <li>
        <i style="" class="iconfont">&#xe677;</i><span>我的</span>
        <b class="iconfont">&#xe6ae;</b>
      </li>
    </ul>
    <!--退出-->
    <div class="UserOut" @click="checkOut">
      <i style="" class="iconfont">&#xe639;</i><span>退出</span>
      <b class="iconfont">&#xe6ae;</b>
    </div>
  </div>
</template>
<script>
  import api from '@/api.js'
  import {Cell} from 'mint-ui';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        HOSTIMG:HOSTIMG,
        userInfo: {}
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      //拖出登录
      checkOut() {
        localStorage.clear();
        this.$router.push({path: "/", query: {"": ''}})
      }
    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
      //获取用户个人信息
      api.userList.userinfo({"id": localStorage.getItem('id')}).then(res => {
        if (res.data.code === 100) {
          this.userInfo = res.data
        }
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .user {
    background: #efeff4;
    width: 100%;
    height: 100%;
  }

  /*.UserOut*/
  .UserOut {
    line-height: 2.34375rem;
    height: 2.34375rem;
    background: #fff;
    position: relative;
    margin-top: 1.09rem;
    span {
      box-sizing: border-box;
      position: absolute;
      display: block;
      width: 95%;
      right: 0;
      top: 0;
      height: 100%;
      color: #333;
      text-indent: 1.2rem;
    }
    > i {
      font-size: 1rem;
      color: #c3c3c8;
      margin-left: 5%;
    }
    > b {
      font-size: 1rem;
      position: absolute;
      right: 1rem;
      color: #c3c3c8;
    }
  }

  .list_grup {
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #e6e6e6;
    li {
      line-height: 2.34375rem;
      height: 2.34375rem;
      background: #fff;
      position: relative;
      span {
        box-sizing: border-box;
        position: absolute;
        display: block;
        width: 95%;
        right: 0;
        top: 0;
        height: 100%;
        border-bottom: 1px solid #e6e6e6;
        color: #333;
        text-indent: 1.2rem;
      }
      > i {
        font-size: 1rem;
        color: #c3c3c8;
        margin-left: 5%;
      }
      > b {
        font-size: 1rem;
        position: absolute;
        right: 1rem;
        color: #c3c3c8;
      }
      &:last-child {
        span {
          border-bottom: none;
        }
      }
    }
  }

  .file_portrait {
    width: 100%;
    height: 4.75rem;
    position: relative;
    margin-top: 0.8125rem;
    margin-bottom: 1.09375rem;
    background: #fff;
    overflow: hidden;
    img {
      width: 3.375rem;
      height: 3.375rem;
      position: absolute;
      left: 0.71875rem;
      top: 0.71875rem;
      border-radius: 5px;
    }
    span {
      line-height: 1.875rem;
      font-size: 0.8125rem;
      margin-top: 0.6rem;
      display: block;
    }
    p {
      line-height: 1.125rem;
      font-size: 0.66rem;
    }
    span, p {
      padding-left: 4.8125rem;
    }
  }
</style>
