<script setup>
import WaveAnimated from '../components/svgComponents/WaveAnimated.vue'
import IconCard from '../partials/IconCard.vue'
import BG from '../components/svgComponents/BG-1.vue'
import ImageBanner2 from '../partials/ImageBanner2.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { onMounted, onUnmounted, ref, watch } from 'vue'



</script>

<template>
    <div class="frames-container">


        <div class="frame ">

            <div class="text-side dark-blue-text">

                <header>
                    <h3>
                        ¿Quiénes Somos?
                    </h3>
                    <h5>
                        Somos una empresa fundada en 2012 nos dedicamos a la distribución e importación de materias
                        primas en el mercado venezolano,
                    brindando a todos nuestros clientes el servicio y asesoría técnica requerida.
                </h5>
            </header>
        </div>

        <div class="img-side small ">
            <img src="/img/personas.jpg" alt="">


        </div>

    </div>

    <!-- <div class="img-overlay">
            <div class="content">
                <div class="frame ">

                    <div class="text-side white-text">

                        <header>
                            <h3>
                                ¿Quiénes Somos?
                            </h3>
                            <h5>
                                Somos una empresa fundada en 2012 nos dedicamos a la distribución e importación de materias
                                primas en el mercado venezolano,
                                    brindando a todos nuestros clientes el servicio y asesoría técnica requerida.
                            /h5>
                        </header>
                    </div>      
                  <div class="img-side small ">
                    
                        <img src="/img/personas.jpg" alt="">
                </div>

            </div>
        </div>
    </div> -->


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



                <Carousel class="carousel-container " :wrap-around="true" :autoplay="1500" :items-to-show="1">
                    <Slide v-for="slide in 4" :key="slide">

                        <img :src="`/img/${slide}.jpg`" alt="" class="slider-img">

                    </Slide>
                    <template #addons>
                        <Pagination />
                    </template>

                </Carousel>
            </div>



        </div>


        <div class="box ">

            <div class="box-container img-overlay mision">


                
                <div class="content box-header">
                    <h4>Misíon</h4>
                    <p> 
                        Fabricar y comercializar productos alimenticios de la más alta calidad que cubran las expectativas de los consumidores, optimizando recursos y cumpliendo con las expectativas del cliente, de esta manera contribuir al desarrollo económico y social del país.

                    </p>
                </div>




            </div>
            <div class="box-container img-overlay vision">


                
                <div class="content box-header">
                    <h4>Visíon</h4>
                    <p> 
                        Consolidar los logros para ser reconocida en el campo empresarial como una importante empresa pionera en la venta y manufactura de alimentos, comprometida con la seguridad alimentaria, garantizando así una óptima calidad de los productos comercializados y elaborados para satisfacción de nuestros clientes
                    </p>
                </div>




            </div>


        </div>

    </div>
</template>

<style scoped>
.frame-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    position: relative;
    z-index: 5
}

.slider-img {
    width: 100%;
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

.border {
    border: 1px solid black;
}

.bg {
    position: absolute;
    z-index: 1;
}

.box-header{
    padding: 45px;
}
.box-header h4, .box-header p{
    text-align: left;
}
.img-overlay {
    position: relative;
    z-index: 1;
    text-align: center;
    background-size: cover;
    height: 40vh;
    width: 90vw !important;
    
    border-radius: 15px;
}

.mision {
    border-radius: 15px;
    background-image: url('/img/productos.png');
    color: white;
    
}
.vision {
    border-radius: 15px;
    background-image: url('/img/mision.png');
    color: white;
    
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
    background: linear-gradient(0deg, rgba(51,186,237,0.2) 0%, rgba(49,67,155,1) 100%);
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
    flex-direction: column;
    gap: 15px;
    padding: 40px 0px;
}

.box .box-container {
    width: 40%;
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
    padding: 20px;
}

.reverse {
    flex-direction: row-reverse
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
    .frame {
        flex-direction: column;
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