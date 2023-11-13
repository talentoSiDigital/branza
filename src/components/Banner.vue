<script setup>

</script>

<template>
    <div class="banner">
        <div class="text-area">
            <header>
                <p>La mejor selección</p>
                <p><strong>de productos lácteos</strong></p>
            </header>
            <p class="text-box"> Distribuimos y vendemos productos alimenticios de alta calidad a precios accesibles, a todos los niveles sociales en Venezuela</p>
        </div>
        <img src="../assets/img/milk.png" alt="">
    </div>
    <!-- Falta svg del fondo. hacer en illustrator y colocar -->
</template>

<style scoped>
.banner {
    color: #273294;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text-area{
    width: 50%;
}

.text-area header {
    font-weight: normal ;
    font-size: 50pt;
}

.text-area header strong {
    font-weight: 900;

}
.text-area .text-box{
    width: 60%;
}


img{
    width: 40%;
}
</style>

