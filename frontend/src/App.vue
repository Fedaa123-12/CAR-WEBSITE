<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/footer.vue';
export default {
  components: {
    Navbar, // Register the Navbar component
    Footer
  }
};
</script>


<template>
  <Navbar />
  <nav>

  </nav>
  <router-view/>

  <Footer />
</template>

<style>
.link {
  text-decoration: none !important;
}

.container-with-bg {
      position: relative;
      background-image: url('assets/autumn-8362844_1920.jpg');
      background-size: cover;
      background-position: center center;
      height: 500px; /* Set a fixed height for the container */
      color: white; /* Text color */
    }
    .text-middle-right {
      position: absolute;
      top: 50%;
      right: 10%; /* Adjust the value to adjust horizontal position */
      transform: translateY(-50%);
    }





</style>
