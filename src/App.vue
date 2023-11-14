<script setup>
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import Productos from './components/Productos.vue'
import Nosotros from './components/Nosotros.vue'
import Mision from './components/Mision.vue'
import Contacto from './components/Contacto.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div>
    <Navbar />
    <Banner />
    <Productos v-motion-slide-visible-once-left/>
    <Nosotros v-motion-slide-visible-once-left/>
    <Mision v-motion-slide-visible-once-left/>
    <Contacto v-motion-slide-visible-once-left/>
    <Footer v-motion-slide-visible-once-left/>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
