<script setup>
import {useRoute} from 'vue-router'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const route = useRoute()

const { pdf, pages } = usePDF('/src/data/'+route.params.name+'.pdf')


</script>


<template>
    <div class="main-pdf">
        <div class="navbar-adjust"></div>
        <div v-for="page in pages" :key="page" class="pdf">
            <VuePDF :pdf="pdf" :page="page" class="page"/>
        </div>
    </div>
</template>

<style scoped>

.navbar-adjust{
    height: 100px;
    background: white
}

.pdf{
    display: flex;
    justify-content: center;
    align-items: center;
}
.page{
    width: 100%;
    display: flex !important;
    justify-content: center;
}

</style>
<style>
canvas{
    border: 1px solid black;
    margin-bottom: 10px ;
}

@media (max-width: 1100px){
    canvas{
        width: 90% !important;
        height: 95% !important;
    }
}
</style>
