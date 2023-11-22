<script setup>

</script>

<template>
    <div class="cookies">
        <vue-cookie-accept-decline :debug="true" :disableDecline="false" :showPostponeButton="false"
            @clicked-accept="cookieClickedAccept" @clicked-decline="cookieClickedDecline"
            @clicked-postpone="cookieClickedPostpone" @removed-cookie="cookieRemovedCookie" @status="cookieStatus"
            elementId="myPanel1" position="bottom" ref="myPanel1" transitionName="slideFromBottom" type="bar">
            <!-- Optional -->
            <template #postponeContent>&times;</template>

            <!-- Optional -->
            <template #message>
                <div class="header">
                    <img src="/img/logo.png" alt="">
                    Este sitio hace uso de cookies para asegurar la experiencia
                </div>
            </template>

            <!-- Optional -->
            <template #declineContent>Rechazar</template>

            <!-- Optional -->
            <template #acceptContent>Aceptar</template>
        </vue-cookie-accept-decline>
    </div>
</template>

<style scoped>

img {
    width: 100px;
    height: 50px;
}

.header {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>

