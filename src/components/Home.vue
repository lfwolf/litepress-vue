<template>
  <div>
    <div class="layui-carousel" id="banner">
      <div carousel-item>
        <div v-for="item in banners" :key="'banner-'+item.id">
          <img v-bind:src="item.cover">
        </div>
      </div>
    </div>
    <div class="layui-container">
      <div class="layui-row">
        <div class="layui-col-xs3 catalog" v-for="item in catalogs" v-bind:key="'catalog-'+item.id">
          <div><img v-bind:src="item.cover"></div>
          <span>{{item.title}}</span>
        </div>
        <div class="layui-col-xs12" v-if="recommends.length >0">
          <span class="head">今日推荐</span>
        </div>
        <div class="layui-col-xs6 article"  v-for="(item,index) in recommends" v-bind:key="index">
          <img v-bind:src="item.img">
          <span>{{item.title}}</span>
        </div>
        <div class="layui-col-xs12" v-if="recommends2.length > 0 ">
          <span class="head">更多推荐</span>
        </div>
        <div class="layui-col-xs12 recommand2"  v-for="(item,index) in recommends2" v-bind:key="index">
          <router-link :to="'/album/'+item.zid">
            <img v-bind:src="item.cover">
            <span>{{item.title}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { getBanner, getCatalog, getRecommends } from '@/api/main'
import { Swipe, SwipeItem, Lazyload } from 'vant'

Vue.use(Swipe).use(SwipeItem).use(Lazyload)

/* eslint-disable */
export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      banners: [],
      catalogs:[],
      recommends:[],
      recommends2:[]
    };
  },
  created: function () {
    getBanner().then(res=>{
      console.log(res.data.code)
      if( res.data.code == 1){
        this.banners = res.data.data;
      }  
    });
    getRecommends().then(res=>{
      console.log(res.data.code)
      if( res.data.code == 1){
        this.recommends2 = res.data.data;
      }  
    });
    getCatalog().then(res=>{
      console.log('getCatalog')
      if( res.data.code == 1){
        //console.log(res.data.data)
        this.catalogs = res.data.data;

        // 幻灯片
        layui.use('carousel', function(){
          var carousel = layui.carousel;
          //建造实例
          carousel.render({
            elem: '#banner'
            , width: '100%' // 设置容器宽度
            , height: '120px'
            , arrow: 'always' // 始终显示箭头
            // , anim: 'updown' // 切换动画方式
          });
        });  
      }  
    });

  },
  mounted: function () {
    console.log('mounted.')

  }
}
</script>

<style scoped>
div {
  text-align: center;
}

#banner {
  height: 120px;
}
.carousel-item {
  height: 120px;
}
.catalog img{
  width: 80%;
}
.catalog span{
  display: box;
  text-align: center;
  font-size: 10px;
}
span.head {
  margin: 10px 1px;
  float: left;
  font-size:  20px;
  font-weight: 700;
}
.article {
  padding: 5px 10px;
}
.recommand2 {
  text-align: left;
}
.recommand2 span{
  display:inline-block;
  margin-top: 10px;
  margin-bottom: 20px;
}

</style>
