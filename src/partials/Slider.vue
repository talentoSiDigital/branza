<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, onUnmounted, ref, watch } from 'vue'

import products from '../products.json'

const breakpoints = {
    500:{
          // 500px and up
          itemsToShow: 1,
          snapAlign: 'center',
        }
        ,
        800: {
          // 700px and up
        itemsToShow: 3,
        snapAlign: 'center',
      },
      1024: {
          // 1024 and up
        itemsToShow: 4,
        snapAlign: 'start',
      }
    }

</script>

<template>
    <div class="slider">
        <div class="slider-container">

            <Carousel  
                class="carousel-container" 
                :wrap-around="true" 
                :breakpoints="breakpoints"
                :autoplay="1500"
                >
                <Slide v-for="slide in products" :key="slide">

                    <div class="normal">

                        <div class="card">
                            <div class="img">
                                <img :src="`/img/${slide.img}`" alt="adecoagro">

                            </div>
                            <div class="card-body">
                                <p class="card-title">Saco de {{ slide.weight }}</p>
                                <h3 class="card-title">{{ slide.type }} {{ slide.name }}</h3>
                            </div>
                        </div>


                    </div>

                </Slide>
                <template #addons>
                    <Pagination />
                </template>

            </Carousel>


        </div>
    </div>
</template>

<style scoped>
.slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
}

.carousel-container {
    width: 95%;
}

.card {
    width: 200px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center
}

.card .img {
    height: 350px;
    width: 100%;
    display: flex;
}

.card img {
    width: 100%;
    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.10);
}

.card-title{
    font-size: 17px;
}

.big-img {
    width: 145px !important;
}

.arrow {
    background: #273294;
    width: 20px;
}

.button {
    font-size: 90pt;
}

.normal {
    display: flex;
}

.red {
    background: red !important;
}

</style>

