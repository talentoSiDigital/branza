<script setup>
import Banner from '../components/Banner.vue'
import Productos from '../components/Productos.vue'
import Nosotros from '../components/Nosotros.vue'
import Mision from '../components/Mision.vue'
import Contacto from '../components/Contacto.vue'
</script>

<template>
    <div>


        <!-- <Banner />
        <Productos />
        <Nosotros />
        <Mision/>
        <Contacto  /> -->
        <Banner  />
        <Productos v-motion-slide-visible-left />
        <Nosotros v-motion-slide-visible-left />
        <Mision v-motion-slide-visible-left />
        <Contacto v-motion-slide-visible-left />
        <Footer v-motion-slide-visible-left />
    </div>
</template>

