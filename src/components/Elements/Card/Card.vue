<template src="./Card.html"></template>

<script>
  import Vue from 'vue'
  export default {
    name: 'Card',
    props: [
      'title',
      'bodyClass',
      'noHeader',
      'additionClassName'
    ]
  }
</script>
<style>
    .icon .img-listing-logo{
            padding: 0px;
        }
</style>