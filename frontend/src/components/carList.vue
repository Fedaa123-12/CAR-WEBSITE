<script>
import axios from "axios";

export default {
    data() {
        return {
            items: null,
        }
    },
    created() {
        this.getCars();
    },
    methods: {
        async getCars() {
            try {
                const response = await axios.get("https://car-website-2.onrender.com/");
                this.items = response.data;
                console.log(this.items)

            } catch (err) {
                console.log(err);
            }
        },
        async refreshOnError() {
            window.location.reload();
        },
        getTopThreeItems() {
            // Sort the items array by ID in descending order
            const sortedItems = this.items.sort((a, b) => b.ID - a.ID);
            // Return the first three items
            return sortedItems.slice(0, 3);
        }

    }
};
</script>
<template>
    <main>

        <div class="album py-5">


            <div class="container container-with-bg text-center">

                <div class="row">
                    <div class="col-md-6 offset-md-6 text-middle-right">
                        <h1 style="text-shadow: 0 0 10px rgba(0, 0, 0, 1); color: #ebebd3;">Back on the road</h1>
                    </div>
                </div>


            </div>

            <br>
            <div class="container">


                <h1 style="text-align: center;">Recenly Added cars</h1>
                <hr>
                <div v-if="items">

                    <!-- <div v-if="items[0].errno === '104' " >
                        {{  refreshOnError() }}
                    </div> -->
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div class="col" v-for="item in getTopThreeItems()" :key="item.ID">

                            <router-link class="link" :to="{ name: 'carVue', params: { id: item.ID } }">
                                <div class="card shadow-sm">

                                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                        xmlns="http://www.w3.org/2000/svg" role="img"
                                        aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                        focusable="false">
                                        <image :href="item.Image.split(',')[0].trim()" width="100%" height="100%" />
                                    </svg>
                                    <div class="card-body">
                                        <p class="card-text">

                                            <strong>Brand:</strong> {{ item.Name }}<br>
                                            <strong>Model:</strong> {{ item.Model }}<br>
                                            <strong>Mileage:</strong> {{ item.Mileage }}<br>
                                            <strong>Hpi Status:</strong> {{ item.CatStat }}
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">


                                        </div>

                                    </div>

                                </div>
                            </router-link>

                        </div>
                    </div>
                    <br>
                    <div class="col d-flex justify-content-center">

                        <a class="view-more alink" href="/cars"> <button type="button"
                                class="view-more btn btn-primary btn-lg">View More</button></a>


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

<!-- <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary" 
                                        @click=deleteCars(item.ID)>Delete</button>
                                    </div> 
                                
                                
                                async deleteCars(id) {
            try {
                await axios.delete("https://carwebsiteapi.cyclic.app/deleteById?id=" + id);
                const index = this.items.findIndex(item => item.ID === id);
                if (index !== -1) {
                    this.items.splice(index, 1);
                }
            } catch (err) {
                console.log(err);
            }
        },-->
