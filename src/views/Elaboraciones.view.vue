<script setup>
import TwoFrameSection from '../partials/TwoFrameSection.vue'
import WhatsappButton from '../components/WhatsappButton.vue'

import WaveAnimated from '../components/svgComponents/WaveAnimated.vue'

</script>

<template>
  <TwoFrameSection class="dark-blue white-text">
        <template #h4>
            Yogurts
        </template>
        <template #p>
            Con nuestros productos, puedes realizar los mas deliciosos Yogurts, para que sorprendas a tus clientes.
        </template>
  </TwoFrameSection>

  <TwoFrameSection class="light-blue">
        <template #h4>
            Yogurts
        </template>
        <template #p>
            Con nuestros productos, puedes realizar los mas deliciosos Yogurts, para que sorprendas a tus clientes.
        </template>
  </TwoFrameSection>
  
  <TwoFrameSection class="dark-blue">
        <template #h4>
            Yogurts
        </template>
        <template #p>
            Con nuestros productos, puedes realizar los mas deliciosos Yogurts, para que sorprendas a tus clientes.
        </template>
  </TwoFrameSection>

</template>

<style scoped>


.dark-blue {
    background: #30449bff;
}

.light-blue {
    background: #33baed;
}
.white-text{
    color: white;
}


</style>

