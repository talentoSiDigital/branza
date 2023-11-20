import {createRouter,createWebHistory} from 'vue-router'
import Home from './views/Home.view.vue'
import Nosotros from './views/Nosotros.view.vue'
import Elaboraciones from './views/Elaboraciones.view.vue'
import Contacto from './views/Contacto.view.vue'
import Industrial from './views/Industrial.view.vue'
import ConsumoMasivo from './views/ConsumoMasivo.view.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:"/",
            component:Home,
            meta: {
                title:'Branza Foods'
            }
        },
        {
          
            path:"/nosotros",
            component:Nosotros,
            meta: {
                title:'Branza Foods - Nosotros'
            }
        },
        {
          
            path:"/elaboraciones",
            component:Elaboraciones,
            meta: {
                title:'Branza Foods - Elaboraciones'
            }
        },
        {
          
            path:"/contacto",
            component:Contacto,
            meta: {
                title:'Branza - Contacta con nosotros'
            }
        },
        { 
          
            path:"/industrial",
            component:Industrial,
            meta: {
                title:'Branza - Productos Industriales'
            }
        },
        {
          
            path:"/consumo-masivo",
            component:Industrial,
            meta: {
                title:'Branza - Consumo Masivo'
            }
        }
      
    ]
})


router.beforeEach((to, from, next) => {
    // Get the page title from the route meta data that we have defined
    // See further down below for how we setup this data
    const title = to.meta.title
  
    //Take the title from the parameters
    const titleFromParams = to.params.pageTitle;
    // If the route has a title, set it as the page title of the document/page
    if (title) {
      document.title = title
    }
    // If we have a title from the params, extend the title with the title
    // from our params
    if (titleFromParams) {
      document.title = `${titleFromParams} - ${document.title}`;
    }
    // Continue resolving the route
    next()
  })

export default router