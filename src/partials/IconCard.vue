<script setup>

</script>

<template>
    <div class="card">
        <div class="icon-container">
            <font-awesome-icon :icon="['fas', 'industry']" class="icon blue light-blue-text" />
        </div>
        <header>
            <h5>Fabricar y comercializar</h5>
            <p class="card-text">productos alimenticios de la más alta calidad que cubran las expectativas de los consumidores
            </p>
        </header>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    border-radius: 15px 0px;
    border: 3px solid #eee;
    width: 400px;
    padding: 10px 20px;
    background: #33baedff;
}

.icon-container {
    /* height: 165px; */
}

.icon-container .icon {
    height: 40px;
    padding: 20px;
    border-radius: 10px ;
    background: white;
}

.card header {
    color: white;

    width: 100%;
    min-height: 170px;
    max-height: 170px;
}

.card header h5 {
    font-size: 20pt;
}

.card header .card-text {
    font-size: 14pt;
    margin-top: 10px;
}


</style>

