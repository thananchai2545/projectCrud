import Login from "./views/Login.vue"
import profile from "./views/profile.vue"
import Hotel from './views/components/Hotel.vue'
import Admin from './views/components/Admin.vue'
import Createhotel from './views/HotelCreate.vue'
import EditHotel from './views/Edit.vue'
import CreateAdmin from './views/AdminCreate.vue'


import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/profile',
        redirect: '/profile',
        name: 'profile',
        component: profile,
        children: [
            {
                path: '',
                name: 'Hotel',
                component: Hotel
            },
            {
                path: 'Admin',
                name: 'Admin',
                component: Admin
            }
        ],
    },
    {
        path: '/createhotel',
        name: 'createhotel',
        component: Createhotel
    }, 
    {
        path: '/EditHotel/:hotelId',
        name: 'EditHotel',
        component: EditHotel
    },
    {
        path: '/CreateAdmin',
        name: 'CreateAdmin',
        component: CreateAdmin
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        next('/');
    } else {
        next();
    }
});


export default router;