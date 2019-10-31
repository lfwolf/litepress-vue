<template>
  <div class="act-form">
    <iframe :src="src" ref="iframe" id="bdIframe" frameborder="0" scrolling="no" width="100%" height="600px"
    style="display: block; width: 100%; height: 600px" ></iframe>
  </div>
</template>

<script>

export default {
  data () {
    return {
      src: '你的src'
    }
  },
  created() {
    this.src = this.$route.params.src;
    this.src = this.$route.query.src;
    console.log(this.src)
  },
  mounted () {
    function reinitIframe(){
      var iframe = document.getElementById("bdIframe");
      try{
          var bHeight = iframe.contentWindow.document.body.scrollHeight;
          var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
          var height = Math.min(bHeight, dHeight);
          //iframe.height = height;
          console.log(bHeight,dHeight);
      }catch (ex){}
    };
    //  setInterval(reinitIframe,100);
  }
}
</script>
<style scoped>
.act-form{
  border: 0px solid red;
}
iframe {
    margin: 0;
    border-style: none;
    width: 100%;
    height: 100%;
}
</style>