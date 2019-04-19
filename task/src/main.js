import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data () {
    return {
      info: null
    }
  },
}).$mount('#app')
// var app = new Vue({
//   el:'#app',
//   data:{
//     name:'avinash'
//   }
// }); 
