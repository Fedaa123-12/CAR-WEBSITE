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

                    <div class="col-md-4">
                        <div class="item-description">
                            <h3>{{ items.Name }} {{ items.Model }}</h3>
                            <ul class="item-details">
                                <li><strong>Value:</strong> {{ items.Value }}</li>
                                <li><strong>Mileage:</strong> {{ items.Mileage }}</li>
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
                    <!-- Car description-->
                </div>
                <!-- Row End-->
                <div style="border: 1px solid #ccc;">
                    <h1>Car Description:</h1>
                    <h5>{{ items.Description }}</h5>
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
                const response = await axios.get("https://car-website-2.onrender.com/getCarByID?id=" + id);
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
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
</style>