<script setup>
import Slider from './Slider.vue'
</script>

<template>
    <div class="contact">
        <div class="main-container">
            <div class="img-container">
                <img src="../assets/img/productos.jpg" alt="">
            </div>
        </div>

        <div class="text-area">
      
                <h2>Productos</h2>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et aperiam expedita nihil
                    praesentium culpa aliquam iusto dolorem. Voluptatem, in!</p>

        </div>
        <Slider/>
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
    height: 180px;

    overflow: hidden;
    border-radius: 10px;
}

img {
    width: 100%;
    transform: translateY(-15em);
}

.text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
}
.text-area p{
  
    width: 40% ;
    text-align: center;
}
</style>

