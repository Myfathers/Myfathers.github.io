<template>
  <div class="about" style="text-align:initial">
    <el-container v-for="item in data" :key="item.id" class="outBox" >
          <el-header class="head">
          <img class="thumb-img" :src="item.user.thumb" title="个人主页"/>
          <span>{{item.user.login}}</span> 
          <i class="rank male"  v-if="item.user.gender =='M'">
            <img src="../assets/male.png" >
            {{item.user.age}}
          </i>  
          <i class="rank female" v-else>
            <img src="../assets/female.png" >
            {{item.user.age}}
          </i>                    
          </el-header>
          <el-main class="mainBox">
            <p>{{item.content}}</p>
            <img :src="item.low_url" class="main-img">
            <div class="commentBox" v-if="item.hot_comment">
              <span><img src="../assets/god.png"></span>
              <span>数据里没名字啊: </span>
              <span>{{item.hot_comment.content}}</span>
              <i><img src="../assets/like.png" class="main-img">{{item.hot_comment.like_count}} </i>
            </div>
          </el-main>
          <el-footer class="foot">
            <i><img src="../assets/laugh.png" title="点赞">{{item.votes.up}}</i>
            <i><img src="../assets/boring.png" title="不咋滴">{{(JSON.stringify(item.votes.down).match(/[0-9]+$/))[0]}}</i>
            <i><img src="../assets/share.png" title="转发">{{item.share_count}}</i>
            <i><img src="../assets/comment.png" title="评论">{{item.comments_count}}</i>
          </el-footer>
    </el-container>

<!-- <el-pagination
  @current-change="handleCurrentChange"
  :current-page.sync="pageNum"
  background
  :pager-count="5" 
  layout="prev, pager, next"
  :total="100" class="pageChange">
</el-pagination> -->
  </div>
</template>

<script>
import data from "@/assets/json/hot_img.json";

export default {
  name: 'gif',
  data: function(){
    return {
      // data : [],
      data:data.items,
      pageNum: this.pageNum
    }
  },
  methods:{
    handleCurrentChange(val){
      this.pageNum = val;
      // console.log(this.pageNum);
    }
  },
  created:function(){
    // this.$axios.get('http://localhost:8081/')
    // .then((response) => {
    //   // console.log("获取数据源成功");
    //   this.data = response.data.items;
    // })
    // .catch(err => {
    //   console.log(err);
    // })
  },
  watch: {
    pageNum:{
      handler(newValue,oldValue){
        console.log("newValue===>" , newValue);
        var options = {
          hostname: 'm2.qiushibaike.com',
          port: 80,
          path: '/article/list/image?page='+ newValue +'&count=6',
          method: 'GET'
        };
        this.$axios.get('http://localhost:8081/',{
          params: options
        })
        .then((response) => {
          console.log("response=========>",response.data);
          this.data = response.data.items;
        })
        .catch(err => {
          console.log(err);
        })
      }
    }
  }
}
</script>

<style>
.outBox{
  width: 100%;
  /* height: 400px; */
  background: rgba(255, 255, 255, 0.5);
  /* margin: 5px 2px; */
  border-bottom:10px solid #f6f5f5;
  /* max-height: 500px; */
}
.head,.mainBox,.foot,.commentBox{
  position: relative;
}
.foot{
  height: -60px;
}
.thumb-img{
  position: absolute;
  width:40px;
  border-radius: 50%;
  left: 3%;
  margin-top: 20px;
}
.head span {
  float: left;
  margin-top: 30px;
  margin-left:40px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.4)
}
.rank{
  float: left;
  /* display: inline-block; */
  padding: 3px;
  margin-top: 33px;
  border-radius: 20%;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6)
}
.rank.male{
  background: #c5e3fe;
}
.rank.female{
   background:#febad7;
}
.rank img{
  width: 8px;
}
.mainBox{
  overflow: hidden;
}
.mainBox p{
  position: relative;
  margin-top: -10px;
  left: -2%;
  text-align: left
}
.main-img{
  width: 100%;
 margin-top: 5px;
}
.commentBox{
  width:95%;
  overflow: hidden;
  background: #f5f5f5;
  margin-top: 20px;
  padding: 10px;
  margin-bottom: -20px;
}
.commentBox span{
  margin-right: 5px;
}
.commentBox img{
  width: 12px;
  margin-right: 5px;
}
.commentBox i{
  font-size: 12px;
  margin-left: 5px;
}
.foot i {
  position: relative;
  display: inline-block;
  width: 24%;
  font-size: 12px;
  margin-top: 30px;
  left: 7%;
  color: rgba(0, 0, 0, 0.4);
}
.foot i img{
  width:15px;
  margin-right: 5px;
  vertical-align: bottom;
}
.pageChange{
  text-align: center;
}
</style>



