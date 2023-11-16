<script setup>
import splash from '../components/svgComponents/splash.vue'

import ImageBanner from '../partials/ImageBanner.vue'


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

            <form action="" class="contact-form">
                <div class="form-header">

                    <h1>Dejanos un mensaje</h1>



                </div>
                <div class="form">
                    <div class="form-group">
                        <input type="text" class="form-control" id="name" placeholder="Nombre">
                        <input type="email" class="form-control" id="email" placeholder="Email">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" id="subject" placeholder="Asunto">
                        <input type="text" class="form-control" id="phone" placeholder="Telefono">
                    </div>
                    <div class="form-group">
                        <textarea class=" textarea" placeholder="Escribe tu mensaje" id="message" rows="7"
                            cols="44"></textarea>
                    </div>
                    <div class="form-group">
                        <button>Enviar</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<style scoped>
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

form {
    width: 40%;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.15);
    padding: 15px;
}


.form-group {
    margin-top: 10px;
    display: flex;
    gap: 5px;
}

.form-group .form-control {
    width: 100%;
    height: 30px;
    padding: 5px;
    border-radius: 10px;
    border: none;
    background: #e4e4e4;
}


.textarea {
    min-width: 96%;
    max-width: 96%;
    min-height: 130px;
    max-height: 130px;
    padding: 5px;
    border-radius: 2%;
    border: none;
    background: #e4e4e4;
    padding: 10px;
}

button {
    padding: 10px 35px;
    border-radius: 5%;
    font-weight: 900;
    background: #31439b;
    border: none;
    color: white;
    transition: 0.5s;
}

button:hover {
    background: #4f66da;
}</style>

