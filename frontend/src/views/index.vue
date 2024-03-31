<template>
    <div>
      <carList />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import carList from '../components/carList.vue'
  
  export default {
    name: 'index',
    components: {
        carList
    }
  }
  </script>
  