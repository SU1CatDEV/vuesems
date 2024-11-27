
import App from '@/App.vue'

import Vue from 'vue'
import { router } from './router'
import '@/assets/styles/global.css'

// Create Vue instance and mount it
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
