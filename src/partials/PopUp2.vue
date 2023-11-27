<script setup>
import { ref, watch } from "vue";

import ProductsList from '../products-small.json'

const emit = defineEmits(['activate-pop-up'])
const product = defineProps(["product"])

const referenceProduct = ref(product.product)
const showClass = ref("show")

let parsedProduct = ProductsList[product.product]

const emitPopUp = () => {
    emit('activate-pop-up', 0)
}

watch(product, () => {
    referenceProduct.value = product.product
    parsedProduct = ProductsList[product.product]
})
</script>

<template>
    <div v-if="referenceProduct != 0" class="container" :class="showClass">
        <div class="pop-up-card">
            <div class="card">
                <div class="info">
                    <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name">
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
                                <img class="country" src="/img/venezuela.png" alt="venezuela-icon">
                            </li>
                            
                            <li> <h4>Compartir en:</h4> </li>
                            <li class="socials">

                                <a href="https://www.facebook.com/branzafoods/" target="_blank" class="icon-link">
                                       <font-awesome-icon :icon="['fab', 'facebook-f']" class="icons" />
                                    </a>

                                    <a href="https://www.instagram.com/branzafoods" target="_blank" class="icon-link">
                                        <font-awesome-icon :icon="['fab', 'instagram']" class="icons" />
                                    </a>

                                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods"
                                        target="_blank" class="icon-link">

                                        <font-awesome-icon :icon="['fab', 'x-twitter']" class="icons" />
                                    </a>
        
                            </li>
                         
                        </ul>

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
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: 50%;
    height: 80%;
    border: 3px solid #31439b;
    background: rgba(255, 255, 255, .6);

    box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
    backdrop-filter: blur(19.5px);
    -webkit-backdrop-filter: blur(19.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

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
    font-size: small;
    display: flex;
    gap: 15px;
    color: #31439b;
    margin-top: 10px;


}

.socials .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.socials .icons {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
    color: #31439b;

}

.socials .icons:hover {
    color: #18214f;

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
    .socials{
        margin-top: 20px !important;
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

