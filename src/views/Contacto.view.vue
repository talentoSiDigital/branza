<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
    <div class="contacto">
        <div class="info-side">
            <h1>Contacta con nosotros</h1>
            <h5>Queremos saber más de tí</h5>
            <header class="white">
                <div class="line">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
                    <h5>branza@example.com</h5>
                </div>
                <div class="line">
                    <font-awesome-icon :icon="['fas', 'phone']" class="icon " />
                    <h5>(58) 212-000-0000</h5>
                </div>
                <div class="line">
                    <font-awesome-icon :icon="['fas', 'location-dot']" class="icon2" />
                    <h5>284 Royal, New Jersey</h5>
                </div>


            </header>

            <h3>Siguenos en nuestras redes</h3>
            <div class="socials">
                <a href="https://www.facebook.com/branzafoods/" target="_blank" class="icon-link">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="icons" />
                </a>
                <a href="https://www.instagram.com/branzafoods" target="_blank" class="icon-link">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="icons" />
                </a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                    class="icon-link">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="icons" />
                </a>
            </div>
        </div>
        <ContactForm class="form" />
    </div>
</template>

<style scoped>
.contacto {
    height: 88vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-side,
.form {
    height: 80%;



}

.info-side {
    display: flex;
    width: 70%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #33baed;
    color: white;
}

.info-side h1 {
    font-weight: 900;
}
.line{
    display: flex;
    margin: 10px;
    gap: 15px;
}

.socials {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.socials .icons {
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
}

.socials .icons:hover {
    background: white;
    transform: scale(1.1);

}


.form {
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
}
</style>

