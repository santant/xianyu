<template>
  <div class="hello">
    <mt-header title="商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="mian_xy">
      <!--<div v-for="item in goddsList.data" class="div_goods">-->
      <!--<div class="portrait">-->
      <!--<img src="../../assets/image/banner01.jpg" alt="">-->
      <!--<span>name名称</span>-->
      <!--<p>{{item.update_time}}</p>-->
      <!--</div>-->
      <!--<div class="goods_xp">-->
      <!--<span class="title_xp">{{item.titleText}}</span>-->
      <!--<p class="centent_xp">{{item.mainText}}</p>-->
      <!--<div class="box_img">-->
      <!--<ul>-->
      <!--<li v-for="imgItem in item.ordero_photo">-->
      <!--<img :src="HOSTIMG+imgItem" alt="">-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <div  class="div_goods">
        <div class="portrait">
          <img src="../../assets/image/banner01.jpg" alt="">
          <span>name名称</span>
          <p>2018-01-16</p>
        </div>
        <div class="goods_xp">
          <span class="title_xp">发布的产品名称</span>
          <p class="centent_xp">家里闲置笔记本出售，8成新，联想i7，pro2211家里闲置笔记本出售，8成新，联想i7，pro2211</p>
        </div>
        <div class="swipe_xy">
          <mt-swipe :auto="4000">
            <mt-swipe-item>
              <img src="../../assets/image/banner01.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../assets/image/banner01.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../../assets/image/banner01.jpg" alt="">
            </mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <navFooter></navFooter>
  </div>
</template>
<script>
  import api from '../../api.js'
  import navFooter from '@/components/component/footer/footer.vue'
  import {Swipe, SwipeItem} from 'mint-ui';

  export default {
    data() {
      return {
        HOSTIMG: HOSTIMG,
        goods: {
          page: 1  //开始默认开始的页数
        },
        goddsList: [] // 商品列表
      }
    },
    components: { //引入组件
      navFooter
    },
    methods: { //执行的方法函数

    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
      //获取文章列表
//      var jsons = {"pageSize": "10", "page": this.goods.page}
//      api.goods.getGoodsList(jsons).then(res => {
//        res.data.data.forEach((el, index) => {
//          var arr = []
//          arr = el.ordero_photo.split(',')
//          el.ordero_photo = arr
//        })
//        this.goddsList = res.data
//      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .footer_xy {
    width: 100%;
    height: 2.625rem;
    border-top: 1px solid #fbfbfb;
    position: fixed;
    bottom: -1px;
    left: 0;
    z-index: 99;
    ul {
      display: flex;
      background: #f5f5f5;
      li {
        flex: 1;
        text-align: center;
        .active_li {
          color: #28c0fb;
        }
        a {
          color: #5d6164;
        }
        i {
          font-size: 1.3125rem;

        }
        p {
          font-size: 0.625rem;
        }
      }

    }
  }

  /*lunbo*/
  .swipe_xy {
    height: 11.46875rem;
    margin-bottom: 0.3rem;
    img {
      width: 100%;
    }
  }

  /*mian_xy*/
  .mian_xy {
    padding: 0.40625rem 0.65625rem;
    background: #fff;
    .div_goods {
      margin-top: 0.4rem;
    }
    .goods_xp {
      margin-top: 0.40625rem;
      .title_xp {
        font-size: 0.75rem;
        margin-left: 0.2rem;
        line-height: 1.71875rem;
      }
      .centent_xp {
        font-size: 0.68rem;
        margin-left: 0.2rem;
        line-height: 1.375rem;
      }
    }
    .portrait {
      width: 100%;
      height: 2.0625rem;
      position: relative;
      > img {
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 50%;
        position: absolute;
        bottom: 0rem;
        left: 0.3125rem;
      }
      span {
        font-size: 0.75rem;
        line-height: 0.8375rem;
        color: #616161;
        margin-left: 2.65625rem;
      }
      p {
        font-size: 0.6rem;
        line-height: 0.8375rem;
        color: #bababa;
        margin-left: 2.65625rem;
      }
    }
  }
</style>
