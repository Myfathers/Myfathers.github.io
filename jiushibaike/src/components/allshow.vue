<template>
    <p v-html="htobr(item.content)" class="actived" @click="allshow" v-if='show'></p>
    <p v-html="htobr(item.content)" class="allcontent" @click="allshow" v-else></p>
</template>
<script>
export default {
    name:'allshow',
    props:['item'],
    data:function(){
        return{
            show:false,
            cla:`allcontent`
        }
    },
    methods:{
        htobr: function(str) {
            return str.replace(/[\n]/g, "<br>");
        },
        allshow: function () {
            this.show = !this.show
        },
    }
}
</script>

<style>
.allcontent{
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
}
.actived{
  line-height: 24px;
}
</style>
