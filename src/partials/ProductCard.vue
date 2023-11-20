<script setup>
import { ref } from "vue";
import ProductsList from "../products.json"
const product = defineProps(["product"])
const parsedProduct = ProductsList[product.product]



</script>

<template>
    <div class="card">
        <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name">
        <div class="card-text">
            <h1>
                Leche {{ parsedProduct.name }}
            </h1>
            <button>Ver más</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    border: 3px solid #31439b;
    padding: 15px;
    border-radius: 10px;
    width: 280px;
    height: 400px;
    transition: 0.2s;
}
.card:hover{
    transform: translate(-5px, -5px);
}
.card .card-text{
    display: flex;
    flex-direction: column;

}
h1{
    color: #31439b;
}
.card img {
    width: 170px;
}
button{
    border: none;
    background: #31439b;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    transition: 0.3s;
}
button:hover{
    background: #192753;
}
</style>

