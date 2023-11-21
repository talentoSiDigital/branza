<script setup>
const icon = defineProps(["icon"])


</script>

<template>
    <div class="card">
        <div class="icon-container">
            <font-awesome-icon :icon="['fas', icon.icon]" class="icon blue light-blue-text" />
            </div>
        <header>
            <h5>
                <slot name="header">

                </slot>
            </h5>
            <p class="card-text">
                <slot name="paragraph">
    
                </slot>
                
            </p>
        </header>
    </div>


    
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 450px;
    height: fit-content;
    padding: 20px;


    background: rgba(51, 186, 237, .45);
    box-shadow: 5px 5px 25px 0px rgba(31,38,135,0.75);
    backdrop-filter: blur(19.5px);
    -webkit-backdrop-filter: blur(19.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.2s all ease-in-out;
}
/* .card:hover{
    transform: scale(1.2);
    box-shadow: 5px 5px 25px 0px rgba(3,38,135,0.75);

} */


.icon-container .icon {
    height: 40px;
    padding: 20px;
    border-radius: 10px;
    background: white;
    color: #33baedff
}

.card header {
    color: white;

    width: 100%;
    min-height: 100px;
    max-height: 170px;
}

.card header h5 {
    font-size: 18pt;
}

.card header .card-text {
    font-size: 12pt;
    margin-top: 10px;
}
</style>

