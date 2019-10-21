<template>
  <div> 
    <div class="layui-container">
      <div class="cover"><img v-bind:src="info.cover" /></div>
      <div class="layui-row player">
        <div class="layui-col-xs12">
          <audio controls ref='audio'>
            <source v-bind:src="info.url" type="audio/mpeg">
          </audio>
        </div>
        <div></div>
      </div>
      <div class="layui-card">
        <div class="layui-card-header title">{{info.title}}</div>
        <div class="layui-card-body desc" v-html="info.brief">
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { getArticle } from '@/api/main'
export default {
  data () {
    return {
      info: {}
    }
  },
  created: function(){
    let id = this.$route.params.id
    getArticle(id).then(res=>{
      if( res.data.code == 1){
        this.info = res.data.data;
        this.$refs.audio.src = this.info.url;
      }  
    });

  }
}
</script>
<style scoped>
.cover {
  width: 100%;
}
#video {
  width: 100%;
}
.player {
  margin: 10px 0px;
  text-align: center;
}
.player i {
  font-size: 30px;
  color: red;
  margin: 10px 0;
}

.desc { 
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1.5;
}

</style>