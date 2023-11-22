<script setup>
import { ref, watch } from "vue";

import ProductsList from '../products-small.json'


const emit = defineEmits(['activate-pop-up'])

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

const emitPopUp=()=>{
    emit('activate-pop-up',0)
}

</script>

<template>
<div v-if="referenceProduct != 0" class="container" :class="showClass">
        <div class="pop-up-card">
            <div class="card">
                <div class="content">
                    <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name" >
                    <div class="text-side">
                        <div class="close">
                            <font-awesome-icon @click="emitPopUp" :icon="['fas', 'xmark']" class="close" />        
                        </div>

                        <h1 class="title">{{ parsedProduct.name }}</h1>

                        <ul>
                        
                            <li>
                                Tipo: {{ parsedProduct.type }}
                            </li>
                        
                            <li>
                                Cantidad: {{ parsedProduct.weight }}
                            </li>
                        
                            <li>
                                País: {{ parsedProduct.country }}
                                <img class="country" src="/img/venezuela.png" alt="">
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

                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank" class="icon-link">
                                <font-awesome-icon :icon="['fab', 'x-twitter']" class="icons" />
                            </a>

                        </div>
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
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: 50%;
    height: 80%;
    border: 3px solid #31439b;
    background: rgba(51, 186, 237, .45);
    box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
    backdrop-filter: blur(19.5px);
    -webkit-backdrop-filter: blur(19.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
}
.content{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

img {
    width: 35%;
}

.title {
    border-radius: 15px;
    line-height: 48px;
    padding: 15px;
    background: white;
    color: #31439b
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
    font-size: 30pt;
    font-weight: 900;
    text-align: center;
}

.text-side ul li {
    font-size: 18pt;
    font-weight: 400;
}

strong {
    font-weight: 900;
}

.socials .icons {
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
    color: white;
}

.socials .icons:hover {
    background: #31439b;
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
.country{
    width: 20px;
}

.none {
    display: none;
}

@media (max-width: 1100px) {
    .card {
        width: 90%;
    }
    .title{
        font-size: 30pt !important;
    }
    .text-side{
        font-size: 14pt !important;
        
    }
    .text-side ul li{
        font-size: 14pt !important;
    
    }
    
}

@media (max-width: 650px) {
    .title{
        font-size: 24pt !important;
        line-height: 30px;
    }
    .text-side{
        font-size: 14pt !important;
        
    }
    .text-side ul li{
        font-size: 14pt !important;

    }
}
</style>

