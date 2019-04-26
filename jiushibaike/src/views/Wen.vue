<template>
  <div class="wen" style="text-align:initial">
    <el-container>
      <el-header style="height:0;"></el-header>
      <el-main style="padding:0;" id="amain">
        <div v-for="item in data" :key="item.id" class="list" v-if="item.user">

          <div class="main">

            <div class="list-user">
              <img :src="item.user.thumb" class="user-thumb"/>
              <h5 class="user-name">{{item.user.login}}</h5>
              <span class="user-age" :style="`background-color:${isfamale(item.user.gender)}`">
                <i class="user-sex" :style="`background-image:url(${ismale(item.user.gender)})`"></i>
                {{item.user.age}}
              </span>
            </div>

            <!-- <div class="list-content">
                <p v-html="htobr(item.content)"></p>
            </div> -->
            <allshow :item="item"></allshow>
              <!-- <span class="all-content">查看全文</span> -->

            </div>

            <div class="list-hot" v-if="item.hot_comment">
              <p>
                <i class="shen"></i>
                <span class="hot-user">{{item.hot_comment.user.login}}：</span>
                <span class="hot-content">{{item.hot_comment.content}}</span>
                <i class="zan"></i>
                <span class="hot-comment">{{item.hot_comment.like_count}}</span>
              </p>
            </div>

          <div class="list-statistics">
            <span><i class="happing"></i>{{item.votes.up}}</span>
            <span><i class="chaping"></i>{{item.votes.down}}</span>
            <span><i class="zhuanfa"></i>{{item.share_count}}</span>
            <span><i class="liuyan"></i>{{item.comments_count}}</span>
          </div>
          </div>

          
      </el-main>
      <el-footer style="text-align:center;padding:0">
        <el-pagination background layout="prev, pager, next" :total="1000" :pager-count="5" :current-page.sync='pageNum'></el-pagination>
      </el-footer>
    </el-container>
      
  </div>
</template>
<script>
import data from "@/assets/json/wen.json";
import allshow from "@/components/allshow.vue"
export default {
  name: "wen",
  components:{
    allshow
  },
  data: function() {
    return {
      data: data.items,
      // data: [],
      pageNum: this.pageNum
    };
  },
  methods: {
    ismale: function(mof) {
      if (mof == "M") {
        return "https://www.qiushibaike.com/static/images/touch_v3/male.png";
      } else {
        return "https://www.qiushibaike.com/static/images/touch_v3/female.png";
      }
    },
    isfamale: function(mof) {
      if (mof == "M") {
        return "#c5e3fe";
      } else {
        return "#febad7";
      }
    },
    htobr: function(str) {
      return str.replace(/[\n]/g, "<br>");
    }
  },
  created: function() {
    // var options = {
    //   hostname: "m2.qiushibaike.com",
    //   port: 80,
    //   path: `/article/list/text?page=1&count=10`,
    //   method: "GET"
    // };
    // this.$axios
    //   .get("http://localhost:8081/",{
    //     params: options
    //   })
    //   .then(response => {
    //     this.data = response.data.items;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  // watch: {
  //   pageNum: {
  //     handler(newPage, oldPage) {
  //       var options = {
  //         hostname: "m2.qiushibaike.com",
  //         port: 80,
  //         path: `/article/list/text?page=${newPage}&count=10`,
  //         method: "GET"
  //       };
  //       this.$axios
  //         .get("http://localhost:8081/", {
  //           params: options
  //         })
  //         .then(response => {
  //           this.data = response.data.items;
  //           console.log(response.data.items)
  //         })
  //         .catch(function(error) {
  //           console.log(error);
  //         });
  //     }
  //   }
  // }
};
</script>
<style>
#amain {
  background: #f5f5f5;
}
.list {
  margin-top: 10px;
  padding: 20px;
  padding-bottom: 0;
  background-color: white;
}
.user-thumb {
  width: 40px;
  border-radius: 50%;
}
.list-user {
  width: 100%;
  height: 50px;
}
.user-thumb,
.user-name,
.user-age {
  vertical-align: middle;
  display: inline-block;
}
.user-name {
  font-weight: 400;
  font-size: 16px;
  color: #8f8f95;
  margin: 0 10px;
}
.user-age {
  background-color: #c5e3fe;
  padding: 2px 5px;
  font-size: 12px;
  color: white;
  vertical-align: middle;
  border-radius: 5px;
}
.user-sex {
  margin: -1px 3px 0 0;
  width: 10px;
  height: 10px;
  display: inline-block;
  background-size: 10px 10px;
  vertical-align: middle;
}
.list-content p {
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
}
.all-content {
  color: #fb0;
  border: 1px solid #fb0;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 5px;
}
.list-hot {
  background-color: #f5f5f5;
  font-size: 14px;
  padding: 1px 15px;
}
.shen,
.zan {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 15px 15px;
}
.shen {
  background-image: url(https://static.qiushibaike.com/static/images/touch_v3/cmt_god.png);
  margin-right: 7px;
}
.shen,
.zan,
.hot-user,
.hot-content {
  vertical-align: middle;
}
.hot-user {
  color: #8f8f95;
}
.hot-content {
  color: #666;
}
.zan {
  background-image: url(https://static.qiushibaike.com/static/images/touch_v3/like@1.5.png);
  margin: -3px 0 0 15px;
}
.hot-comment {
  color: #8f8f95;
  font-size: 12px;
  margin-left: 5px;
}
.list-statistics {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  font-size: 12px;
  color: #8f8f95;
}
.list-statistics span {
  float: left;
  width: 25%;
  height: 30px;
  text-align: center;
  vertical-align: middle;
}
.happing,
.chaping,
.zhuanfa,
.liuyan {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: 15px 15px;
  margin-right: 10px;
  vertical-align: middle;
}
.happing {
  background-image: url(https://www.qiushibaike.com/static/images/touch_v3/laugh@3x.png);
}
.chaping {
  background-image: url(https://www.qiushibaike.com/static/images/touch_v3/boring@3x.png);
}
.zhuanfa {
  background-image: url(https://www.qiushibaike.com/static/images/touch_v3/share@3x.png);
}
.liuyan {
  background-image: url(https://www.qiushibaike.com/static/images/touch_v3/comment@3x.png);
}
</style>