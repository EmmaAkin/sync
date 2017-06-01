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
        listing: this.$listingModel,
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
   },
            // expiringListing(){
            // 	expiring = _.
            // 	return expiring
            // },
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
            },
            pendingStatus(){
                let submitDate = this.$listingModel.submittedDate

            },
            isExpiring(){
               let user_date = new Date(this.$listingModel[0].submittedDate);

               let CUTOFF = 4*60*60*24
               let LIFETIME = 7*60*60*24*1000

               let NOW = new Date();
               let expirationDate = new Date(user_date.getTime()+ LIFETIME);



               return (expirationDate.getTime() - NOW.getTime()) < CUTOFF;

           },
           isNew(){
               let user_date = new Date(this.$listingModel[0].submittedDate);

               let CUTOFF = 2*60*60*24
               let LIFETIME = 7*60*60*24*1000

               let NOW = new Date();
               let expirationDate = new Date(user_date.getTime()+ LIFETIME);
               console.log("This expires", expirationDate.toDateString());


               return (expirationDate.getTime() - NOW.getTime()) < CUTOFF;

           },


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
    }
    .listing-img{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    img.center-block{
        height:180px !important;
    }

    img.icon{
        width: 30px !important;
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
        max-height: 360px !important;
        margin-right: 15px !important;
        margin-left: 15px !important;
        padding: 0px 0px 10px 0px !important;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;

    }
    .image.center-block{
        height:180px !important;
    }

    .listing-content{
        display: inline-block;
        padding-left: 10px;
        padding-right:  10px;
        margin-top: -35px;

    }

    .listing-details-price{
        float: left;
    }
    .listing-details-features{
        display: inline-flex;
        float:right;
    }
    .listed-logo {
        float:right;
        max-height: 50px;
        padding-bottom: 10px;

    }
    .listed-logo .icon{
        border-radius: 50%;
    }

    .icon.olx{
        opacity: 0.2;
    }
    .listed-rating{

    }

    .detail-features{
        box-sizing: border-box;
        width: 48.57143%;
        float: right;
        margin-right: 0;
        text-align: right;
        font-size: 15px;
    }

    ul.detail-features{
            list-style: none;
            margin: 0;
            padding: 0
    }
    .bed-feature, .bath-feature {
            display: inline;
            color: #000;
            font-weight: 700;
    }
     .bed-feature:before, .bath-feature:before{
            padding-right: 3px;
            color: #999;
            font-weight: 400;
    }
    ul li {
        display: inline;
    }
    .listed-on
    {
            margin-top: 40px;
            border-top: 1px solid;
            padding-top: 10px;
    }
    .fa-bed, .fa-shower{
            color:#F3C241;
    }

    /*Retina scrren*/
    @media screen
        and (min-device-width: 1200px)
        and (max-device-width: 1600px)
        and (-webkit-min-device-pixel-ratio: 1)
      {
            .listing-content{
                 margin-top: -35px;
            }

        }

</style>