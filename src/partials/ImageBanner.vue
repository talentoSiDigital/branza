<script setup>

const img = defineProps(['img'])



</script>

<template>
    <div class="main-container">
        <div class="img-container">
            <img v-if="img.img" :src="`/img/${img.img}.png`" :alt="img.img ">
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
}

img {
    width: 100%;
    border-radius: 10px;

}
</style>


