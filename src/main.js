import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// import { detect } from 'detect-browser';
import store from './store'

Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(BootstrapVue)

Vue.use(VueSweetalert2);

window.addEventListener('load', function() {
  AOS.init()
})

/*
// Browser Detection
axios.post('http://spurs.vipfanportal.com/renewalApi/api/router/Tracking.php',{
  action: "tracking",
  prefix: "spurs2020_tracking",
  label: `browser/${detect().name}`
}).catch( () => {
  window.console.log('failed tracking')
});
*/

Vue.directive('ePitchTracking', {
  bind(el, binding){    
    const label = binding.value;

    el.addEventListener('click', () => {
      // axios.post('http://spurs.vipfanportal.com/renewalApi/api/router/Tracking.php',{
      //   action: "tracking",
      //   prefix: "spurs2020_tracking",
      //   label: label
      // }).catch( () => {
      //   window.console.log('failed tracking')
      // });
      window.console.log(label)
    })
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
