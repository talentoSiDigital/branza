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
                <font-awesome-icon :icon="['fas', 'industry']" class="icon blue" />
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
                        <font-awesome-icon :icon="['fas', 'industry']" class="icon white" />
                        <h3>Fabricar y comercializar</h3>
                        <p>productos alimenticios de la más alta calidad <br> que cubran las expectativas de los
                            consumidores</p>
                    </header>
                    <header>
                        <font-awesome-icon :icon="['fas', 'industry']" class="icon white" />
                        <h3>Optimizar recursos</h3>
                        <p>y cumplir con las expectativas del cliente, de esta manera <br>contribuir con el desarrollo
                            economico y social del pais</p>
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

.icon {
    height: 40px;
    border-radius: 100%;
    padding: 20px;
}

.blue{
    background: #00adef;
    color: white;
}
.white{
    color: #00adef;
    background: white;
}
.secondary {
    color: white;
    height: fit-content;
}

</style>

