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
        <div class="pop-up-card">

            <div class="card">

                <div class="info">
                    <img :src="`/img/${parsedProduct.img}`" :alt="parsedProduct.name" class="product">

                    <div class="text-side">

                       
                        
                        <h1 class="title">Leche {{ parsedProduct.name }}</h1>

                        <ul>
                            <li><strong> 🔹Tipo: </strong>{{ parsedProduct.type }}</li>

                            <li><strong>🔹Peso: </strong>{{ parsedProduct.weight }}</li>

                            <li>
                                <strong>🔹País: </strong>{{ parsedProduct.country }}
                                <img class="country" :src="`/img/${parsedProduct.icon}`" alt="">
                            </li>
                            
                            <li class="socials">

                                <button class="green">
                                    Contacta para Comprar
                                    <font-awesome-icon :icon="['fab', 'whatsapp']" />

                                </button>
                                <button @click="emitPopUp" class="blue">
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
.pop-up-card {
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


.product {
    filter: drop-shadow(10px 15px 20px rgba(0, 0, 0, 0.7));
    max-width: 35vw;
}

.card .info {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #31439b;
}

img {
    width: 35%;
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
}

h1{
    font-size: 40pt;
    font-weight: 900;
    text-align: center;

}

.text-side ul li {
    font-size: 18pt;
    font-weight: 400;
    list-style-type: none;
}

ul{
    width: 100%;
}
strong {
    font-weight: 900;
}

.socials {
    font-size: small;
    display: flex;
    flex-direction: column;
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
button{
    height: 40px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.4s ease-in-out;
    color: #31439b;
    cursor: pointer;
}

button:hover {
    background: #31439b;
    color: white;
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
        font-size: 32pt !important;
    }

    .text-side {
        font-size: 14pt !important;

    }

    .text-side ul li {
        font-size: 14pt !important;

    }
}
</style>

