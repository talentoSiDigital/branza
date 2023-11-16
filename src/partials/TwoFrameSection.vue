<script setup>
const {order,bg} = defineProps(['order','bg'])


</script>

<template>
    <!-- CAMBIAR IMAGEN DEL LAYOUT, POR AHORA, SOLO DE REFERENCIA -->
    <div class="frame" :class="order">
        <div class="text-side">
            <header>
                <h4>
                    <slot name="h4">

                    </slot>
                </h4>
                <p>
                    <slot name="p"></slot>
                </p>
            </header>
        </div>
        <div class="img-side" :style="['background',bg]">
            <img src="../assets/img/layout.jpg" alt="">


        </div>


    </div>
</template>

<style scoped>
.frame {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.reverse {
    flex-direction: row-reverse
}

.text-side {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.text-side header {
    width: 80%;
}


.img-side {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    width: 50%;
}

h4{
    font-size: 40pt;
    
}
p{
    
    font-size: 20pt;
}
</style>


