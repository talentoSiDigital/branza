<script setup>

</script>

<template>
    <div class="load-container">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin: auto; background: none; display: block; shape-rendering: auto;" width="100px" height="100px"
            viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="50" cy="50" r="37" stroke-width="8" stroke="#fff"
                stroke-dasharray="58.119464091411174 58.119464091411174" fill="none" stroke-linecap="round">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2.272727272727273s"
                    keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>
            </circle>
        </svg>
        <h2>Procesando solicitud...</h2>
    </div>
</template>

<style scoped>
.load-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}


</style>




