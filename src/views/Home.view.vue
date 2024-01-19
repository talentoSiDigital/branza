<script setup>
import Banner from '../components/Banner.vue'
import Productos from '../components/Productos.vue'

import WhatsappButton from '../components/WhatsappButton.vue'
import VitalleBanner from '../components/VitalleBanner.vue'    
import Cookies from '../components/Cookies.vue'
import Aliados from '../components/Aliados.vue'
</script>

<template>
    <div>
        <WhatsappButton />
        <Banner />
        <!-- <Cookies /> -->
        <VitalleBanner />
        
        <Productos  />
        <Aliados  />
        <Footer />
    </div>
</template>

