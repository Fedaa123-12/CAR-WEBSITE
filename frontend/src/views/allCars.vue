<script>
import axios from "axios";
import $ from "jquery";

export default {
    data() {
        return {
            items: null,
            sortBy: null
        }
    },
    created() {
        this.getCars();
    },
    methods: {
        async getCars() {
            try {

                const response = await axios.get("https://carwebsite-backend-production.up.railway.app/");

                this.sortWithAnimation(() => this.items = response.data);
                this.sortWithAnimation(() => this.originalItems = response.data.slice());
            } catch (err) {
                console.log(err);
            }
        },
        sortCars(event) {
            const selectedValue = event.target.value;
            this.sortBy = selectedValue;
            this.sortItems();
        },
        sortItems() {
            if (this.sortBy) {
                if (this.sortBy === "ValueLowToHigh") {
                    this.sortWithAnimation(() => this.items.sort((a, b) => a.Value - b.Value));
                } else if (this.sortBy === "ValueHighToLow") {
                    this.sortWithAnimation(() => this.items.sort((a, b) => b.Value - a.Value));
                } else if (this.sortBy === "Recent") {
                    this.sortWithAnimation(() => this.items.sort((a, b) => b.ID - a.ID));
                } else if (this.sortBy === "Mileage") {
                    this.sortWithAnimation(() => this.items.sort((a, b) => a.Mileage - b.Mileage));
                } else if (this.sortBy === "Suggested") {
                    this.sortWithAnimation(() => this.items = this.originalItems.slice());
                }
            }
        },
        sortWithAnimation(sortFunction) {
            const container = $(".container"); // Assuming .container is the parent of the items to be sorted
            container.fadeOut("fast", () => {
                sortFunction();
                container.fadeIn("medium");
            });
        },
        formatPrice(price) {
            // Format the price as currency
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'GBP',
            }).format(price);
        }
    }
};
</script>





<template>
    <main>

        <div class="album py-5">
            <div class="container">
                <h1 style="text-align: center;">Our Available Cars</h1>

                <div>
                 
                    <div class="custom-select">
                        <select aria-label="Default select example" @change="sortCars">
                            <option selected disabled>Select an option</option>
                            <option value="Suggested">Suggested</option>
                            <option value="Recent">Recently Added</option>
                            <option value="ValueLowToHigh">Price (Low To High)</option>
                            <option value="ValueHighToLow">Price (High To Low)</option>
                            <option value="Mileage">Mileage</option>
                        </select>
                    </div>


                </div>
                <hr>
                <div v-if="items">
                    <div class="col" v-for="item in items" :key="item.ID">
                        <router-link class="link" :to="{ name: 'carVue', params: { id: item.ID } }">
                            <div class="card">
                                <div class="row g-0">
                                    <!-- Image on the left -->
                                    <div class="col-md-4">
                                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                            xmlns="http://www.w3.org/2000/svg" role="img"
                                            aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                            focusable="false">
                                            <image :href="item.Image.split(',')[0].trim()" width="100%" height="100%" />
                                        </svg>
                                    </div>
                                    <!-- Description on the right -->
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h3 class="card-title">{{ formatPrice(item.Value) }}</h3>
                                            <h5 class="card-text">{{ item.Name }} {{ item.Model }} </h5>
                                            <p class="card-text"> <strong>{{ item.YearOfManu }} | {{ item.CatStat }} |
                                                    MotExp: {{ item.MotExp }} </strong><br>
                                                {{ item.FuelType }} | Available Keys: {{ item.KeyNo }}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        <br><br>
                    </div>
                </div>

                <div v-else class="d-flex justify-content-center align-items-center" style="height: 300px;">
                    <div class="spinner-border" role="status" style="width: 5rem; height: 5rem;">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>


    </main>



</template>

<style>
.custom-select  {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 300px; /* Adjust as needed */
  border-radius: 20px;
}

select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #fff;
  appearance: none; /* Removes default appearance */
}

select:focus {
  outline: none;
  border-color: #007bff; /* Highlight border color on focus */
}
</style>