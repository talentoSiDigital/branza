<script setup>
import ImageBanner from '../partials/ImageBanner.vue'

</script>  



<template>
    <div class="mision">
        <ImageBanner img="productos" title="Misión" />

        <div class="text-box ">
            <div class="bubble ">
                <header>
                    <font-awesome-icon :icon="['fas', 'industry']" class="icon blue" />
                    <h3>Fabricar y comercializar</h3>
                    <p>productos alimenticios de la más alta calidad <br> que cubran las expectativas de los consumidores
                    </p>
                </header>
                <header>
                    <font-awesome-icon :icon="['fas', 'hands-holding-circle']" class="icon blue" />

                    <h3>Optimizar recursos</h3>
                    <p>y cumplir con las expectativas del cliente, de esta manera <br>contribuir con el desarrollo economico
                        y
                        social del pais</p>
                </header>
            </div>


        </div>

        <ImageBanner img="mision" title="Visión" />

     

            <div class="text-box ">

                <div class="bubble">
                    <header>
                        <font-awesome-icon :icon="['fas', 'award']" class="icon2 blue" />
                        <h3>Consolidar los logros</h3>
                        <p>para ser reconocida en el campo empresarial<br> como una importante empresa pionera en la
                            <br> venta y manufactura de alimentos.
                        </p>
                    </header>
                    <header>
                        <font-awesome-icon :icon="['fas', 'circle-check']" class="icon blue" />
                        <h3>Compromiso con la seguridad alimentaria</h3>
                        <p>garantizando asi una optima calidad de los productos<br> comercializados y elaborados para
                            satisfaccion <br> de nuestros clientes</p>
                    </header>
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
    width: 90%;
    height: 250px;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(0, 173, 239, 1) 0%, rgba(0, 251, 244, 1) 50%, rgba(0, 173, 239, 1) 100%);
}

img {
    width: 100%;
    transform: translateY(-25em);
}

.text-box {
    height: 250px;
}

.text-box .mission {

    transform: translateY(-80px);
}

.mission-header {
    color: white;
    text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.6);

}

.text-box h1 {
    text-align: center;

}


.bubble {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
}

.bubble-2 {
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
    border-radius: 50%;
    padding: 20px;

}

.icon2 {
    height: 40px;
    border-radius: 50%;
    padding: 20px 25px;

}

.blue {
    background: #00adef;
    color: white;
}

.white {
    color: #00adef;
    background: white;
}

.secondary {
    color: white;
    height: fit-content;
}

header {
    text-align: center;
}



h3 {
    font-weight: 900;
}

@media (max-width: 1100px) {
    .bubble {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .text-box {
        height: fit-content;
    }

    .mission header {
        transform: translateY(50px);

    }


}
</style>

