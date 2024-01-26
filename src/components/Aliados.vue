<script setup>
import ImageBanner from '../partials/ImageBanner.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const aliados = {
    "Colun": "colun-logo.png",
    "Conaprole": "conaprole-logo.png",
    "Formidable": "formidable-logo.png",
    "Magnalat": "magnalat-logo.png",
    "Purisima": "purisima-logo.png",
    "Adecoagro": "adecoagro-logo.png"

}

const breakpoints = {
    500: {
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
    <div class="aliados">
        <ImageBanner img="aliados" title="Aliados Comerciales" />

        <div class="slider">
            <div class="slider-container">

                <Carousel class="carousel-container" :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000">
                    <Slide v-for="(key, index) in aliados" :key="index">

                        <div class="card">

                            <img :src="`/img/${key}`" :alt="key">


                        </div>

                    </Slide>
                    <template #addons>
                        <Pagination />
                    </template>

                </Carousel>


            </div>
        </div>


    </div>
</template>

<style scoped>
.aliados {
    padding: 7vh 0px;
}

.fixed {
    position: fixed;
    z-index: 100;
}

.slider-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    padding: 5% 0px;
}

.carousel-container {
    width: 95%;
}

.card {
    width: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0px;

}


.card img {
    width: 100%;
    filter: drop-shadow(10px 15px 10px rgba(0, 0, 0, 0.4));
}


.card-title {
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
</style>

