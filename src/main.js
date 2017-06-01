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

Vue.prototype.$listingModel =[

                         {
                         name:"Andrew",
                         email:"test4@berkowitz.org",
                         title:"Two Storey building for rent at East Legon",
                         propertyType:' House',
                         subcategory:"Rooms",
                         streetaddress:"",
                         region:'Adjiringanor',
                         city:'Accra',
                         baths:"5",
                         beds:"5",
                         rooms:"5",
                         livingarea:"200",
                         landarea:"100",
                         availableOn:"2017-01-14",
                         floor:"1",
                         build:"2010",
                         carspace:"",
                         shortlet:"",
                         description:"Built in 2014, this  unique  home has an amazing entry and grand foyer that sets the stage for this two-story home in Adjiringanor around East Legon and about 20 minutes drive from the airport.",

                         image:"http://ghanahomesforsale.com/wp-content/uploads/2015/11/house-in-Agiringanor-accra-for-sale-front-view.jpg",
                         image_thumbnails1:"http://ghanahomesforsale.com/wp-content/uploads/2015/11/house-in-Agiringanor-accra-for-sale-front-view-80x80.jpg",
                         image_thumbnails2:"http://ghanahomesforsale.com/wp-content/uploads/2015/11/house-in-Agiringanor-accra-for-sale.jpg",
                         image_thumbnails3:"",
                         image_thumbnails4:"",

                         price:"15,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "meqasa", "olx"],
                         submittedDate:"2017-02-05",
                         approvedDate:"2017-02-15",


                         },
                         {
                         name:"Andrew",
                         email:"test4@berkowitz.org",
                         title:"4 Bedroom Home at Tema, Community 18",
                         propertyType:' House',
                         subcategory:"Rooms",
                         streetaddress:"",
                         region:'Kumasi',
                         city:'Kumasi',
                         baths:"4",
                         beds:"2",
                         rooms:"5",
                         livingarea:"250",
                         landarea:"150",
                         availableOn:"2017-06-05",
                         floor:"1",
                         build:"2010",
                         carspace:"",
                         shortlet:"",
                         description:"Completed with remote control garage, poly tank, 2 water pumps, power plant, and AC. ll bedrooms are en suite, Tiled floor outside, landscaping, security post, security fence. Ready to move in. All rooms are very spacious.",

                         image:"http://ghanahomesforsale.com/wp-content/uploads/2015/03/house-for-sale-in-tema-back-view-870x350.png",
                         image_thumbnails1:"http://ghanahomesforsale.com/wp-content/uploads/2015/03/house-for-sale-in-tema-swimming-pool-mango-tree-870x350.png",
                         image_thumbnails2:"http://ghanahomesforsale.com/wp-content/uploads/2015/03/house-for-sale-in-tema-stairway-870x350.png",
                         image_thumbnails3:"http://ghanahomesforsale.com/wp-content/uploads/2015/03/house-for-sale-in-tema-pool-view-870x350.png",
                         image_thumbnails4:"",

                         price:"290,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "olx"],
                         submittedDate:"2016-12-05",
                         approvedDate:"2017-12-28",


                         },
                         {name:"Andrew",
                         email:"test4@berkowitz.org",
                         title:"6 bedroom House for sale in Trasssaco",
                         propertyType:' House',
                         subcategory:"Rooms",
                         streetaddress:"",
                         region:'East Legon',
                         city:'Accra',
                         baths:"6",
                         beds:"6",
                         rooms:"5",
                         livingarea:"200",
                         landarea:"100",
                         availableOn:"2017-06-05",
                         floor:"1",
                         build:"2010",
                         carspace:"",
                         shortlet:"",
                         description:"A four bedroom house at Trasssaco Phase 3 going up for sale. its has an outer house 2 bedroom, main garage, two additional garage,spacious parking space,all rooms comes with air conditions,compound are tiled with modern and durable tiles ,security wall wire and swimming pool.",

                         image:"http://ghanahomesforsale.com/wp-content/uploads/2015/05/IMG-20150426-WA0006-870x350.jpg",
                         image_thumbnails1:"http://ghanahomesforsale.com/wp-content/uploads/2015/05/AIRCONDITION-2-581x350.jpg",
                         image_thumbnails2:"http://ghanahomesforsale.com/wp-content/uploads/2015/05/HALL-4-581x350.jpg",
                         image_thumbnails3:"http://ghanahomesforsale.com/wp-content/uploads/2015/05/flowers-5-870x350.jpg",
                         image_thumbnails4:"",

                         price:"519,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "meqasa","lamudi", "olx"],
                         submittedDate:"2016-12-05",
                         approvedDate:"2017-12-28",


                         },
                           {
                         name:"Eben",
                         email:"test4@berkowitz.org",
                         title:"Mansion for Sale in Dodowa, Greater Accra",
                         propertyType:' House',
                         subcategory:"Rooms",
                         streetaddress:"",
                         region:'Dodowa',
                         city:'Greater Accra',
                         baths:"4",
                         beds:"5",
                         rooms:"5",
                         livingarea:"200",
                         landarea:"100",
                         availableOn:"2017-04-05",
                         floor:"1",
                         build:"2010",
                         carspace:"",
                         shortlet:"",
                         description:"The mansion comes with spacious living room with open kitchen and dining area, plus a mini bar within the kitchen. The home has huge bedrooms with en suites and walk-in closets.",

                         image:"http://ghanahomesforsale.com/wp-content/uploads/2015/10/mansion-house-in-accra-dodowa-front.png",
                         image_thumbnails1:"http://ghanahomesforsale.com/wp-content/uploads/2015/10/mansion-house-in-accra-dodowa-front-2.png",
                         image_thumbnails2:"http://ghanahomesforsale.com/wp-content/uploads/2015/10/mansion-house-in-accra-dodowa.png",
                         image_thumbnails3:"http://ghanahomesforsale.com/wp-content/uploads/2015/08/dodowa-accra-ghana-mansion-for-sale-17-870x350.png",
                         image_thumbnails4:"",

                         price:"600,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "meqasa", "lamudi"],
                         submittedDate:"2017-04-05",
                         approvedDate:"2017-04-15",

                         },


                         {

                         name:"Andrew", email:"test4@berkowitz.org",
                         title:"5 Bedroom House to Rent In Dansoman",
                         propertyType:' House',
                         subcategory:"Rooms",
                         streetaddress:"",
                         region:'Dansoman',
                         city:'Accra',
                         baths:"4",
                         beds:"4",
                         rooms:"5",
                         livingarea:"200",
                         landarea:"100",
                         availableOn:"2017-05-15",
                         floor:"1",
                         build:"2010",
                         carspace:"",
                         shortlet:"",
                         description:"5 bedrooms, 5 bathrooms ensuite a safe and peaceful location in Accra, Ghana. Story building in South Dansoman with extra reservoir water tank. Spacious living room, garden, Reasonable parking space and beautifully tiled.",

                         image:"http://ghanahomesforsale.com/wp-content/uploads/2015/03/house-in-tema-ghana-front1-870x450.png",
                         image_thumbnails1:"http://ghanahomesforsale.com/wp-content/uploads/2015/12/121-870x350.jpg",
                         image_thumbnails2:"http://ghanahomesforsale.com/wp-content/uploads/2015/12/131-784x350.jpg",
                         image_thumbnails3:"http://ghanahomesforsale.com/wp-content/uploads/2015/12/141-870x350.jpg",
                         image_thumbnails4:"",

                         price:"119,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["lamudi", "meqasa", "olx"],
                         submittedDate:"2017-03-05",
                         approvedDate:"2017-03-25",


                         }
                          ];


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
