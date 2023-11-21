<script setup>

</script>

<template>
    <form action="" class="contact-form">
        <div class="form-header">

            <h2>Dejanos un mensaje</h2>



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
                <textarea class=" textarea" placeholder="Escribe tu mensaje" id="message" rows="7" cols="44"></textarea>
            </div>
            <div class="form-group">
                <button>Enviar</button>
            </div>
        </div>
    </form>
</template>

<style scoped>



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
    min-width: 97%;
    max-width: 97%;
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
    border-radius: 10px;
    font-weight: 900;
    background: #31439b;
    border: none;
    color: white;
    transition: 0.5s;
}

button:hover {
    background: #4f66da;
}

@media (max-width: 1100px) {
    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90%;
    }
  .form-group{
    flex-direction: column;
  }
  .form-group .form-control {
    width: 90vw;
    margin: 3px 0px;
    height: 45px;
}
.textarea{
    max-width: 88vw;
    min-width: 88vw;
    
  }
  button{
    width: 90vw;
    margin: 3px 0px;
  }
}
</style>

