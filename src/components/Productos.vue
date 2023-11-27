<script setup>
import Slider from '../partials/Slider.vue'
import ImageBanner from '../partials/ImageBanner.vue'




</script>

<template>
    <div class="productos">
        <ImageBanner img="productos" title="Productos" />
        <Slider  />
    </div>
</template>

<style scoped>

.productos {
    height:fit-content;
    margin-bottom: 10px;
    color: #273294;
    position: relative;
    z-index: 2;
}


.text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
    
}

.text-area p {

    width: 40%;
    text-align: center;
}


@media (max-width: 1100px) {
    .text-area p {

        width: 80%;
        text-align: center;
    }
    

}
</style>

