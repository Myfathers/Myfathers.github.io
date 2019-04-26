import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home.vue";
import Video from "@/views/Video.vue";
import Meinv from "@/views/Meinv.vue";
import Wen from "@/views/Wen.vue";
// import Jiahao from "@/views/Jiahao.vue";
import Gif from "@/views/Gif.vue";

Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/gif',
        name: 'gif',
        component: () => import('./views/Gif.vue')
      },
      {
        path: '/video',
        name:'video',
        component: () => import('./views/Video.vue')
      },
      {
        path: '/meinv',
        name:'meinv',
        component: () => import('./views/Meinv.vue')
      },
      {
        path: '/wen',
        name:'wen',
        component: () => import('./views/Wen.vue')
      },
      // {
      //   path: '/jiahao',
      //   name:'jiahao',
      //   component: () => import('./views/Jiahao.vue')
      // },
    ]
  })