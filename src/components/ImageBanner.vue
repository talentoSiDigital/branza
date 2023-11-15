<script setup>

const img = defineProps(['img'])



</script>

<template>
    <div class="main-container">
        <div class="img-container">
            <img v-if="img.img" :src="`../src/assets/img/${img.img}.png`" :alt="img.img ">
        </div>
    </div>
</template>

<style scoped>
.main-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;

}

.img-container {
    width: 90%;
    background: linear-gradient(90deg, rgba(0, 173, 239, 1) 0%, rgba(0, 251, 244, 1) 50%, rgba(0, 173, 239, 1) 100%);
    border-radius: 10px;
    height: 200px;
}

img {
    width: 100%;
}
</style>


