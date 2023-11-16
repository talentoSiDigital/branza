<script setup>
     const svgType = defineProps(["svgType"])
</script>



<template>
    <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1075.35 1004.22">
        
        <g v-if="svgType.svgType == 'fullwave'" id="Capa_1-2" data-name="Capa 1">
            <path fill="#33baed"
            d="m0,498.65s106.08-106.41,291.2-128.42c185.12-22.02,208-27.52,280.8-49.53,72.8-22.02,115.68-78.03,137.8-105.95,17.43-22.01,180.44-284.82,365.56-196.76v528.71s-358.8-8.4-537.68,79.66C358.8,714.41,0,738.69,0,738.69v-240.04Z" />
        </g>
        <g v-else id="Capa_1-2" data-name="Capa 1">
            <path fill="#33baed"
            d="m0,0h1080v355.4s-221.63,55.15-503.5-77.62C312.1,153.25,10.71,360.93,10.71,360.93l-10.71,18.99V0Z"/>
        </g>
    </svg>
</template>


