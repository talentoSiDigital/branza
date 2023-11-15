<script setup>
import Slider from './Slider.vue'
import ImageBanner from './ImageBanner.vue'




</script>

<template>
    <div class="contact">
        
        <ImageBanner img="productos"/>

        <div class="text-area">

            <h1>Productos</h1>


        </div>
        <Slider />
    </div>
</template>

<style scoped>
.contact {
    height: 90vh;
    margin-bottom: 10px;
    color: #273294;
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


@media (max-width: 800px) {
    .text-area p {

        width: 80%;
        text-align: center;
    }
    .contact {
    height: 120vh;
}

}
</style>

