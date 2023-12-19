<script setup>

</script>

<template>
    <div class="container">
        <a href="https://wa.me/584142665125" class="button green">

            <font-awesome-icon :icon="['fab', 'whatsapp']" class="icon" />
        </a>


    </div>
</template>

<style scoped>
.container {
    position: fixed;
    top: 87%;
    left: 93%;
    z-index: 25;
}

.fold-container {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
}


.button {
    display: block;
    padding: 10px;
    background-color: #00d200;

    border-radius: 100px;

    cursor: pointer;
    width: 45px;
    height: 45px;
    transition: all 0.5s;
}

.button:hover {
    background: rgb(1, 81, 1);

}

.icon {
    color: white;
    width: 100%;
    height: 90%;

}

@media (max-width: 1100px) {
    .container {
        left: 90% !important;
    }
}

@media (max-width: 750px) {
    .container {
        left: 85% !important;
    }

}
@media (max-width: 475px) {
    .container {
        left: 75% !important;
    }

}
</style>

