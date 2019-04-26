<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img src="https://static.qiushibaike.com/static/images/touch_v3/logo.png" />
          <a href="/">刷新<i></i></a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-light-gray">
          <router-link to="/" exact>推荐</router-link> 
          <router-link to="/gif">热图</router-link> 
          <router-link to="/video">视频</router-link> 
          <router-link to="/meinv">美女</router-link> 
          <router-link to="/wen">纯文</router-link>
          <router-link to="/jiahao"><span class="el-icon-plus"></span></router-link>
        </div>
        </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}
a{
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-row{
  position: relative;
}
.bg-purple-dark {
  background: #fed441;
}
.bg-purple-dark img{
  width: 95px;
  height: 33px;
  position: absolute;
  top: 17%;
  left: 37%;
}
.bg-purple-dark a{
  font-size: 17px;
  color: #222;
  position: absolute;
  top: 1%;
  right: 4%;
}
.bg-purple-dark a i {
  width: 18px;
  height: 16px;
  background: url('https://static.qiushibaike.com/static/images/touch_v4/%E5%88%B7%E6%96%B01@3x.png?v=2018-10-24-1712') no-repeat;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}
.grid-content {
  height: 50px;
  line-height: 50px;
}
.bg-light-gray {
  background-color: white;
}
.bg-light-gray a{
  font-size: 18px;
  color: #666;
  float: left;
  padding: 0 13px;
}
.bg-light-gray a:last-of-type{
  float: right;
  border-left: 1px solid lightgray;
  padding: 0 12px 0 13px;
}
span.el-icon-plus{
  font-size: 20px;
  font-weight: 700;
}
.grid-content .active {
  border-bottom: 3px solid #fed441;
  font-weight:bold;
}
</style>
