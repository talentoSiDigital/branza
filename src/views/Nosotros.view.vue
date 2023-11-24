<script setup>
import WaveAnimated from '../components/svgComponents/WaveAnimated.vue'
import IconCard from '../partials/IconCard.vue'
import BG from '../components/svgComponents/BG-1.vue'
import ImageBanner2 from '../partials/ImageBanner2.vue'
import Mision from '../components/Mision.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, onUnmounted, ref, watch } from 'vue'

</script>

<template>
    <div class="frames-container">
       
            <div class="frame video-frame">

                <video width="320" height="220" autoplay loop muted class="video-banner">
                    <source src="/img/video-banner-2.mp4" type="video/mp4">

                </video>
                <div class="video-text-side">
                    <header>
                        <h3>Conoce a </h3>
                        <img src="/img/logo.png" alt="branza-logo-big" class="logo-banner">
                    </header>
                  
                    <font-awesome-icon :icon="['fas', 'angles-down']" class="icon-down bounce2" />

                </div>
            </div>



        <div class="frame ">

            <div class="text-side dark-blue-text">

                <header>
                    <h3>
                        ¿Quiénes Somos?
                    </h3>
                    <h5>
                        Somos una empresa fundada en 2012, nos dedicamos a la distribución e importación de materia primas
                        en el mercado venezolano, brindando a todos nuestros clientes el servicio y asesoría técnica
                        requerida.
                    </h5>
                </header>

            </div>

            <div class="img-side small ">

                <Carousel class="carousel-container " :wrap-around="true" :autoplay="1500" :items-to-show="1">
                    <Slide v-for="slide in 5" :key="slide">
                        <img :src="`/img/personas-${slide}.png`" :alt="slide" class="slider-img-frame">
                    </Slide>
                </Carousel>

            </div>

        </div>

        <WaveAnimated fillColor="#33baed" reverse="reverse" />

        <div class="frame-center white-text light-blue">

            <div class="frame-container">

                <div class="text-side big ">
                    <header>
                        <h4>
                            Nuestros productos
                        </h4>
                        <h5>
                            están elaborados con ingredientes de la más alta calidad y se someten a estrictos controles de
                            calidad para garantizar su seguridad y frescura.

                        </h5>
                    </header>
                </div>

                <Carousel class="carousel-container " :wrap-around="true" :autoplay="1800" :items-to-show="1">
                    <Slide v-for="slide in 4" :key="slide" class="slider">

                        <img :src="`/img/${slide}.jpg`" :alt="slide" class="slider-img">

                    </Slide>


                </Carousel>

            </div>

        </div>

        <WaveAnimated fillColor="white" reverse="#33baed" />


        <Mision  />
       
    </div>
</template>

<style scoped>
.logo-banner{
    width: 400px;
}
.bounce2 {
    animation: bounce2 2s ease infinite;
}

@keyframes bounce2 {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-20px);
    }

    60% {
        transform: translateY(-10px);
    }
}

.navbar-adjust {
    height: 100px;
}

.video-frame {

    width: 100vw;
    height: 100vh;
    overflow: hidden;
  
}

.video-banner {
 min-height: 130vh;
 min-width: 100vw;
 max-width: 100vw;

}
.icon-down{
    font-size: 3rem;
}

.video-text-side {
    color: white;
    border-radius: 15px;
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;  

    background: rgba(49, 67, 155, 0.40);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end   ;
    gap: 23%;
}
.video-text-side header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.frame-container {
    display: flex;
    justify-content: center;
    height: 70vh;
    position: relative;
    z-index: 5;
    padding: 20px 40px 0px 0px;
}

.slider-img {
    width: 100%;
    border-radius: 15px;

}

.slider-img-frame {
    width: 70%;
    border-radius: 15px;
}

.slider {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;

}

.carousel-container {
    width: 70%;
}

.slider {
    height: 90%;
}

.border {
    border: 1px solid black;
}

.bg {
    position: absolute;
    z-index: 1;
}

.box-header {
    padding: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.left {
    align-items: end;
}

.left header h4,
.left header p {
    text-align: right;

}


.box-header h4,
.box-header p {
    text-align: left;
}

.img-overlay {
    position: relative;
    z-index: 1;
    text-align: center;
    background-size: cover;
    height: 40vh;
    width: 45vw !important;

    border-radius: 15px;
}




.img-overlay::after {
    border-radius: 15px;
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: linear-gradient(0deg, rgba(51, 186, 237, 0.2) 0%, rgba(49, 67, 155, 1) 100%); */
    background: rgba(49, 67, 155, 0.70);
}

.img-overlay .content {
    position: relative;
    z-index: 6;
}

.frame {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}


.box {
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 40px 0px;
}

.box .box-container {
    width: 30%;
    display: flex;

    gap: 15px;

}

.box .box-container ul {
    width: 70%
}

.box .box-container ul li {
    padding: 15px;
}

.card-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.box .text-side header {
    width: 100%;
    text-align: center;
    padding: 40px;
}



.text-side {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.text-side header {
    width: 80%;
}

.img-side {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


.card-flex {
    display: flex;
}


/* GENERAL STYLING */
.light-blue {
    background: #33baed;
}

.dark-blue {
    background: #31439bff;
}

.light-blue-text {
    color: #33baed;
}

.dark-blue-text {
    color: #31439bff;
}

.white-text {
    color: white;
}

.dark-glass {
    background: rgba(49, 67, 155, 0.45);
}

.reverse {
    flex-direction: row-reverse
}

.small {
    width: 60%;
}

.big {
    width: 80%;
}

img {
    width: 50%;
}

h3 {
    font-size: 50pt;
    font-weight: 900;
}

h4 {
    font-size: 30pt;
    font-weight: 900;

}

h5 {
    font-weight: 400;
    font-size: 20pt;
}


@media (max-width:800px) {
    .navbar-adjust {
        display: none;
    }

    .frame {
        flex-direction: column;
    }
    .video-frame{
        align-items: end !important;
    }

    h3 {
        font-size: 30pt;
        font-weight: 900;
    }

    h4 {
        font-size: 20pt;
        font-weight: 900;
    }

    h5 {
        font-weight: 400;
        font-size: 15pt;
    }

    .img-side {
        height: fit-content;
    }

    .box {
        flex-direction: column;
    }

}
</style>