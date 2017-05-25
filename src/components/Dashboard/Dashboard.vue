<template src="./Dashboard.html"></template>

<script>
// import TodaySaleChart from './TodaySaleChart/TodaySaleChart.vue'
import Statuses from './Statuses/Statuses.vue'
import CircleChart from './CircleChart/CircleChart.vue'

export default {
  name: 'Dashboard',
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
        }
        .listing-logo{
            width: 70px;
            }

        .img-listing-logo {
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

        /*@1440X900*/

</style>