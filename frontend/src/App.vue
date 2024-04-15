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


/* Custom CSS for spacing and alignment */
.gallery-item {
  display: flex;
  margin-bottom: 20px;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
}

.item-description {
  padding: 20px;
}


.carousel-item img,
.carousel-item iframe {
  width: 100%;
  height: 400px;
  /* Adjust the height as needed */
  object-fit: cover;
}





.custom-select-box select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20%;
  padding: 8px 40px 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 20px;
  outline: none;
  background-color: #fff;
  font-size: 16px;
}

.custom-select-box select::-ms-expand {
  display: none;
}

.custom-select-box::after {
  content: "\f078";
  font-family: FontAwesome;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #495057;
}
</style>
