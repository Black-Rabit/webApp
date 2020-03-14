import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**/
import './assets/css/reset.css'
import './assets/css/iconfont.css'
/**/

/**/
//fontjs
import './assets/js/font'
// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// fastclick
import fastclick from 'fastclick'
import 'swiper/dist/css/swiper.css'
fastclick.attach(document.body)
//axios
import axios from 'axios'
Vue.prototype.axios = axios;
/**/ 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
