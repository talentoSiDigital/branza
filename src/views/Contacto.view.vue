<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
    <div class="contacto">
        <div class="info-side">

            <div class="contact-data">

                <header>

                    <h1>Contacta con nosotros</h1>

                    <h4>Queremos saber más de tí</h4>

                </header>
                <div class="info-container">
                    <div class="info-lines">
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
                    </div>
                </div>


            </div>


            <div class="socials">

                <h3>Siguenos en nuestras redes</h3>
                <div class="buttons">
                    <a href="https://www.facebook.com/branzafoods/" target="_blank" class="icon-link">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" class="icons" />
                    </a>
                    <a href="https://www.instagram.com/branzafoods" target="_blank" class="icon-link">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="icons" />
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                        class="icon-link">
                        <font-awesome-icon :icon="['fab', 'x-twitter']" class="icons" />
                    </a>
                </div>
            </div>

        </div>
        <ContactForm class="form" />
    </div>
</template>

<style scoped>
.contacto {
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-side,
.form {
    height: 80%;



}

.contact-data {
    text-align: center;
}

.info-container {
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

.info-side {
    display: flex;
    width: 70%;
    height: 88vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #33baed;
    color: white;
}
.info-lines{
    margin: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 15pt;

}

.info-side h1 {
    font-weight: 900;
    font-size: 35pt;
}
h4{
    
    font-size: 18pt;
}
.line {
    display: flex;
    margin: 10px;
    gap: 25px;

}

.socials {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.socials .icons {
    color: white;
    width: 25px;
    height: 25px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.4s ease-in-out;
}

.socials .icons:hover {
    background: #31439b;
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


@media (max-width: 1100px) {
    .form {
        padding: 0px;
    }

    .contacto {
        flex-direction: column-reverse;
        height: fit-content;

    }

    .info-side {
        width: 100%;
        height: 60vh !important;

    }

    form {
        height: 100vh !important;
    }




}
</style>

