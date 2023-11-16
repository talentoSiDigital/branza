<script setup>
import splash from '../partials/splash.vue'
import ImageBanner from '../partials/ImageBanner.vue'

</script>

<template>
    <div class="nosotros">
        <ImageBanner img="sobrenosotros"/>


        <div class="text-area">

            <h1>Sobre Nosotros</h1>
            <p>Desde nuestros inicios en el mercado Venezolano en el año 2012 como importadores y distribudores de materias
                primas para la industria nacional, nos hemos siempre caracterizado por brindar el servicio y la asesoría
                técnica que ha requerido cada cliente</p>

            <img src="../assets/img/logo.png" alt="branza-logo" class="logo">


        </div>

        <div class="time-line">
            <div class="splash">
                <splash color="#fff9f3" class="small rotate-30" />
                <div class="text-splash">
                    <header class="blue">
                        <h2>2012</h2>
                        <p>Se establece Branza 1800 C.A.</p>
                    </header>
                </div>
            </div>
            <div class="splash">
                <splash color="#00adef" class="small rotate-90" />
                <div class="text-splash">
                    <header class="white correction-small">
                        <h2>2019</h2>
                        <p>Nace el proyecto de crear una planta llenadora de alimentos en polvo</p>
                    </header>
                </div>
            </div>
            <div class="splash">
                <splash color="#fff9f3" class="small rotate-140" />
                <div class="text-splash">
                    <header class="blue correction">
                        <h2>2022</h2>
                        <p>Inaguramos la planta llenadora de polvos con 1 maquina llenadora de sobres de 30gr.</p>
                    </header>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


.main-container {
    display: flex;
    align-items: center;
    justify-content: center;

}

.img-container {
    width: 95%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(0, 173, 239, 1) 0%, rgba(0, 251, 244, 1) 50%, rgba(0, 173, 239, 1) 100%);
}

.banner-img {
    width: 100%;
    transform: translateY(-25em);
}

.text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
}

.text-area p {

    width: 60%;
    text-align: center;
}

.logo {
    margin-top: 20px;
    width: 175px;
    height: 100px;
}

.time-line {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    margin: 40px 0px;
    height: 40vh;
    position: relative;
}

.small {
    width: 110%;
}

.text-splash {
    text-align: center;
    position: relative;
    z-index: 10
}

.text-splash header {
    position: absolute;
    top: -200px;
    left: 116px;
    width: 100px;
}

.text-splash header  h2{
    font-weight: 900;    
}
.text-splash header  p{
    font-size: 10pt;    
}

.rotate-30{
    transform: rotate(30deg);
    
}
.rotate-90{
    transform: rotate(90deg);
    
}
.rotate-140{
    transform: rotate(140deg);
    
}

.blue{
    color:#31439b;
}
.correction {
    transform: translateY(-30px);
}
.correction-small {
    transform: translateY(-15px);
}
.white{
    color: white;
}

@media (max-width: 800px) {
    .nosotros{
        min-height: fit-content;
    }
    .time-line{
        flex-direction: column;
        position:static;
        height: 130vh;
    }
   
}

</style>

