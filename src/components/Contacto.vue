<script setup>
import splash from '../components/svgComponents/splash.vue'

import ImageBanner from '../partials/ImageBanner.vue'

import ContactForm from '../components/ContactForm.vue'


</script>

<template>
    <div class="contacto">
        <ImageBanner img="contacto" title="Contacto" />

        <div class="content">
            <div class="text-area">

                <h3>Estamos aquí para ayudarte. Completa el siguiente formulario para que podamos entrar en contacto lo antes posible.</h3>



        </div>
        <div class="time-line">

            <!-- <div class="splash">
                        <splash color="#00adef" class="medium" />
                        <div class="text-splash ">
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
                            </div>
                        </div> -->
                <div class="frame frame-glass">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0198343323214!2d-66.82497922422601!3d10.499102364246271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a597652590ec7%3A0x7fbbed0fb5069750!2sBranza!5e0!3m2!1ses!2sve!4v1700755744999!5m2!1ses!2sve"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <ContactForm class="form">
                    <template #title>

                        <h2>Déjanos un mensaje</h2>

                    </template>
                </ContactForm>

            </div>
        </div>
    </div>
</template>

<style scoped>
.form {
    width: 40%;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.15);
    padding: 15px;
}

.main-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

}

.img-container {
    width: 95%;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(90deg, rgba(0, 173, 239, 1) 0%, rgba(0, 251, 244, 1) 50%, rgba(0, 173, 239, 1) 100%);
}

.banner-img {
    width: 100%;
    transform: translateY(-25em);
}

.text-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 10px;
}

.form-header,
.text-area {
    color: #31439b;
}

.text-area p {

    width: 60%;
    text-align: center;
}



.time-line {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: fit-content !important;
    gap: 5px;
    margin: 40px 0px;
    position: relative;
}

.medium {
    width: 150%;
}

.text-splash {
    text-align: center;
    position: relative;
    z-index: 10
}

.text-splash header {
    position: absolute;
    top: -300px;
    left: 135px;
}

.text-splash header h2 {
    font-weight: 900;
}

.text-splash header p {
    font-size: 10pt;
}


.blue {
    color: #31439b;
}

.correct {
    transform: translateY(-30px);
}

.correction-small {
    transform: translateY(-15px);
}

.white {
    color: white;
}

.icon {
    height: 20px;
    border-radius: 50%;
    padding: 10px;
    color: #00adef;
    background: white;


}

.icon2 {
    height: 20px;
    border-radius: 50%;
    padding: 10px 12px;
    color: #00adef;
    background: white
}

.line {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
}

.frame-glass {
    border: 3px solid #31439b;
    background: rgba(31, 38, 135, 0.75);
    box-shadow: 5px 5px 25px 0px rgba(31, 38, 135, 0.75);
    backdrop-filter: blur(19.5px);
    -webkit-backdrop-filter: blur(19.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.2s all ease-in-out;
    padding: 15px;

    transition: 0.2s;
}

.mission {

    transform: translateY(-40px);
}

.mission-header {
    color: white;
    text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.6);

}
h3{
    font-size: 22px;
    font-weight: 400;
}

@media (max-width: 1100px) {
    .time-line {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }

    .form {
        box-shadow: none;
    }

    .splash {
        transform: translateX(-100px);
    }

}
</style>

