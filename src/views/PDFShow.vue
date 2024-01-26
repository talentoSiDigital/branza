<script setup>
import {useRoute} from 'vue-router'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import router from '../router'
const route = useRoute()

const { pdf, pages } = usePDF('/data/'+route.params.name+'.pdf')

</script>


<template>
    <div class="main-pdf">
        <div class="navbar-adjust"></div>
        
        <div v-for="page in pages" :key="page" class="pdf">
            <VuePDF :pdf="pdf" :page="page" class="page"/>
        </div>
        <button @click="router.go(-1)">
            <font-awesome-icon :icon="['fas', 'backward']" />
            <p>Volver</p>
        </button>


    </div>
</template>

<style scoped>
.main-pdf{
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
button{
    width: 40%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: white;   
    background: #293c98;
    border: 1px solid #293c98;
    border-radius: 10px; 
    cursor: pointer;
    transition: 200ms;
    margin-bottom: 20px;
}
button:hover{
    background: white;   
    color: #293c98;
}
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
