import { createRouter, createWebHistory } from 'vue-router';
import Start from './components/Start';
import SendEnemy from './components/SendEnemy';
import Battel from './components/Battel/vue/view.vue';


const routes = [
    {
        name: "Start",
        path: "/",
        component: Start
    },
    {
        name: "SendEnemy",
        path: "/select",
        component: SendEnemy
    },
    {
        name: "Battel",
        path: "/battel",
        component: Battel
    },

];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;