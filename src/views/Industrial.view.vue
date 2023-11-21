<script setup>
import productsData from '../products.json'
import ProductCard from '../partials/ProductCard.vue'
import PopUp from '../partials/PopUp.vue'
import BG1 from '../components/svgComponents/BG-1.vue'
import { ref } from 'vue';

const popUp = ref(0)

const activatePopUp = (index) => {

    if(popUp.value == 0){
        
        popUp.value = index
    } else {
        popUp.value = 0
    }
    
}

</script>

<template>
    <PopUp :product="popUp" @activate-pop-up="activatePopUp"/>


    <div class="bg-container absolute">
        <BG1 />
    </div>
    <div class="navbar-adjust"></div>
    <div class="industrial">
        <h1 class="white-text">Productos Industriales</h1>
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
    height: 100px;
}

.grid {
    display: flex;
    justify-content: center;

}

.industrial {
    position: relative;
    z-index: 2;
    padding: 10px;
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


.absolute {
    position: absolute;
    z-index: 1;
}

.bg-container {
    height: 100vh;
    width: 100%;
    overflow: hidden;
}
.white-text {
    color: white;
}
</style>

