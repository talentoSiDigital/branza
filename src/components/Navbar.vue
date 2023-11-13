<script setup>


</script>

<template>
  <nav>
    <div class="left-side">
      <ul>
        <li> 
            <img src="../assets/img/logo.png" alt="branza-logo" />
        </li>
        <li class="hover">
            Productos
            <font-awesome-icon :icon="['fas', 'angle-down']" />
        
        </li>
        <li class="hover">
            Sobre Nosotros
            <font-awesome-icon :icon="['fas', 'angle-down']" />
        
        </li>
        <li class="hover">
            Contacto
            <font-awesome-icon :icon="['fas', 'angle-down']" />
        
        </li>
      </ul>
    </div>
    
    <div class="right-side">
      <form>
        <button>
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
        <input type="text" placeholder="Buscar"/>
      </form>
      <div>
        <p>
            Siguenos en:
            <a href="#">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>

            <a href="#">
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
        </p>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: white;
    position: fixed;
    z-index: 99;
    width: 98%;

}
.left-side  {
    display: flex;
    align-items: center; 
    gap: 20px;
    width: 50%;

}


ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    list-style: none;
    gap: 10px;

} 
ul .hover {
    color: #273294;
}


ul .hover:hover{   
    color: #070f53;
   

}   

img {   
    width: 100px;
    height: 50px;
}   




.right-side{   
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
}
form{
    background: #f5f5f5;
    color: #a2a2a2;
    padding: 5px;
    border-radius: 10px;
    width: 50%;

}
form button{
    background: none;
    border: none;
}
form button:hover{
    color: #6a6a6a;
}

input[type="text"] { 
    padding: 0 5px;
    border: none;
    background: #f5f5f5;
    width: 80%;

}
input[type="text"]:focus { 
    border: none; 
}


p {

    color: #273294;
} 


p a {   
    padding: 0 10px;
    text-decoration: none;
    color: #273294;
}   

p a:hover {
    color: #070f53;
}

</style>

