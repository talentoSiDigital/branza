<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>

<template>
    <div class="slider">
        <div class="slider-container">


            <carousel :items-to-show="1">
                <slide v-for="slide in 3" :key="slide">
                    <div class="card">
                        <img src="../assets/img/ADECO.jpg" alt="adecoagro">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera AdecoAgro</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, at?
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/CONAPROLE.png" alt="adecoagro">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Conaprole</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, at?
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/MAGNALAT.jpg" alt="adecoagro">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Magnalat</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, at?
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/CONAPROLE.png" alt="adecoagro">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Conaprole</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, at?
                            </p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="../assets/img/ADECO.jpg" alt="adecoagro">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera AdecoAgro</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, at?
                            </p>
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <div class="arrow">
                        <navigation />
                    </div>
                  
                </template>
            </carousel>


        </div>
    </div>
</template>

<style scoped>
.slider {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
}

.slider-container {
    display: flex;
    width: 100%;
}

.card {
    width: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center
}

.card img {
    width: 60%;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.10);
}

.arrow svg{
    background: #273294;
    width: 20px;
   
}
</style>

