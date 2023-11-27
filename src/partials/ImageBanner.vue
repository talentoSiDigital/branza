<script setup>
const {img,title} = defineProps(['img','title'])

</script>

<template>
    <div class="main-container">
        <div class="img-container">
            <img v-if="img" :src="`/img/${img}.png`" :alt="img.img ">
            
            
        </div>
        <div class="text-container">
            <h1 class="BANNER-HEADER">{{ title }}</h1>
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
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

img {
    width: 100%;
    border-radius: 10px;

}
.text-container{
    position: absolute;
}
.BANNER-HEADER{
    font-size: 35pt !important;
    
    text-shadow: 5px 5px 6px rgba(0,0,0,0.6);
    color: white;
}

@media (max-width: 1100px) {
    .BANNER-HEADER{
        font-size: 25pt!important;
    }
}

</style>


