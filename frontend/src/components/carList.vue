<template>
    <table class = "table is-striped is-bordered mt-2 is-fullwidth">
    <tr>
        <th>Brand</th>
        <th>Model</th>
    </tr>
    <tbody>
        <tr v-for="item in items" :key="item.ID">
            <td>
                {{ item.Name }}
            </td>
            <td>
                {{ item.Model }}
            </td>

            


        </tr>
    </tbody>
    </table>
    </template>


<script>
import axios from "axios";
export default{
    data(){
        return{
            items: [],
        }
    },
    created(){
        this.getCars();
        
    },
    methods:{
        async getCars(){
            try{
                const response = await axios.get("https://carwebsiteapi.cyclic.app");
                this.items = response.data;
            }catch(err){
                console.log(err);
            }
        }
    }
};
</script>