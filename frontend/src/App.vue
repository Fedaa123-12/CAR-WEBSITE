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
  <router-view />

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
  height: 500px;
  /* Set a fixed height for the container */
  color: white;
  /* Text color */
}

.text-middle-right {
  position: absolute;
  top: 50%;
  right: 10%;
  /* Adjust the value to adjust horizontal position */
  transform: translateY(-50%);
}

.view-more {
  display: flex;
  justify-content: center;
  width: 70%;
}



.alink {
  text-decoration: none;
  color: inherit;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
}

.alink:focus,
.alink:hover {
  text-decoration: none;
}









</style>
