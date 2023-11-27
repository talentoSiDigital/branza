<script setup>
import productsData from '../products-small.json'
import ProductCard from '../partials/ProductCard2.vue'
import PopUp from '../partials/PopUp2.vue'
import BG1 from '../components/svgComponents/BG-1.vue'
import { ref } from 'vue';

const popUp = ref(0)

const activatePopUp = (index) => {

    if (popUp.value == 0) {
        popUp.value = index
    } else {
        popUp.value = 0
    }

}

</script>

<template>
    <PopUp :product="popUp" @activate-pop-up="activatePopUp" />



    <div class="navbar-adjust"></div>

   

    <div class="industrial">

        <h1 class="white-text">Productos de <br> Consumo Masivo</h1>
        <div class="grid">
            <div class="products">

                <div v-for="(key, index) in productsData" :key="index" class="grid-item">
                    <ProductCard :product="index" @click="activatePopUp(index)" />
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar-adjust {
    background: #33baed;
    height: 100px;
}

.grid {
    display: flex;
    justify-content: center;

}
.grid .products .grid-items:first-child{
    display: none;
}
.industrial {
    position: relative;
    z-index: 2;
    padding: 10px;
    background: #33baed;
}

.products {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    place-items: center;

}

h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.white-text {
    color: white;
}
</style>


