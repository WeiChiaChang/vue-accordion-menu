import Vue from 'vue'
import App from './App.vue'

import { AccordionMenu } from 'vue-accordion-menu'
Vue.component('AccordionMenu', AccordionMenu)

new Vue({
  el: '#app',
  render: h => h(App)
})
