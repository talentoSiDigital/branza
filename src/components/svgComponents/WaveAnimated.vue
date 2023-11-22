<script setup>

const {fillColor,reverse} = defineProps(['fillColor','reverse'])

</script>


<template>
    <div class="wave">
        <svg :class="reverse" class="wave-svg" id="visual" viewBox="0 0 1200 200" width="1200" height="200"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <path
                
                :fill="fillColor" stroke-linecap="round" stroke-linejoin="miter">
                <animate id="animation-wave" repeatCount="indefinite" fill="freeze" attributeName="d" dur="2s" values="
                    M0 69L20 71.3C40 73.7 80 78.3 120 76.8C160 75.3 200 67.7 240 65.7C280 63.7 320 67.3 360 69.7C400 72 440 73 480 70.3C520 67.7 560 61.3 600 59.3C640 57.3 680 59.7 720 58.5C760 57.3 800 52.7 840 56.2C880 59.7 920 71.3 940 77.2L960 83L960 151L940 151C920 151 880 151 840 151C800 151 760 151 720 151C680 151 640 151 600 151C560 151 520 151 480 151C440 151 400 151 360 151C320 151 280 151 240 151C200 151 160 151 120 151C80 151 40 151 20 151L0 151Z;

                    M0 47L20 46.8C40 46.7 80 46.3 120 47.8C160 49.3 200 52.7 240 52.7C280 52.7 320 49.3 360 49.7C400 50 440 54 480 56C520 58 560 58 600 60.7C640 63.3 680 68.7 720 66.7C760 64.7 800 55.3 840 53C880 50.7 920 55.3 940 57.7L960 60L960 151L940 151C920 151 880 151 840 151C800 151 760 151 720 151C680 151 640 151 600 151C560 151 520 151 480 151C440 151 400 151 360 151C320 151 280 151 240 151C200 151 160 151 120 151C80 151 40 151 20 151L0 151Z;
                    
                    M0 69L20 71.3C40 73.7 80 78.3 120 76.8C160 75.3 200 67.7 240 65.7C280 63.7 320 67.3 360 69.7C400 72 440 73 480 70.3C520 67.7 560 61.3 600 59.3C640 57.3 680 59.7 720 58.5C760 57.3 800 52.7 840 56.2C880 59.7 920 71.3 940 77.2L960 83L960 151L940 151C920 151 880 151 840 151C800 151 760 151 720 151C680 151 640 151 600 151C560 151 520 151 480 151C440 151 400 151 360 151C320 151 280 151 240 151C200 151 160 151 120 151C80 151 40 151 20 151L0 151Z
                    " />
            </path>
        </svg>
    </div>
</template>

<style scoped>
.wave{
    width: 100%;
    overflow: hidden;
    height: 116px;
    margin: 0px;
    margin-top: -73px;
    position: relative;
    z-index: 8
}
.wave .wave-svg{
    transform: scaleX(3);
}

.reverse{
    transform: rotate(180deg) ;
}

</style>