<template>
    <div class="container">
        <div v-if="items">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ items.ID }}</td>
                    </tr>
                    <tr>
                        <td>{{ items.Name }}</td>
                    </tr>
                    <tr>
                        <td>
                            <div v-if="items.Image" id="carouselExampleControls" class="carousel slide"
                                data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div :class="index === 0 ? 'carousel-item active' : 'carousel-item'"
                                        v-for="(imageUrl, index) in items.Image.split(',')" :key="index">
                                        <img :src=items.Image class="d-block w-100" alt="...">
                                    </div>
                                </div>
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
                        </td>
                    </tr>
                </tbody>



            </table>

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
