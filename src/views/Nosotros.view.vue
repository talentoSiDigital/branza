<script setup>
import TwoFrameSection from '../partials/TwoFrameSection.vue'
import BG from '../components/svgComponents/BG-1.vue'
import WaveAnimated from '../components/svgComponents/WaveAnimated.vue'
import IconCard from '../partials/IconCard.vue'
import ImageBanner from '../partials/ImageBanner.vue'


</script>

<template>
    <BG class="bg" svg-type="fullwave" />

    <div class="frames-container">
        <div class="frame">
            <div class="text-side dark-blue-text">
                <header>
                    <h4>
                        ¿Quiénes Somos?
                    </h4>
                    <p>
                        Somos una empresa fundada en 2012 nos dedicamos a la distribución e importación de materias primas en el mercado venezolano,
                        brindando a todos nuestros clientes el servicio y asesoría técnica requerida.
                    </p>
                </header>
            </div>
            <div class="img-side">
                <img src="../assets/img/layout.jpg" alt="">


            </div>


        </div>
        <div class="img-overlay">

            <div class="content">
                <div class="frame reverse">
                    <div class="text-side white-text">
                        <header>
                            <h4>
                                Todos nuestros productos están elaborados con ingredientes de la más alta calidad
                            </h4>
                            <p>
                                y se someten a estrictos controles de calidad para garantizar su seguridad y frescura.
                            </p>
                        </header>
                    </div>
                    <div class="img-side small ">
                        <img src="../assets/img/layout.jpg" alt="">


                    </div>


                </div>
            </div>
        </div>

        <WaveAnimated fillColor="#31439b" />
        <div class="box dark-blue">

            <header>
                <div class="text-side ">
                <header class="white-text">
                    <h4>
                        Misión
                    </h4>

                </header>
            </div>
            <div class="text-side">
                <header class="white-text">
                    <h4>
                        Visión
                    </h4>

                </header>
            </div>
            </header>

            <div class="card-container">
                <IconCard icon="industry">
                    <template #header>
                        Fabricar y comercializar
                    </template>
                    <template #paragraph>
                        productos alimenticios de la más alta calidad que cubran las expectativas de todos nuestros
                        consumidores
                    </template>
                </IconCard>
                <IconCard icon="hands-holding-circle">
                    <template #header>
                        Optimizar recursos
                    </template>
                    <template #paragraph>
                        y cumplir con las expectativas del cliente, de esta manera contribuir con el desarrollo
                        economico y social del pais
                    </template>
                </IconCard>





                <IconCard icon="award" class="dark-glass">
                    <template #header>
                        Consolidar los logros
                    </template>
                    <template #paragraph>
                        para ser reconocida en el campo empresarial como una importante empresa pionera en la venta y
                        manufactura de alimentos.
                    </template>
                </IconCard>


                <IconCard icon="circle-check" class="dark-glass">
                    <template #header>
                        Compromiso con la seguridad 
                    </template>
                    <template #paragraph>
                        garantizando asi una optima calidad de los productos comercializados y elaborados para satisfaccion
                        de nuestros clientes
                    </template>
                </IconCard>
            </div>


        </div>

    </div>
</template>

<style scoped>
.bg {
    position: absolute;
    top: 150px;
    z-index: 1;
}

.frames-container {
    position: relative;
    z-index: 2
}

.img-overlay {
    position: relative;
    text-align: center;
    background-image: url('../assets/img/layout.jpg');
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;



}

.img-overlay::after {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 173, 239, 0.7);
}

.img-overlay .content {
    position: relative;
    z-index: 6;
}


.frame {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    width: 100%;
    height: fit-content;



}
.box header{
    display: flex;
    justify-content: space-evenly;
}
.card-container{
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

.card-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
}

img {
    width: 50%;
}

h4 {
    font-size: 50pt;
    font-weight: 900;

}


p {

    font-size: 20pt;
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
    background: rgba(49, 67, 155, 0.45) !;

}

.small {
    width: 60%;
}
</style>

