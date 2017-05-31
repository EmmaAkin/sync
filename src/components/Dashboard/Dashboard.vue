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
                listing:{
                    "title":"",
                    "description":"East Legon",
                    "bed":"5",
                    "bath":"4",
                    "size":"",
                    "streetAddress":"",
                    "region":"",
                    "city":"",
                    "location":"",
                    "phoneNumber":"",
                    "propertyType":"Apartment",
                    "propertyCategory":"",
                    "price":"GHC19,000",
                    "currency":"",
                    "rooms":"",
                    "livingArea":"",
                    "image":"https://meqasa.com/uploads/imgs/cf150e717db9fd79a3960918208f5ab9?dim=400x220",
                    "imageThumbnail":"",
                    "available":"",
                    "build":"",
                    "carSpace":"",
                    "agentCommission":""
                },
                user:[
                        {
                            "name":"emma",
                            "title":"This is the title"
                        }
                ]
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

        .listing-content{
            background-color: white;
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
        /*.listing-details-price{
            box-sizing: border-box;
            width: 48.57143%;
            float: left;
            margin: 0 2.85714% 0 0;
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
            font-weight: 600;
            font-size: 14px;
        }*/

        /*.listing-details-features{
            box-sizing: border-box;
            width: 48.57143%;
            float: right;
            margin-right: 0;
            text-align: right
        }*/

        /*@1440X900*/

</style>