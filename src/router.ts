import { createRouter, createWebHistory } from 'vue-router';
import Start from './views/Start.vue';
import SelectEnemy from './views/SelectEnemy.vue';
import Game from './views/Game.vue';

const routes = [
    {
        name: "start",
        path: "/",
        component: Start
    },
    {
        name: "select",
        path: "/select",
        component: SelectEnemy
    },
    {
        name: "game",
        path: "/game",
        component: Game
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;