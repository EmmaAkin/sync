import 'select2/dist/css/select2.css'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import VueFormWizard from 'vue-form-wizard'
import VueFormGenerator from "vue-form-generator/dist/vfg-core.js"
import Multiselect from 'vue-multiselect'

//Making API request to the server

import Api from './lib/api.js'

import Card from 'src/components/Elements/Card/Card.vue'
import TabSet from 'src/components/Elements/TabSet.vue'
import TabItem from 'src/components/Elements/TabItem.vue'
import Modal from 'src/components/Elements/Modal/Modal.vue'
import DataTable from 'src/components/Elements/DataTable/DataTable.vue'
import Select2 from 'src/components/Elements/Select2.vue'


//You can call this.

Vue.prototype.$api = Api;

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueFormWizard)
Vue.use(VueFormGenerator)
Vue.use(Multiselect)

Vue.use(require('vue-chartist'))
Vue.component('Card', Card)
Vue.component('TabSet', TabSet)
Vue.component('TabItem', TabItem)
Vue.component('Modal', Modal)
Vue.component('DataTable', DataTable)
Vue.component('Select2', Select2)
Vue.component('vueMultiSelect', Multiselect);


require('font-awesome/css/font-awesome.css')
require('highlightjs/styles/tomorrow-night.css')
require('jquery')
import hljs from 'highlightjs'
hljs.initHighlightingOnLoad()

Vue.prototype.listingModel = {};
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div class="app app-default">
    <router-view class="view"></router-view>
  </div>`
}).$mount('#app')
