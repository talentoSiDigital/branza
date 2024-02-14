
<template>
    <section class="banner-vitalle">
        <div class="correction">
            <div class="img-box ">
                <img src="/img/vitalle-logo.png" alt="vitalle logo" class="logo">
                <img src="/img/vitalle.png" alt="leche vitalle" class="vitalle">
            </div>
            <div class="bg">
                <div class="box box-blue">
                    <h2>LA MEJOR SELECCIÓN</h2>
                </div>
                <div class="box box-white">
                    <h2>DE PRODUCTOS LACTEOS</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.banner-vitalle {
    padding: 25px;
    overflow: hidden;
}

.correction {
    width: 100%;
    height: fit-content;
}

.section {
    position: relative;
}

.img-box {
    margin-top: 20px;
    position: absolute;
    width: 92%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.img-box .logo {
    width: 20%;

}

.img-box .vitalle {
    width: 50%;

    transform: rotate(2deg);
    animation: bounce2 2s ease infinite;

}

.bg {
    height: 80vh;
    display: flex;
}

.box {
    width: 50%;
    display: flex;
}

.box-blue {
    background: #30449b;
    color: white;
    justify-content: end;
    align-items: end;
    border-radius: 15px 0px 0px 15px;


}

.box-white {
    color: #293c98;
    align-items: end;
}

.box h2 {
    font-weight: 800;
    font-size: 26pt;
    margin: 0px 5px;
    text-align: center;

}

@keyframes bounce2 {


    0%,
    100% {
        scale: 1;
    }

    20%,
    80% {
        scale: 1.2;
        transform: rotate(5deg);
    }







}

@media (max-width:920px) {
    .box h2 {
        font-size: 30pt;
    }
}


@media (max-width:768px) {
    .img-box .vitalle {
        width: 70%;
    }

    .bg {
        height: 50vh;
    }

    .box h2 {
        font-size: 20pt;
    }

}

@media (max-width:500px) {
    .img-box .logo {
        width: 50%;

    }

    .img-box .vitalle {
        width: 60%;
        margin-top: 10%;
    }

    .box h2 {
        font-size: 15pt;
    }

}

@media (max-width:400px) {
    .img-box .vitalle {
        width: 60%;
        margin-top: 20%;
    }

    .box h2 {
        font-size: 10pt;
    }
}
</style>

