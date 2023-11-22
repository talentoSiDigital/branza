<script setup>
import Banner from '../components/Banner.vue'
import Productos from '../components/Productos.vue'
import Nosotros from '../components/Nosotros.vue'
import Mision from '../components/Mision.vue'
import Contacto from '../components/Contacto.vue'
import WhatsappButton from '../components/WhatsappButton.vue'
import Cookies from '../components/Cookies.vue'
</script>

<template>
    <div>


        <!-- <Banner />
                <Productos />
                <Nosotros />
                <Mision/>
                <Contacto  /> -->
                <WhatsappButton /> 
                <Banner />
                
                <Cookies /> 
        <Productos v-motion-slide-visible-left />
        <Nosotros v-motion-slide-visible-left />
        <Mision v-motion-slide-visible-left />
        <Contacto v-motion-slide-visible-left />
        <Footer v-motion-slide-visible-left />
    </div>
</template>

