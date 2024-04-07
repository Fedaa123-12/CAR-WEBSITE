<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar // Register the Navbar component
  }
};
</script>


<template>
  <Navbar />
  <nav>

  </nav>
  <router-view/>
</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap";




.link {
  text-decoration: none !important;
}

</style>
