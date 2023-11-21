<script setup>
import BG from './svgComponents/BG-1.vue'
</script>

<template>
    <div class="main-box">
        <BG class="bg" svg-type="fullwave"/>
        <div class="banner-container">

            <div class="banner">
                <div class="text-area">
                    <header>
                        <p>La mejor selección</p>
                        <p><strong>de productos lácteos</strong></p>
                    </header>
                    <p class="text-box"> Distribuimos y vendemos productos alimenticios de alta calidad a precios
                        accesibles, a
                        todos los niveles sociales en Venezuela</p>
                </div>
                <img src="../assets/img/milk.png" alt="" class="bounce2">
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg{
    position: absolute;
    top: 150px;
    z-index: 1;
}
.banner-container {
    position: relative;
    z-index: 2;
    color: #273294;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-area {
    width: 50%;
}

.text-area header {
    font-weight: normal;
    font-size: 50pt;
}

.text-area header strong {
    font-weight: 900;

}

.text-area .text-box {
    width: 60%;
}


img {
    width: 40%;
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
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}

@media (max-width: 1100px) {


    .banner {
        flex-direction: column-reverse;
        margin-top: 50px;
    }

    .text-area {
        width: 80%;
        text-align: center;
    }

    .text-area .text-box {
        width: 100%;
    }

    .text-area header {
        font-weight: normal;
        font-size: 40pt;
    }


}
</style>

