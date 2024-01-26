<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import { RouterView,useRoute } from 'vue-router'

const route = useRoute()


</script>

<template>
  <div>
    <Navbar />
    <RouterView :key="route.fullPath"/>
    <Footer/>

  </div>
</template>

<style scoped>


</style>
