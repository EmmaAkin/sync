<template src="./Dashboard.html"></template>

<script>
// import TodaySaleChart from './TodaySaleChart/TodaySaleChart.vue'
import Statuses from './Statuses/Statuses.vue'
import CircleChart from './CircleChart/CircleChart.vue'
import _ from 'lodash'

export default {
  name: 'Dashboard',
  data(){
        return{
                listing:[
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
                         availableOn:"2017-06-05",
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

                         price:"GHC 600,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "meqasa", "lamudi"],

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
                         availableOn:"2017-06-05",
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

                         price:"GHC 119,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["lamudi", "meqasa", "olx"],


                         },
                         {
                         name:"Andrew",
                         email:"test4@berkowitz.org",
                         title:"Two Storey building for rent",
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
                         availableOn:"2017-06-05",
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

                         price:"GHC 15,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "meqasa", "olx"],


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

                         price:"GHC 290,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "olx"],


                         },
                         {name:"Andrew",
                         email:"test4@berkowitz.org",
                         title:"6 bedroom House in Trasssaco",
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

                         price:"GHC 519,000",
                         currency:"GHC",
                         priceAvailability:"No",
                         depositBond:"",
                         agentCommission:"",
                         pricingConditions:"Negotiable",
                         listedOn:["tonaton", "meqasa","lamudi", "olx"],


                         }
                          ],
                user:[
                        {
                            "name":"emma",
                            "title":"This is the title"
                        }
                ]
        }
  },
  methods:{
            updateListing(){

                     this.$listingModel.push(listing);
            }
  },
  computed: {
    getRandomlisting(){
        let randomNum =  Math.floor(Math.random() *  4)
        if (randomNum < 3 && this.randomNum > 1) {
            console.log(randomNum);
            return randomNum + 1;
        }
        else if (randomNum < 0){
            console.log("THis is the else if", randomNum);
            return randomNum + 2;
        }
        else {
            return 2;
        }
    },
    getListedOnStatus(){
        let randomNum =  Math.floor(Math.random() *  1)
        if (randomNum == 1){
            return true;
        }
        else{
            return false;
        }
    }
  },

  components: {
    // TodaySaleChart,
    Statuses,
    CircleChart
  }
}
</script>

<style>
        .navbar{
            height: 64px !important;


        }
        .navbar-collapse.collapse.in{
            height: 64px !important;
        }
        .navbar.navbar-collapse.navbar-nav{
            height: 64px !important;
        }
        .nav.navbar-nav.navbar-left, .nav.navbar-nav.navbar-right {
            height: 64px !important;
        }
        .navbar.navbar-collapse{
            background-color: #120F2A !important;
        }

        .aside.app-sidebar.sidebar-footer{
            background-color: #f5c243 !important;
        }

        .navbar-collapse.collapse.in, .sidebar-menu{
            background-color: #120F2A !important;
        }

        .listing-title{
            background-color: white !important;
            padding: 5px 10px 10px 20px !important;
            margin-bottom: 0px !important;
            border-bottom: 1px solid #f2f2f2 !important;
        }
        .listing-logo{
            width: 70px;
            }

        .img-listing-logo, .listing-img {
            max-width:100%;
            max-height: 100%;
            padding: 0px !important;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;

        }
        img.icon{
            width: 50px !important;
        }
        .listing-properties{
            height:70px;
            min-height: 50px;
            max-height:  80px;
        }

        .card-body < .listing-logo{
            min-height: 70px;
        }

        .card.card-banner .card-body .content{
            padding: 0rem !important;

        }

        .fa.fa-check-circle{
            padding: 5px 10px 0 0;
        }

        .content  .value{
            padding: 1rem 1rem 0 0 !important;
            font-size: 2.5em !important;
        }

        .card-pink-light .value{
            color:#FF22A7 !important;

        }
        .card-pink-light:hover {
            background-color:#FF22A7 !important;
        }
        .card-pink-light:hover .value{
            color: #FFF !important;
        }

        .row-listing{
            padding-left: 15px;
        }
        .row < .content-listing{
            padding: 0px !important;
        }
       .content-listing{
            background-color: white;
            margin-right: 15px !important;
            margin-left: 15px !important;
            padding: 0px 0px 10px 0px !important;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;

       }
        .listing-content{
            padding-left: 10px;
            display: inline-block;
        }

        .listing-details-price{
            float: left;
        }
        .listing-details-features{
            display: inline-flex;
            float:right;
        }
        .listed-on {
            float:right;
            max-height: 50px;
            padding-bottom: 10px;

        }
        .listed-on .icon{
            border-radius: 50%;
        }

        .icon.olx{
            opacity: 0.2;
        }
        .listed-rating{

        }


</style>