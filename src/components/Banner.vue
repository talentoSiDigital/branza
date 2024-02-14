
<template>
    <div class="frame video-frame">

        <video width="320" height="220" autoplay loop muted class="video-banner">
            <source src="/img/video-banner.mp4" type="video/mp4" class="video">

        </video>
        <div class="video-text-side">
            <div class="banner ">
                <div class="text-area ">
                    <header>
                        <h2>Leche</h2>
                        <h2 class="thin">para toda</h2>
                        <h2><strong>Venezuela</strong></h2>

                    </header>
                </div>
                <img src="/img/logo-motion-2.gif" alt="branza-illustration">

            </div>

            <font-awesome-icon :icon="['fas', 'angles-down']" class="icon-down bounce2" />

        </div>
    </div>
</template>

<style scoped>
.border-debug {
    border: 1px solid black;
}

.banner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-area {
    width: 50%;
}


.text-area header {
    text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.6);
    font-size: 30pt;
}

.text-area header h2 {
    font-weight: 400;


}

.text-area header .thin {
    font-weight: 200;
}


.text-area header strong {
    font-weight: 900;
}


img {
    width: 40%;
    border: none;
}

.bounce2 {
    animation: bounce2 4s ease infinite;
}



.frame {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}


.video-frame {

    width: 100%;
    height: 100vh;
    overflow: hidden;

}

.video-banner {
    min-height: 130vh;
    min-width: 100vw;
    max-width: 100vw;

}

.icon-down {
    font-size: 3rem;
}

.video-text-side {
    color: white;
    border-radius: 15px;
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background: rgba(49, 67, 155, 0.40);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 15%;
}

.video-text-side header {
    display: flex;
    flex-direction: column;
    justify-content: center;
}


@keyframes bounce2 {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-30px);
    }

    60% {
        transform: translateY(-15px);
    }
}


@media (max-width:550px) {

    img {
        width: 80%;
    }
}


@media (max-width: 1100px) {


    .banner {
        flex-direction: column-reverse;
        margin-top: 50px;
    }

    .text-area {
        width: 80%;
        text-align: center;
    }

    .text-area .text-box {
        width: 100%;
    }

    .text-area header {
        font-weight: normal;
        font-size: 40pt;
    }

    .video-banner {
        min-width: 1500px;
    }

    .text-area header h2 {
        font-size: 40pt;
    }

}

@media screen and (min-width: 1980px) {
    .text-area header {
        font-size: 80pt;
    }

    .banner {
        height: 100vh;
    }
}
</style>

