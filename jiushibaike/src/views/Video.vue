<template>
  <div class="user">
    <!-- <h1>This is an 吴亦凡 {{ this.$route.params.username }} {{ this.$route.query.sex }}</h1> -->
    <div class="shipin">
        <div class="box" v-for="item in data" :key="item.id">
            <!-- <img :src="item.pic_url" /> -->
            <!-- <el-button type="text" @click="open4"> -->
              <div class="image" @click="open5(item)" v-bind:style="{ 'background-image': 'url(' + item.pic_url + ')'}"></div>
            <!-- </el-button> -->
            <h5>{{ item.content }}</h5>
            <!-- <span  v-if=" 60 >item.pic_size[2] >= 10"> 0{{Math.floor((item.pic_size[2])/60)}}:{{(item.pic_size[2])%60}} </span>
            <span  v-else-if="item.pic_size[2] >= 60 && (item.pic_size[2]%60) < 10"> 0{{Math.floor((item.pic_size[2])/60)}}:0{{(item.pic_size[2])%60}} </span>
            <span v-else>0{{Math.floor((item.pic_size[2])/60)}}:0{{(item.pic_size[2])%60}}</span> -->
            <span v-if=" 10 <= item.pic_size[2] < 60 && (item.pic_size[2])%60 >= 10" > 0{{Math.floor((item.pic_size[2])/60)}}:{{(item.pic_size[2])%60}} </span>
            <span v-else-if="item.pic_size[2] < 10 && (item.pic_size[2])%60 < 10"> 0{{Math.floor((item.pic_size[2])/60)}}:0{{(item.pic_size[2])%60}} </span>
            <span v-else-if="item.pic_size[2] >= 60 && (item.pic_size[2])%60 >= 10">0{{Math.floor((item.pic_size[2])/60)}}:{{(item.pic_size[2])%60}}</span>
            <span v-else-if="item.pic_size[2] >= 60 && (item.pic_size[2])%60 < 10">0{{Math.floor((item.pic_size[2])/60)}}:0{{(item.pic_size[2])%60}}</span>
        </div>
    </div>
    <!-- <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :current-page.sync='pageNum'
        :total="200"
        :pager-count="5">
    </el-pagination> -->
    <!-- <Pagination></Pagination> -->
  </div>
</template>

<script>
import data from "@/assets/json/shipin.json";



export default {
  components: {
    // Pagination
  },
  data: function() {
    return {
      data:data.items,
      pageNum: this.pageNum
    };
  },
  created() {
    console.log("u bad girl");
    // console.log(this.data)
  },
  methods: {
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(this.pageNum);
    //   this.$axios
    //     .get("http://localhost:8888", {
    //       params: options
    //     })
    //     .then(response => {
    //       console.log(response.data.items);
    //       this.video = response.data.items;
    //     });
    },
    open5(item) {
        this.$alert(`<video width="370px" height="240px" controls> <source src=${item.high_url} type="video/mp4"></source>  </video>`, '', {
          dangerouslyUseHTMLString: true,
          showConfirmButton: false,
          closeOnClickModal: true,
          closeOnPressEscape:true
        }).catch(() => {
          console.log(item);
        });
      }
  },
  watch: {
    pageNum: {
      handler(newPage, oldPage) {
        var options = {
          hostname: "m2.qiushibaike.com",
          port: 80,
          path: `/article/list/video?page=${newPage}&count=30&readarticles=[121068701]`,
          method: "GET"
        };
        this.$axios
          .get("http://localhost:8081", {
            params: options
          })
          .then(response => {
            console.log(response.data.items);
            this.video = response.data.items;
          });
      }
    }
  }
};
</script>

<style>
.shipin {
  overflow: hidden;
}
.box {
  position: relative;
}
.box .image {
  width: 100%;
  height: 100%;
  background: no-repeat;
  background-size: cover;
}
.box:nth-of-type(odd) {
  float: left;
  margin-left: 8px;
  margin-bottom: 5px;
  width: 47%;
  height: 150px;
  padding-bottom: 30px;
}
.box:nth-of-type(even) {
  float: right;
  margin-right: 8px;
  margin-bottom: 5px;
  width: 47%;
  height: 150px;
  padding-bottom: 30px;
}
.box img {
  width: 100%;
  height: 100%;
}
.box h5 {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  color: #333;
  font-size: 14px;
}
.box span {
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 30px;
  right: 0;
  color: white;
}
.el-popup-parent--hidden .el-message-box__wrapper {
    position: fixed;
    top: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
}
.el-message-box__wrapper .el-message-box {
    display: inline-block;
    width: 100%;
    padding-bottom: 10px;
    vertical-align: middle;
    background-color: rgba(0,0,0);
    border: 1px solid #ebeef5;
    font-size: 18px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-align: left;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>
