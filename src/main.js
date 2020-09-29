// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
let Cesium = require('cesium/Cesium')    //cesium1.6版本以后导入的方式
import 'cesium/Widgets/widgets.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import qs from 'qs'
import echarts from 'echarts'

Vue.use(ElementUI,{size:'small'})

window.Cesium = Cesium;
window.echarts = echarts;
Vue.prototype.axios = axios;
Vue.prototype.$http = function (method,url,data={}) {
  if (method === "get") {
    return axios.get(url,qs.stringify(data));
  }else if (method === "post") {
    return axios.post(url,qs.stringify(data));
  }
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
