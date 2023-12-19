<script setup>
import WaveAnimated from '../components/svgComponents/WaveAnimated.vue'
import Mision from '../components/Mision.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

</script>

<template>
    <div class="frames-container">

        <div class="frame video-frame">

            <video width="320" height="220" autoplay loop muted class="video-banner">
                <source src="/img/video-banner-2.mp4" type="video/mp4">

            </video>
            <div class="video-text-side">
                <header>
                    <img src="/img/logo.png" alt="branza-logo-big" class="logo-banner">
                </header>

                <font-awesome-icon :icon="['fas', 'angles-down']" class="icon-down bounce2" />

            </div>
        </div>



        <div class="frame padding-frame ">

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
                        <h3>
                            Nuestros productos
                        </h3>
                        <h5>
                            Están elaborados con ingredientes de la más alta calidad y se someten a estrictos controles de
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


        <Mision />

    </div>
</template>

<style scoped>
.logo-banner {
    width: 400px;
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

.icon-down {
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
    justify-content: flex-end;
    gap: 23%;
}

.video-text-side header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.frame-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    position: relative;
    z-index: 5;
    padding: 0px 40px 60px 0px;
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



.frame {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
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
    font-size: 28pt;
    font-weight: 900;
    margin-bottom: 15px;
}

h4 {
    font-size: 24pt;
    font-weight: 900;

}

h5 {
    font-weight: 400;
    font-size: 16pt;
}

@media (max-width:1100px) {
    .video-banner {
        min-width: 1500px;
        transform: translateX(100px);
    }
}

@media (max-width:800px) {
    .navbar-adjust {
        display: none;
    }

    .logo-banner {
        width: 300px;
    }

    .frame {
        flex-direction: column;
    }

    .video-frame {
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

    .video-banner {
        min-width: 1500px;
        transform: translateX(100px);
    }

    .padding-frame {
        height: 100vh;
        text-align: justify;
    }

    .frame-container {
        height: 80vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 0px;
        text-align: center;
    }
}</style>