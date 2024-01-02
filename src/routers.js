import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import Agreement from './views/Agreement.vue'
import EmailInfo from './views/EmailInfo.vue'
import EmailDetails from './views/EmailDetails.vue'
import ReceiverInfo from './views/ReceiverInfo.vue'

const router =  createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes:[{
        path: '/',
        name: 'Home',
        component:Home,
        children: [
        {
            path: 'agreement',
            name: 'Agreement',
            component: Agreement,
        },
        {
            path: 'emailinfo',
            name: 'EmailInfo',
            component: EmailInfo,
        },
        {
            path: 'receiverinfo',
            name: 'ReceiverInfo',
            component: ReceiverInfo,
        },
        {
            path: 'emaildetails',
            name: 'EmailDetails',
            component: EmailDetails,
        },
    ]
    }],
    linkActiveClass: "routerlink-active-link",
})

export default router