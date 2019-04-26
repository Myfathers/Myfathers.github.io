<template>
  <div class="home">
  <div v-for="item in project" :key="item.id"> 
  <article v-if="item.type=='photo'">
    <a href="">
      <div class="text-box">{{item.alt}}</div>
      <div class="img">
        <img :src="item.link1" alt="">
        <img :src="item.link2" alt="">
        <img :src="item.link3" alt="">
        <span class="tag-photo">{{item.tag}}</span>
      </div>
      <div class="info">
        <span>{{item.author}}</span>
        <span>{{item.browse}}</span>
      </div>
    </a>
  </article>
  <article v-else-if="item.type=='gif'">
    <a href="">
      <div class="text-box">{{item.alt}}</div>
      <div class="img-gif">
        <img :src="item.link1" alt="">
        <span class="tag">{{item.tag}}</span>
      </div>
      <div class="info">
        <span>{{item.author}}</span>
        <span>{{item.browse}}</span>
      </div>
    </a>
  </article>
  <article v-else-if="item.type=='video'">
    <a href="">
      <div class="text-box">{{item.alt}}</div>
      <div class="img-video">
        <img :src="item.link1" alt="">
        <span class="tag">{{item.tag}}</span>
      </div>
      <div class="info">
        <span>{{item.author}}</span>
        <span>{{item.browse}}</span>
      </div>
    </a>
  </article>
  </div>
  </div>
</template>

<style>
  article {
    position: relative;
  }
  .home a {
    padding: 15px 0;
    position: relative;
    display: block;
  }
  .home article {
    position: relative;
    margin: 0 15px;
  }
  .home .text-box {
    text-align: left;
    
    height: auto;
    max-height: 44px;
    font-size: 18px;
    line-height: 22px;
    height: auto;
    max-height: 44px;
    display: block;
    overflow: hidden;
    color: #242424;
  }
  .home .img {
    margin-top: 10px;
    width: 100%;
  }
  .home .img img {
    width: 32%;
    padding: 0 2px 0 0;
  }
  
  .home .info {
    text-align: left;
    font-size: 12px;
    color: #aaa;
    margin-top: 10px;
    line-height: 15px;
  }
  .home .info span {
    margin-right: 10px;
  }
  .home .text-box {
    max-height: 44px;
    display: block;
    overflow: hidden;
    color: #242424;
  }
  article::after {
    content: '';
    background: #eaeaea;
    width: 100%;
    height: 1px;
    transform: scaleY(.4);
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .home .img-gif {
    height: 194px;
    width: 100%;
    box-shadow: 0 0 1px #dbdbdb;
    margin-top: 10px;
    position: relative;
  }
  .home .img-gif img{
    width: 100%;
    height: 194px;
  }
  .home .img-gif::after {
    content: '';
    position: absolute;
    display: inline-block;
    background: url(https://static.qiushibaike.com/static/images/touch_v4/动图.png) right center no-repeat;
    height: 46px;
    width: 46px;
    top: 74px;
    left: 50%;
    margin-left: -23px;
    background-size: contain;
  }
  .home .img-video {
    height: 194px;
    width: 100%;
    margin-top: 10px;
    position: relative;
  }
  .home .img-video img {
    width: 100%;
    box-shadow: 0 0 1px #dbdbdb;
    height: 194px;
    object-fit: cover;
  }
  .home .img-video::after {
    content: '';
    position: absolute;
    display: inline-block;
    background: url(https://static.qiushibaike.com/static/images/touch_v4/播放@3x.png?v=2018-10-24-1712) right center no-repeat;
    height: 46px;
    width: 46px;
    top: 74px;
    left: 50%;
    margin-left: -23px;
    background-size: contain;
  }
  article .tag {
    bottom: 32px;
    position: absolute;
    display: inline-block;
    height: 32px;
    width: 64px;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 20px;
    line-height: 32px;
    transform: scale(.5);
    text-align: center;
    bottom: -8px;
    right: -16px;
  }
  article .tag-photo {
    bottom: 32px;
    position: absolute;
    display: inline-block;
    height: 32px;
    width: 64px;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: 20px;
    line-height: 32px;
    transform: scale(.5);
    text-align: center;
    bottom: 36px;
    right: -10px;
  }
</style>


<script>
import data from "@/assets//json/project.json";



export default {
  name: 'home',
  data: function () {
    return {
      project: data.project
    }
  }
};
</script>