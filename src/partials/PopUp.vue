<script setup>
import { ref, watch } from "vue";

import ProductsList from "../products.json"


const product = defineProps(["product"])
const referenceProduct = ref(product.product)
const showClass = ref("show")

const close = () => {
    referenceProduct.value = 0

}

let parsedProduct = ProductsList[product.product]


watch(product, () => {
    referenceProduct.value = product.product
    parsedProduct = ProductsList[product.product]


})



</script>

<template>
    <div v-if="referenceProduct != 0" class="container" :class="showClass">
        <div class="pop-up-card">
            <div class="card">
                <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name">
                <div class="text-side">
                    <div class="close">
                        <font-awesome-icon @click="close" :icon="['fas', 'xmark']" class="close" />

                    </div>
                    <h1>Leche {{ parsedProduct.name }}</h1>
                    <ul>
                        <li>
                            Tipo: {{ parsedProduct.type }}
                        </li>
                        <li>
                            Peso: {{ parsedProduct.weight }}
                        </li>
                        <li>
                            País: {{ parsedProduct.country }}
                        </li>


                    </ul>
                    <div class="socials">
                        <h2>
                            Compartir en:

                        </h2>
                        <a href="https://www.facebook.com/branzafoods/" target="_blank" class="icon-link">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" class="icons" />
                        </a>
                        <a href="https://www.instagram.com/branzafoods" target="_blank" class="icon-link">
                            <font-awesome-icon :icon="['fab', 'instagram']" class="icons" />
                        </a>
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                            class="icon-link">
                            <font-awesome-icon :icon="['fab', 'twitter']" class="icons" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pop-up-card {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: 50%;
    height: 80%;
    background: rgb(51, 186, 237);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

img {
    width: 35%;
}

.text-side {
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.text-side h1 {
    font-size: 45pt;
    font-weight: 900;
    text-align: center;
}

.text-side ul li {
    font-size: 14pt;
    font-weight: 600;
}




.socials .icons {
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
}

.socials .icons:hover {
    background: #31439b;
    color: white;

}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
    color: white;
}

.close:hover {
    color: #31439b;
}

.active {
    display: block;
}


.show {
    display: block;
}

.none {
    display: none;
}
</style>

