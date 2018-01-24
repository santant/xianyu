<template>
  <div id="release">
    <mt-header title="发布商品">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <dl class="release">
      <dd>
        <input v-model="release.titleText" class="input_title" placeholder="标题,品牌，品类，都是买家喜欢的" type="text">
      </dd>
      <dt>
        <textarea v-model="release.mainText" maxlength="200" placeholder="描述1下宝贝的细节和故事"></textarea>
      </dt>
    </dl>
    <ul class="box_img">
      <li v-for="item in imgData">
        <img :src="HOSTIMG+item.previewimg" alt="">
      </li>
      <li id="release_file">
        <i class="iconfont text_icon">&#xe6e8;</i>
      </li>
    </ul>
    <mt-button @click.native="release_go" class="releaseGo" size="normal" type="danger">立即发布</mt-button>
  </div>
</template>
<script>
  import api from '@/api.js'
  import {Toast} from 'mint-ui'

  export default {
    data() {
      return {
        HOSTIMG: HOSTIMG,
        release: {}, //上传帖子集合
        imgData: [] //上传图片集合
      }
    },
    components: { //引入组件

    },
    methods: { //执行的方法函数
      release_go() { //发布帖子
        this.release.id = localStorage.getItem('id')
        var strArr = ''
        this.imgData.forEach((el, index) => {
          strArr += ',' + el.previewimg
        })
        this.release.imgData = strArr.substr(1) //帖子图片集合
        api.goods.addGoodsList(this.release).then(res => {
          if (res.data.code == 100) {
            Toast(res.data.msg)
          } else {
            Toast(res.data.msg)
          }
        })
      }
    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
      var vm = this
      var r = new Resumable({
        target: 'http://localhost:8888/think_weixin/public/xianyu/comment/getFileLoud',
        query: {"uploadType": 1, "id": localStorage.getItem('id')},
        permanentErrors: [404, 500, 501],
        maxChunkRetries: 1,
        chunkRetryInterval: 5000,
        simultaneousUploads: 4,
        chunkSize: 1 * 1024 * 1024,
        fileParameterName: "file",
        testChunks: false,
        allowDuplicateUploads: false,
        generateUniqueIdentifier: true
      })
      r.assignBrowse(document.getElementById('release_file'));
      r.on('fileAdded', function (file) {
        console.log('start')
        r.upload() //开始上传
      })
      r.on('progress', function () { //上传的进度条
        var progress = Number(r.progress())
        var progressWidth = progress.toFixed(2) * 100
      })
      r.on('fileSuccess', function (file, message) { // 上传成功
        vm.imgData.push(JSON.parse(message))
//        alert(JSON.parse(message))
      })
      r.on('fileError', function (file, message) { //上传失败
        console.log(file)
//        alert("失败")
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #release {
    .releaseGo {
      display: block;
      margin: 4rem auto;
      width: 90%;
    }
    .box_img {
      padding: 0.3rem 1rem;
      overflow: hidden;
      li {
        float: left;
        margin-right: 0.3rem;
        width: 4.21875rem;
        height: 4.21875rem;
        position: relative;
        background: #f3f5f9;
        .text_icon {
          font-size: 2rem;
          color: #939394;
          text-align: center;
          display: block;
          margin-top: 1rem;
        }
        > img {
          position: absolute;
          margin: auto auto;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          max-width: 100%;
          max-height: 100%;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .release {
      padding: 0 1rem;
      dd {
        .input_title {
          height: 2.5625rem;
          line-height: 2.5625rem;
          width: 100%;
          border: none;
          border-bottom: 1px solid #f1f1f2;
          font-size: 0.75rem;
        }
      }
      dt {
        textarea {
          width: 100%;
          border: none;
          min-height: 7.125rem;
          font-size: 0.7rem;
          line-height: 1.25rem;
          padding: 0.5rem 0;
        }
      }
    }
  }
</style>
