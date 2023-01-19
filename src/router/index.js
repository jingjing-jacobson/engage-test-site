import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/playground',
        name: 'playground',
        component: () => import('../views/PlaygroundView.vue')
    },
    {
        path: '/iframe',
        name: 'iframe',
        component: () => import('../views/IFrameView.vue')
    },
    {
        path: '/another-iframe',
        name: 'another-iframe',
        component: () => import('../views/AnotherIFrameView.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
