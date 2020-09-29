import Vue from 'vue'
import Router from 'vue-router'
/**
 * cesiumContainer
 * hello world
 */
import cesiumContainer from '@/components/baseCesium/cesiumContainer'

import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: cesiumContainer,
      // 嵌套路由
      // children:[
      //   {
      //     // 这里不设置值，是把main作为默认页面
      //     path: '/', 
      //     name: 'login',
      //     component: login
      //   },
      //   {
      //     path: '/register',
      //     name: 'register',
      //     component: register
      //   }
      // ]
    }
  ]
})
