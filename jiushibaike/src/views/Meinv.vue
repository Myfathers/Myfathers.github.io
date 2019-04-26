<template id='dage'>
<div id="meinv" >
<div v-for="data in this.data" :key="data.id">
  <div class="bg-purple bb"><img @click="clickfun($event),open()" :src="data.url" alt="">
  </div>
  <!-- <div class="grid-content bg-purple-light bb"><img @click="clickfun($event),open()" :src="data.url" alt=""></div> -->
</div>
	<svg width="100px" height="100px" fill="#00aeff" viewBox="50 0 50 200" focusable="false">
			<rect x="10" y="10" width="25px" height="30px">
				<animate attributeType="xml"
        attributeName="opacity"
        values="1; 0.2; 1"
        begin="0.2s" dur=".6s" repeatCount="indefinite" /> 
			</rect>
			<rect x="40" y="10" width="25px" height="30px">
				<animate attributeType="xml"
        attributeName="opacity"
        values="1; 0.2; 1"
        begin="0.5s" dur=".6s" repeatCount="indefinite" /> 
			</rect>
			<rect x="70" y="10" width="25px" height="30px">
				<animate attributeType="xml"
        attributeName="opacity"
        values="1; 0.2; 1"
        begin="0.6s" dur=".6s" repeatCount="indefinite" /> 
			</rect>
		</svg>
</div>
</template>
<style scoped lang="less">
.el-message-box__wrapper .el-message-box{
  width:80% ;
  top:20px
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 310px;
}
.bb{
  width: 100%;
}
.bb img {
  border-radius: 20px;
  padding: 10px 3px;
  width: 48%;
  float: left;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
<script>
import axios from "axios";
export default {
  name: "app",
  data: function() {
    return {
      data: null,
      img: null
    };
  },
  created() {
    axios.get("https://www.apiopen.top/meituApi", {}).then(
      response => {
        // console.log(response.data.data);
        this.data = response.data.data;
      },
      function(err) {
        console.log("请求失败！");
      }
    );
  },
  methods: {
    clickfun(e) {
      // console.log(e.target.src);
      this.img = e.target.src;
    },
    open() {
      this.$alert(
        "<strong><img src=" + this.img + " width=100%;</strong>",
        {
          showConfirmButton: false,
          dangerouslyUseHTMLString: true
        }
      ).catch(action => {});
    }
  },
  mounted() {
    let _this = this;
    let sw = true;
    axios.get("https://www.apiopen.top/meituApi", {}).then(
      response => {
        // console.log(response.data.data);
        _this.data = response.data.data;
      },
      function(err) {
        console.log("请求失败！");
      }
    );
    window.addEventListener("scroll", function() {
        // console.log(window.innerHeight); // 可视区域高度
        // console.log(document.documentElement.scrollTop); // 滚动高度
        // console.log(document.body.offsetHeight); // 文档高度
        // console.log(document.documentElement.scrollTop + window.innerHeight);
        if (
          document.documentElement.scrollTop + window.innerHeight  >= document.body.scrollHeight
        ) {
          // console.log(sw);
          if (sw == true) {
            sw = false;
            axios.get("https://www.apiopen.top/meituApi").then(
              response => {
                // console.log(response.data.data);
               response.data.data.forEach(url => {
                 _this.data.push(url);
                // console.log(url);
               });
              },
              function(err) {
                console.log("请求失败！");
              }
            );
            sw = true;
          }
        }
      })
  }
};
</script>
