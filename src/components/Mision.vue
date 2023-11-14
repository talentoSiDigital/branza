<template>
    <!-- Agregar iconos -->
    <div class="main-container">
        <div class="img-container">
            <img src="../assets/img/mision.jpg" alt="">
        </div>
    </div>

    <div class="text-box ">
        <h1 class="mission">Mision</h1>
        <div class="bubble mission">
            <header>
                <font-awesome-icon :icon="['fas', 'industry']" class="icon blue" />
                <h3>Fabricar y comercializar</h3>
                <p>productos alimenticios de la más alta calidad <br> que cubran las expectativas de los consumidores</p>
            </header>
            <header>
                <font-awesome-icon :icon="['fas', 'hands-holding-circle']"  class="icon blue"/>

                <h3>Optimizar recursos</h3>
                <p>y cumplir con las expectativas del cliente, de esta manera <br>contribuir con el desarrollo economico y
                    social del pais</p>
            </header>
        </div>


    </div>


    <div class="main-container">
        <div class="img-container">
            <div class="text-box secondary">
                <h1>Vision</h1>
                <div class="bubble">
                    <header>
                        <font-awesome-icon :icon="['fas', 'award']" class="icon2 white"/>
                        <h3>Consolidar los logros</h3>
                        <p>para ser reconocida en el campo empresarial<br> como una importante empresa pionera en la <br> venta y manufactura de alimentos.</p>
                    </header>
                    <header>
                        <font-awesome-icon :icon="['fas', 'circle-check']" class="icon white"/>
                        <h3>Compromiso con la seguridad alimentaria</h3>
                        <p>garantizando asi una optima calidad de los productos<br> comercializados y elaborados para satisfaccion  <br> de nuestros clientes</p>
                    </header>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
.contact {
    height: 90vh;
    color: #273294;
}

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

img {
    width: 100%;
    transform: translateY(-25em);
}

.text-box {
    height: 200px;
}
.text-box .mission{
    transform: translateY(-50px);
}

.text-box h1 {
    text-align: center;

}


.bubble {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
}

.bubble header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.secondary {
    color: white;
    height: fit-content;
}
header {
    text-align: center;
}
.mission{
    color:#273294;
}
 h3{
    font-weight: 900;
}

</style>

