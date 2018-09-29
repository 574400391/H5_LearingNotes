<template>
  <div>
    <!-- <h3>HomeContatiner</h3> -->
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in imagesList" :key="item.image">

      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1(1).png" alt="">
          <div class="mui-media-body">新闻</div>
          </router-link>
          
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">反馈</div>
        </a></li>

    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        imagesList: [{
            url: '',
            image: '1'
          },
          {
            url: '',
            image: '2'
          },
          {
            url: '',
            image: '3'
          }
        ]
      }
    },
    created() {
      this.getImages();
    },
    methods: {
      getImages() {
        this.$http.get('https://bird.ioliu.cn/v1/?url=http://vue.studyit.io/api/getlunbo').then(result => {
          if (result.body.stats === 0) {
            //成功了
          } else {
            //失败了
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      &:nth-child(1) {
        background-color: red;
      }

      &:nth-child(2) {
        background-color: blue;
      }

      &:nth-child(3) {
        background-color: yellow;
      }
    }
  }

  .mui-grid-view.mui-grid-9 .mui-media {
    background-color: #fff;
    border: none;

    img {
      width: 60px;
      height: 60px;
    }

    .mui-media-body {
      font-size: 13px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    background-color: #fff;
    border: none;
  }
</style>