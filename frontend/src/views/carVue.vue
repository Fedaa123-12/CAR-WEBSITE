<template>
    <div class="container">
        <div v-if="items">
            <!-- Container -->
            <div class="container">
                <br>
                <!-- Row-->
                <div class="row">
                    <!-- Gallery Item -->
                    <div class="col-md-8">
                        <div v-if="items.Image" id="carouselExampleControls" class="carousel slide">
                            <div class="carousel-inner">
                                <!-- Loop through images -->
                                <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
                                    v-for="(imageUrl, index) in items.Image.split(',')" :key="'image-' + index">
                                    <img v-if="imageUrl" :src="imageUrl.trim()" class="d-block w-100" alt="...">
                                </div>
                                <!-- Loop through images -->

                                <!-- Video -->
                                <div v-if="items.Video" class="carousel-item">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" :src="items.Video"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                                <!-- Video -->

                            </div>
                            <!-- Previous and Next buttons -->
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <!-- Gallary view end-->
                    </div>
                    <!-- Car description-->
                    <div class="col-md-4">
                        <div class="item-description">
                            <h3>{{ items.Name }} {{ items.Model }}</h3>
                            <ul class="item-details">
                                <li><strong>Value:</strong> {{ formatPrice(items.Value) }}</li>
                                <li><strong>Mileage:</strong> {{ formatMileage(items.Mileage) }}</li>
                                <li><strong>Year:</strong> {{ items.YearOfManu }}</li>
                                <li><strong>MOT Expiry:</strong> {{ items.MotExp }}</li>
                                <li><strong>Key Count:</strong> {{ items.KeyNo }}</li>
                                <li><strong>HPI Status:</strong> {{ items.CatStat }}</li>
                                <li><strong>Colour:</strong> {{ items.Colour }}</li>
                                <li><strong>Fuel Type:</strong> {{ items.FuelType }}</li>
                                <li><strong>Extra Features:</strong> {{ items.ExtraFeatures }}</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Car description end-->
                </div>
                <!-- Row End-->
                <div style="border: 1px solid #ccc; padding: 10px;">
                    <h1>Car Description:</h1>
                    <div v-for="(line, index) in items.Description.split('-')" :key="index">
                        <h5>- {{ line.trim() }}</h5>
                    </div>
                </div>
            </div>
            <!-- Container end-->
        </div>
        <div v-else class="d-flex justify-content-center align-items-center" style="height: 300px;">
            <div class="spinner-border" role="status" style="width: 5rem; height: 5rem;">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            items: null,
        }
    },
    name: 'carVue',
    created() {
        this.getCarById(this.$route.params.id);
    },
    methods: {
        async getCarById(id) {
            try {
                const response = await axios.get("https://carwebsite-backend-production.up.railway.app/getCarByID?id=" + id);
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        formatMileage(mileage) {
            // Format the mileage
            return mileage.toLocaleString('en-US');
        },
        formatPrice(price) {
            // Format the price as currency
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
            }).format(price);
        },
        sortWithAnimation(sortFunction) {
            const container = $(".container"); // Assuming .container is the parent of the items to be sorted
            container.fadeOut("fast", () => {
                sortFunction();
                container.fadeIn("medium");
            });
        },
    }
}
</script>


<style>
.item-description {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
}

.item-details {
    list-style-type: none;
    padding: 0;
}

.item-details li {
    margin-bottom: 10px;
}

.item-details strong {
    margin-right: 10px;
    font-weight: bold;
}

.item-details li {
    font-size: large;
}
/* Custom CSS for spacing and alignment */
.carousel-image {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 500px;
    /* Adjust the maximum height as needed */
}
.item-description {
    padding: 20px;
}
.carousel-item {
    width: 100%;
    /* Adjust the width as needed */
    height: 400px;
    /* Adjust the height as needed */
    overflow: hidden;
}
.carousel-item iframe,
.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* Keeps the original aspect ratio while fitting the image within the container */
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
   background-color: rgb(147, 147, 147);
   border-radius: 20px;
}
</style>