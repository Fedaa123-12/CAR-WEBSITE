<template>
    <div class ="container">
    <div v-if="items">
        <table class="table">
        <thead>
            <tr><th>Name</th></tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ items.ID }}</td>
            </tr>
            <tr>
                <td>{{ items.Name }}</td>
            </tr>
            <tr>
                <img :src= "items.Image" width="100%" height="100%" />
            </tr>
            
        </tbody>
        
    </table>
    </div>
    <div v-else>
        Loading...
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
        }
    }
}
</script>   




