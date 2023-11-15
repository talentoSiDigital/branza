import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'
import router from './router'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faMagnifyingGlass,
    faAngleDown,
    faIndustry,
    faHandshake,
    faAward,
    faHandsHoldingCircle,
    faCircleCheck,
    faEnvelope,
    faPhone,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'


library.add(
    faMagnifyingGlass,
    faFacebookF,
    faInstagram,
    faAngleDown,
    faIndustry,
    faHandshake,
    faAward,
    faHandsHoldingCircle,
    faCircleCheck,
    faEnvelope,
    faPhone,
    faLocationDot
)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(MotionPlugin)
    .use(router)
    .mount('#app')
