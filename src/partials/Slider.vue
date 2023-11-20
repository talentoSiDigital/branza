<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const screenWidth = ref(screen.width)

const sliderShow = ref(1.6)

const handleResize = () => {
    screenWidth.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
    console.log(screenWidth.value)

    if (screenWidth.value > 800) {
        sliderShow.value = 1
    }


})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})



</script>

<template>
    <div class="slider">
        <div class="slider-container">

            <Carousel :items-to-show="1" class="carousel-container">
                <Slide v-for="slide in 1" :key="slide">

                    
                    <div class="card">
                        <img src="/img/adecoagro.png" alt="adecoagro">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera AdecoAgro</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/img/conaprole.png" alt="adecoagro" class="big-img">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Conaprole</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/img/formidable.png" alt="adecoagro" class="big-img">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Formidable</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/img/magnalat.png" alt="adecoagro" class="big-img">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Magnalat</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/img/purisima.png" alt="adecoagro" class="big-img">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Purisima</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/img/colun.png" alt="adecoagro" class="big-img">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera Lactolun</h3>
                        </div>
                    </div>
                    <div class="card">
                        <img src="/img/us-diary.png" alt="adecoagro" class="big-img">
                        <div class="card-body">
                            <p class="card-title">Saco de 25Kgr</p>
                            <h3 class="card-title">Leche entera US-diary</h3>
                        </div>
                    </div>


                </Slide>

                <!-- <template #addons>
                    <Navigation />
                </template> -->
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
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center
}

.card img {
    max-width: 200px;

    box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.10);
}

.big-img {
    width: 145px !important;

}

.arrow {
    background: #273294;
    width: 20px;

}
</style>

