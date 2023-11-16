<script setup>


</script>

<template>
    <nav>
        <div class="normal-nav">
            <div class="left-side">
                <ul>
                    <li>
                        <img src="../assets/img/logo.png" alt="branza-logo" />
                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Productos 
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>
                        <div class="dropdown-content">
                            
                                <a href="#" >Leche Completa</a>
                                <a href="#" >Leche Semi-completa</a>
                                <a href="#" >Leche Descremada</a>
                               
                           
                        </div>
                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Sobre Nosotros
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>
                        <div class="dropdown-content">
                            
                            <a href="#" >Mision</a>
                            <a href="#" >Vision</a>
                           
                       
                    </div>

                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Elaboraciones
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>

                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Contacto
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>
                        <div class="dropdown-content">
                            
                            <a href="#" >Correo</a>
                            <a href="#" >Informacion</a>
                           
                       
                    </div>

                    </li>

                   




                </ul>

            </div>

            <div class="right-side">
                <form>
                    <button>
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                    </button>
                    <input type="text" placeholder="Buscar" />
                </form>
                <div>
                    <p>
                        Siguenos en:
                        <a href="https://www.facebook.com/branzafoods/" target="_blank" class="socials">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>

                        <a href="https://www.instagram.com/branzafoods" target="_blank" class="socials">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                            class="socials">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="dropdown">


        </div>
    </nav>
</template>

<style scoped>
.normal-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: white;
    position: fixed;
    z-index: 99;
    width: 98%;

}

a {
    text-decoration: none;
}

.left-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 60%;

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
    display: inline-block;
    position: relative;
}
.nav-


ul .hover:hover {
    color: #070f53;


}

img {
    width: 100px;
    height: 50px;
}

.hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
.nav-heading{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
}


.right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
}

form {
    background: #f5f5f5;
    color: #a2a2a2;
    padding: 5px;
    border-radius: 10px;
    width: 50%;

}

form button {
    background: none;
    border: none;
}

form button:hover {
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


.dropdown {
    position: fixed;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}
.dropdown-content a {
  color: #070f53;
  padding: 10px 15px;

  text-decoration: none;
  display: block;
}


.dropdown-content a:hover {background-color: #ddd;}

.hover:hover .dropdown-content {display: block;}

.flex-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
}



@media (max-width: 800px) {

    nav {
        justify-content: center;
    }

    .left-side a,
    form {
        display: none;
    }

    .right-side p {
        font-size: 14pt;
    }


}
</style>

