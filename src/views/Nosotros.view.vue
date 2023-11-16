<script setup>
import TwoFrameSection from '../partials/TwoFrameSection.vue'
import BG from '../components/svgComponents/BG-1.vue'
import IconCard from '../partials/IconCard.vue'

</script>

<template>
    <BG class="bg" svg-type="fullwave" />

    <div class="frames-container">
        <div class="frame">
            <div class="text-side">
                <header>
                    <h4>
                        Branza es una empresa fundada en 2012
                    </h4>
                    <p>
                        nos dedicamos a la distribución e importación de materias primas en el mercado venezolano,
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
                    <div class="text-side">
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
        <div class="box dark-blue">
            <div class="text-side small">
                <header>
                    <h4>
                        Mision
                    </h4>

                </header>
            </div>

            <div class="card-side">
                <IconCard />
                <IconCard />
            </div>

        </div>
        <div class="frame reverse">
            <div class="text-side small">
                <header>
                    <h4>
                        Vision
                    </h4>

                </header>
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
.box{
    width: 100%;
    height: 100vh;
}
.box 

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
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
}

img {
    width: 50%;
}

h4 {
    font-size: 40pt;

}


p {

    font-size: 20pt;
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

.small {
    width: 60%;
}
</style>

