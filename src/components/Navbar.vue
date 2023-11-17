<script setup>
import { ref } from 'vue';

const navStatus = ref('close')
const navFull = ref('nav-close')


const navChange = () => {
    navStatus.value === 'close' ? navStatus.value = 'open' : navStatus.value = 'close'
    navFull.value === 'nav-close' ? navFull.value = 'nav-open' : navFull.value = 'nav-close'

}

</script>

<template>
    <nav>
        <div class="normal-nav">
            <div class="left-side">

                <ul>
                    <li>
                        <router-link to="/">

                            <img src="../assets/img/logo.png" alt="branza-logo" class="logo" />
                        </router-link>
                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Productos
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>

                        <div class="dropdown-content">

                            <a href="#">Leche Completa</a>
                            <a href="#">Leche Semi-completa</a>
                            <a href="#">Leche Descremada</a>


                        </div>
                    </li>

                    <li class="hover hover-underline-animation">

                        <router-link to="/nosotros">
                            <div class="nav-heading">
                                Sobre Nosotros
                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                            </div>
                        </router-link>
                        <div class="dropdown-content">

                            <a href="#">Mision</a>
                            <a href="#">Vision</a>


                        </div>

                    </li>

                    <li class="hover hover-underline-animation">
                        <div class="nav-heading">
                            Elaboraciones
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>

                    </li>

                    <li class="hover hover-underline-animation">
                        <router-link to="/contacto">
                            <div class="nav-heading">
                                Contacto
                                <font-awesome-icon :icon="['fas', 'angle-down']" />
                            </div>
                        </router-link>
                        <div class="dropdown-content">

                            <a href="#">Correo</a>
                            <a href="#">Informacion</a>


                        </div>

                    </li>

                    <li class="responsive-socials hover hover-underline-animation ">
                        <a href="https://www.facebook.com/branzafoods/" target="_blank" class="nav-heading">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                            <p>Facebook</p>
                        </a>



                    </li>
                    <li class="responsive-socials hover hover-underline- ">
                        <a href="https://www.instagram.com/branzafoods" target="_blank" class="nav-heading">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                            <p>Facebook</p>

                        </a>
                    </li>
                    <li class="responsive-socials hover hover-underline-animation ">
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                            class="nav-heading">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                            <p>Facebook</p>
                        </a>
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

        <div class="responsive-nav">
            <div @click="navChange" id="nav-icon1" :class="navStatus">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul :class="navFull">

                <li class="hover hover-underline-animation">
                    <router-link to="/" class="logo">

                        <img src="../assets/img/logo.png" alt="branza-logo" class="logo" />
                    </router-link>
                </li>

                <li class="hover hover-underline-animation">
                    <div class="nav-heading">
                        Productos
                        <font-awesome-icon :icon="['fas', 'angle-down']" />
                    </div>


                </li>

                <li class="hover hover-underline-animation">

                    <router-link to="/nosotros">
                        <div class="nav-heading">
                            Sobre Nosotros
                            <font-awesome-icon :icon="['fas', 'angle-down']" />
                        </div>
                    </router-link>


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


                </li>

                <li class="hover hover-underline-animation ">
                    <a href="https://www.facebook.com/branzafoods/" target="_blank" class="nav-heading">
                        <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        <p>Facebook</p>
                    </a>



                </li>
                <li class=" hover hover-underline- ">
                    <a href="https://www.instagram.com/branzafoods" target="_blank" class="nav-heading">
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                        <p>Instagram</p>

                    </a>
                </li>
                <li class=" hover hover-underline-animation ">
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fbranzafoods" target="_blank"
                        class="nav-heading">
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                        <p>Twitter</p>
                    </a>
                </li>

            </ul>
        </div>
    </nav>
</template>

<style scoped>
.normal-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    position: fixed;
    z-index: 99;
    background: white;
    width: 98%;

}

.transparent {
    background: transparent !important;
}


a {
    text-decoration: none;
}

.left-side {
    display: flex;
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
    transition: 0.5s;

}

ul .hover {
    color: #273294;
    display: inline-block;
    position: relative;
}

.nav- ul .hover:hover {
    color: #070f53;


}

img {
    min-width: 100px;
    min-height: 50px;
    max-width: 100px;
    max-height: 50px;
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

.nav-heading {
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


.dropdown-content a:hover {
    background-color: #ddd;
}

.hover:hover .dropdown-content {
    display: block;
}

.flex-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}





#nav-icon1 {
    display: none;
    position: fixed;
    z-index: 99;
    width: 50px;
    height: 50px;
    margin: 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
}

#nav-icon1 span {
    display: block;
    position: absolute;
    height: 7px;
    width: 100%;
    background: #31439b;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
    z-index: 99;
}

#nav-icon1 span:nth-child(1) {
    top: 0px;
}

#nav-icon1 span:nth-child(2) {
    top: 18px;
}

#nav-icon1 span:nth-child(3) {
    top: 36px;
}

#nav-icon1.open span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
}

#nav-icon1.open span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

.responsive-nav {
    margin: 0px;
    display: none;

}

.responsive-nav ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    z-index: 98;
    background: white;
    width: 100%;
    height: 100%;

}

.nav-close {
    transform: translateX(-1000px);

}

.responsive-nav ul li {
    height: 80px;
    width: 100%;
}

.responsive-socials {
    display: none !important;

}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}


@media (max-width: 800px) {

    nav {
        justify-content: center;
    }

    .normal-nav {
        display: none;
    }

    #nav-icon1 {
        display: block;
    }

    .nav-close {
        transform: translateX(-1000px);
        background: transparent !important;
    }


    form {
        display: none;
    }

    .right-side {
        display: none;
    }

    .responsive-nav {
        display: block;
    }


}
</style>

