<script setup>
import { ref, watch } from "vue";

import ProductsList from "../products.json"

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

const emitPopUp = () => {
    emit('activate-pop-up', 0)
}


</script>

<template>
    <div v-if="referenceProduct != 0" class="container" :class="showClass">
        <div class="pop-up-card">

            <div class="card">

                <div class="info">
                    <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name" class="product">

                    <div class="text-side">

                        <div class="close">
                            <font-awesome-icon @click="emitPopUp" :icon="['fas', 'xmark']" class="close" />
                        </div>

                        <h1 class="title">Leche  {{ parsedProduct.name }}</h1>

                        <ul>
                            <li>
                                <strong>
                                    Tipo:

                                </strong>
                                {{ parsedProduct.type }}
                            </li>

                            <li>
                                <strong>
                                    Peso:
                                </strong>
                                {{ parsedProduct.weight }}
                            </li>

                            <li>
                                <strong>
                                    País:
                                </strong>
                                {{ parsedProduct.country }}

                                <img class="country" :src="`/img/${parsedProduct.icon}`" alt="">
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="socials">

                    <h2>
                        Compartir en:
                    </h2>

                    <div class="buttons">
                        <a href="https://www.facebook.com/branzafoods/" target="_blank" class="icon-link">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" class="icons" />
                        </a>

                        <a href="https://www.instagram.com/branzafoods" target="_blank" class="icon-link">
                            <font-awesome-icon :icon="['fab', 'instagram']" class="icons" />
                        </a>

                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                            class="icon-link">
                            <font-awesome-icon :icon="['fab', 'x-twitter']" class="icons" />
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
    background-color: #33baed;
    z-index: 100 ;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: 50%;
    height: 75%;
    border: 3px solid #31439b;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
    backdrop-filter: blur(19.5px);
    -webkit-backdrop-filter: blur(19.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

}

.product {
    filter: drop-shadow(10px 15px 20px rgba(0, 0, 0, 0.7));
}

.card .info {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #31439b;
}

img {
    width: 35%;
}

.title {
    border-radius: 15px;
    line-height: 48px;
    padding: 10px 0px 10px 0px !important;
    color: #31439b;
   
}

.text-side {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

.text-side h1 {
    font-size: 40pt;
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

.socials {
    position: absolute;
    top: 85%;
    left: 60%;
    font-size: small;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #31439b;

}
.socials .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
}

.socials .icons {
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
    color: #31439b;

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

.country {
    width: 20px;
}

.none {
    display: none;
}

@media (max-width: 1100px) {
    .card {
        width: 90%;
    }

    .title {
        font-size: 40pt !important;
    }

    .text-side {
        font-size: 14pt !important;

    }

    .text-side ul li {
        font-size: 14pt !important;

    }

}

@media (max-width: 650px) {
    .title {
        font-size: 24pt !important;
    }

    .text-side {
        font-size: 14pt !important;

    }

    .text-side ul li {
        font-size: 14pt !important;

    }
}
</style>

