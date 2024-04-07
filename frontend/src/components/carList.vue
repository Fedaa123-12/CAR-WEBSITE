
<script>
import axios from "axios";
export default {
    data() {
        return {
            items: [],
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

            } catch (err) {
                console.log(err);
            }
        },

    }
};
</script>

<template>
    <main>
        <div class="album py-5">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" v-for="item in items" :key="item.ID">
                        <router-link class="link" :to="{ name: 'carVue', params: { id: item.ID } }">
                            <div class="card shadow-sm">

                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <image :href="item.Image" width="100%" height="100%" />
                                </svg>
                                <div class="card-body">
                                    <p class="card-text">

                                        <strong>Brand:</strong> {{ item.Name }}<br>

                                        <strong>Model:</strong> {{ item.Model }}
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">


                                    </div>

                                </div>

                            </div>
                        </router-link>
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
