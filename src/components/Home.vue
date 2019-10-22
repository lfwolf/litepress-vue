<template>
  <div id="home">
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="'banner-'+item.id"><img v-bind:src="item.cover"></van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item v-bind:icon="item.cover" v-bind:text="item.title" v-for="item in catalogs" v-bind:key="'catalog-'+item.id"/>
    </van-grid>
    <span class="head">更多推荐</span>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell 
        v-for="item in recommends2"
        :key="item.id"
        :title="item.title"
        :to="'/album/'+item.zid"
      >
      <template slot="title">
        <img v-bind:src="item.cover" /> 
        <span v-html="item.title" ></span>
      </template>
      </van-cell>
    </van-list>

  </div>
</template>
<script>
import Vue from 'vue'
import { getBanner, getCatalog, getRecommends } from '@/api/main'
import { Swipe, SwipeItem, Lazyload } from 'vant'
import { Grid, GridItem } from 'vant';
import { List, Cell } from 'vant';

Vue.use(List).use(Cell);
Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem).use(Lazyload)

/* eslint-disable */
export default {
  data () {
    return {
      loading: false,
      finished: false,
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
    getCatalog().then(res=>{
      console.log('getCatalog')
      if( res.data.code == 1){
        //console.log(res.data.data)
        this.catalogs = res.data.data;
      }  
    });

  },
  mounted: function () {
    console.log('mounted.')

  },
  methods: {
    onLoad() {
      getRecommends().then(res=>{
        console.log(res.data.code)
        if( res.data.code == 1){
          this.recommends2 = res.data.data;
          this.loading = false;
          this.finished = true;
        }  
      });
    }
  }
  
}
</script>

<style scoped>
#home {
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
  font-size:  16px;
  font-weight: 600;
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
.van-cell__title  {
  text-align: left;
}
.van-cell__title img{
 height: 80%;
 width: 100%;
 margin-bottom: 5px;
}

</style>
