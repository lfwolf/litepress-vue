<template>
  <div>
    <div slot="footer" style="  position:absolute;
  left:35px;
  top:600px;
  z-index:100;">
          <audio controls ref='audio'>
            <source v-bind:src="info.url" type="audio/mpeg">
          </audio>
    </div>
    <van-panel :title="info.name" >
      <div>    
        <van-image :src="info.cover" />    
      </div>
    </van-panel>
  </div>
</template>
<script>
import Vue from 'vue';
import { Image } from 'vant';

Vue.use(Image);
export default {
  data() {
    return {
      info : {}
    }
  },
  mounted: function(){
    console.log(this.$route.params)
    this.info = this.$route.params;
    this.$refs.audio.src = this.info.url;
  }
}
</script>