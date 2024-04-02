<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.ID">
                <td scope="col">
                    {{ item.Name }}
                </td>
                <td scope="col">
                    {{ item.Model }}
                </td>
                <td :id = item.ID  scope="col" @click = >
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>


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
                const response = await axios.get("https://carwebsiteapi.cyclic.app");
                this.items = response.data;
            } catch (err) {
                console.log(err);
            }
        },
        async deleteCars(){
       
        }
    }
};
</script>