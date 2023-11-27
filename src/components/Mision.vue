<script setup>
import ImageBanner from '../partials/ImageBanner.vue'

</script>  



<template>
    <div class="mision">
        <ImageBanner img="productos" title="Misión" />

        <div class="text-box ">

            <div class="bubble dark-blue">

                <header>
                    <font-awesome-icon :icon="['fas', 'industry']" class="icon blue" />
                    <h2>Fabricar y comercializar</h2>
                    <p>productos alimenticios de la <strong>más alta calidad</strong> <br> que cubran las expectativas de los consumidores
                    </p>
                </header>

                <header>
                    <font-awesome-icon :icon="['fas', 'hands-holding-circle']" class="icon blue" />

                    <h2>Optimizar recursos</h2>
                    <p>y cumplir con las expectativas del cliente, de esta manera <br>contribuir con el <strong>desarrollo económico y social</strong> del país</p>
                </header>

            </div>

        </div>

        <ImageBanner img="mision" title="Visión" />

        <div class="text-box ">

            <div class="bubble dark-blue">

                <header>
                    <font-awesome-icon :icon="['fas', 'award']" class="icon2 blue" />
                       <h2>Consolidar los logros</h2>
                        <p>para ser reconocida en el campo empresarial<br> como una <strong>importante empresa pionera</strong> en la <br> venta y manufactura de alimentos.
                        </p>
                </header>

                <header>
                    <font-awesome-icon :icon="['fas', 'circle-check']" class="icon blue" />
                    <h2>Compromiso con la seguridad alimentaria</h2>
                    <p>Garantizando así una <strong>óptima calidad</strong> de los productos<br> comercializados y elaborados para satisfacción <br> de nuestros clientes</p>
                </header>

            </div>

        </div>        
    </div>
</template>

<style scoped>

img {
    width: 100%;
    transform: translateY(-25em);
}

.text-box {
    height: 250px;
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
.dark-blue{
    color: #273294;
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

h2 {
    font-weight: 900;
}

@media (max-width: 1100px) {
    .bubble {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
        padding: 20px 0px;
    }

    .text-box {
        height: fit-content;
    }
    .bubble header{
        width: 80%;
    }
  
}
</style>

