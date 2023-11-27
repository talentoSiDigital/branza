<script setup>

</script>

<template>
    
    <div class="container">
        <div class="button">
        
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="green"/>
        </div>
       

    </div>
</template>

<style scoped>
.container{
    position: fixed;
    top: 87%;
    left: 93%;
    z-index: 25;
}
.fold-container{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
}


.button {
    padding: 10px;
    background: rgb(0, 210, 0);
    border-radius: 100px;
   
    cursor: pointer;
    width: 45px;
    height: 45px;
    transition: all 0.5s;
    
}
.button:hover {
    background: rgb(1, 81, 1);

}
.green {
    
    width: 100%;
    height: 100%;
    color: white
}
</style>

