<template>
  <div id="index" style="width: 100%;height:100%;">
    <div>
      <p class="class_4">404</p>
      <p class="class_msg">您请求的页面不存在!!</p>
    </div>
  </div>
</template>

<script>
  import Api from '@/api.js'
  import {Swipe, SwipeItem, Indicator} from 'mint-ui';

  export default {
    data() {
      return {
//				isShow:false
      }
    },
    methods: {
    },
    mounted() {
      
    },
    watch: {
     
    }
  }
</script>

<style>
  #index .class_4 {
    text-align: center;
    line-height: 96px;
    font-size: 3rem;
    color: #a1a1a1;
    margin-top: 2rem;
  }

  #index .class_msg {
    line-height: 2rem;
    font-size: 1rem;
    text-align: center;
    color: #666;
  }
</style>
