<script setup>
import splash from '../components/svgComponents/splash.vue'

import ImageBanner from '../partials/ImageBanner.vue'

import ContactForm from '../components/ContactForm.vue'


</script>

<template>
    <div class="contacto">
        <ImageBanner img="contacto" />
        
        <div class="text-area">

            <h1>Contacto</h1>
            <p>Ponte en contacto con nosotros a traves de los canales que te ofrecemos, o envianos un mensaje directo a
                nuestro
                correo. Nos encantaria leerte!</p>



        </div>
        <div class="time-line">


            <div class="splash">
                <splash color="#00adef" class="medium" />
                <div class="text-splash">
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
            </div>

            <ContactForm class="form"/>

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
    gap: 5px;
    margin: 80px 0px;
    height: 40vh;
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
    width: 400px;
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

.correction {
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

</style>

