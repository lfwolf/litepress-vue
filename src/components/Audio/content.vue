<template>
  <div style="margin-top:10px;">
    <van-popup v-model="show">内容</van-popup>
    <van-row>
      <van-col span="4" click="showPopup"><van-image :src="info.cover" round  /></van-col>
      <van-col span="19" offset="1">
        <span>{{info.name}} </span>
        <div style="margin-top:10px;" >
            <audio controls ref='audio' >
              <source v-bind:src="info.url" type="audio/mpeg">
            </audio>
        </div>
      </van-col>
    </van-row>
    <van-image :src="imgurl" />    

  </div>
</template>
<script>
import Vue from 'vue';
import { Image } from 'vant';
import { Row, Col } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);

Vue.use(Row).use(Col);

Vue.use(Image);
export default {
  data() {
    return {
      info : {},
      imgurl: ""
    }
  },
  mounted: function(){
    console.log(this.$route.params)
    this.info = this.$route.params;
    this.$refs.audio.src = this.info.url;
    this.imgurl = "/static/img/lizhi-cover/"+this.info.id+".jpg";
    console.log("img:"+ this.imgurl)
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
}
</script>
<style scoped>
audio {
    filter: sepia(20%) saturate(70%) grayscale(1) contrast(99%) invert(12%);
    width: 250px;
    height: 25px;
}
</style>