<script setup>
import { ref, watch } from "vue";

import ProductsList from "../products.json"

const emit = defineEmits(['activate-pop-up'])
const product = defineProps(["product"])

const referenceProduct = ref(product.product)
const showClass = ref("show")

let parsedProduct = ProductsList[product.product]

watch(product, () => {
    referenceProduct.value = product.product
    parsedProduct = ProductsList[product.product]
})

const emitPopUp = () => {
    emit('activate-pop-up', 0)
}


</script>

<template>
    <div v-if="referenceProduct != 0" class="container" :class="showClass">
        <div class="pop-up-card-container">

            <div class="card-container">

                <div class="info">

                    <div class="img-side">

                        <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name" class="product-img">

                        <div class="share-container">
                            <h4>Compartir en:</h4>

                            <div class="share-links">
                                <a href="https://www.facebook.com/branzafoods/" target="_blank" class="share-button">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="share-icons" />
                                </a>

                                <a href="https://www.instagram.com/branzafoods" target="_blank" class="share-button">
                                    <font-awesome-icon :icon="['fab', 'instagram']" class="share-icons" />

                                </a>

                                <a href="https://www.x.com/branzafoods" target="_blank" class="share-button">
                                    <font-awesome-icon :icon="['fab', 'x-twitter']" class="share-icons" />
                                </a>
                            </div>

                        </div>

                    </div>

                    <div class="text-side">

                        <h1 class="title">Leche {{ parsedProduct.name }}</h1>

                        <ul>
                            <li>
                                <img src="/img/icono-2.png" alt="icono" class="icon-img">
                                <div class="line-text">
                                    <h2><strong> Presentación: </strong></h2>
                                    <h3>Bolsa multipliego de papel Kraft con bolsa de polietileno interior de 25 kg.</h3>
                                </div>
                            </li>

                            
                            <li>
                                <img src="/img/icono-1.png" alt="icono" class="icon-img">
                                <div class="line-text">
                                    <h2><strong> Características: </strong></h2>
                                    <h3>{{parsedProduct.type}}</h3>
                                </div>
                            </li>
                      
                            <li>
                                <img src="/img/icono-3.png" alt="icono" class="icon-img">
                                <div class="line-text">
                                    <h2><strong> País: </strong></h2>
                                    <img :src="`/img/${parsedProduct.icon}`" alt="icono" class="icon-img">
                                </div>
                            </li>


                            <li class="socials">
                                <a href="https://wa.me/584142665125" class="green button">
                                    Contacta para Comprar  <font-awesome-icon :icon="['fab', 'whatsapp']" />

                                </a>
                                <button @click="emitPopUp" class="blue button">
                                    Volver
                                    <font-awesome-icon :icon="['fas', 'backward']" />
                                </button>


                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pop-up-card-container {
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 40;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-container .info {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #31439b;
}

.img-side {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
}

.img-side .product-img {
    filter: drop-shadow(10px 15px 20px rgba(0, 0, 0, 0.7));
    max-width: 300px;
    min-width: 300px;
}

.share-container {
    width: 100%;
}

.share-container h4 {
    text-align: center;
}

.share-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.share-button {
    height: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.4s ease-in-out;
    color: #31439b;
    cursor: pointer;
    background: #f0f0f0;
    padding: 10px 20px;
}

.share-button:hover {

    background: #31439b;
    color: white;
}


.title {
    border-radius: 15px;
    line-height: 48px;
    padding: 10px 0px 10px 0px !important;

}

.text-side {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    height: 90vh;
}

h1 {
    font-size: 40pt;
    font-weight: 900;
    text-align: center;

}
h2{
    font-size: 20pt;
}
h3{
    font-size: 15pt;
    font-weight: 400;
}

.text-side ul li {
    font-size: 14pt;
    font-weight: 400;
    list-style-type: none;
    padding: 3px 0px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 50px 0px;
}
.socials{
    flex-direction: column;
    width: 100%;
}
.icon-img{
    width: 50px;
    height: 50px;
}
ul{
    width: 100%;
}

strong {
    font-weight: 900;
}







.button {
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.4s ease-in-out;
    color: #31439b;
    cursor: pointer;
    background: #f0f0f0;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: none;
    font-size: medium;
}

.button:hover {
    background: #31439b;
    color: white;
}


.active {
    display: block;
}


.show {
    display: block;
}

.country {
    width: 20px;
}

.none {
    display: none;
}



@media (max-width: 1100px) {
    .card-container {
        width: 90%;
    }
    .card-container .info{
        justify-content: space-evenly;
    }

    .title {
        font-size: 30pt !important;
    }

    h2 {
        font-size: 14pt !important;

    }

    h3 {
        font-size: 10pt !important;

    }
    .text-side{
        gap: 0px;
        justify-content: center;
    }
    .text-side ul li{
         margin: 0px;
    }
    .product-img{
        max-width: 180px !important;
    min-width: 180px !important;
    }
    .button{
        font-size: small;
    }

    .product {
        max-width: 15vw !important;
    }

}

@media (max-width: 650px) {
    .title {
        font-size: 26pt !important;
    }
    .product-img{
        max-width: 140px !important;
    min-width: 140px !important;
    }

  
}
</style>

