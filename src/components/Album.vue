<template>
  <div id="album">
    <div class="cover">
      <img v-bind:src="info.cover" />
    </div>
    <div class="layui-container">
      <div class="brief" v-html="info.brief" />
      <div class="layui-row tools">
        <div class="layui-col-xs3"><i class="layui-icon layui-icon-star"></i><span>收藏</span></div>
        <div class="layui-col-xs3"><i class="layui-icon layui-icon-download-circle"></i><span>下载</span></div>
        <div class="layui-col-xs3"><i class="layui-icon layui-icon-share"></i><span>分享</span></div>
        <div class="layui-col-xs3"><i class="layui-icon layui-icon-list"></i><span>多选</span></div>
      </div>
      <div class="layui-row list">
        <div class="layui-col-xs12 listItem" v-for="(item,index) in list" :key="'list-'+item.id">
          <router-link :to="'/article/'+item.id">
            <span class="seq">{{index+1}}</span>
            <img class="thumb" v-bind:src="item.cover_small" />
            <span>{{item.title}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Vue from 'vue'
import { Row, Col } from 'vant'
import { getAlbum } from '@/api/main'

Vue.use(Row).use(Col)

export default {
  
  data () {
    return {
      info: {},
      list: [],
      msg: 'message'
    }
  },
  created: function(){
    
    console.log(this.$route);
    let albumid = this.$route.params.id;
    getAlbum(albumid).then(res=>{
      console.log(res.data.code)
      if( res.data.code == 1){
        this.info = res.data.info;
        this.list = res.data.list;
      }  
    });
  }
}
</script>
<style scoped>
.cover {
  height: 120px;
}
.brief {
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
}
.tools {
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.tools i {
  font-size: 35px; 
  color: black;
  display: block;
}
.listItem {
  margin-bottom: 10px;

}
.thumb {
  width: 50px;
  border-radius:200px;
}
</style>
