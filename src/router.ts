import { createRouter, createWebHistory } from 'vue-router';
import Start from './components/Start.vue';
import Sendenemy from './components/Sendenemy.vue';
import Game from './components/game.vue';
import AokiGame from './components/AokiGame.vue';
import Win from './components/win.vue';
import JunkenGame from './components/junkenGame.vue';

const routes = [
    {
        name: "Start",
        path: "/",
        component: Start
    },
    {
        name: "Sendenemy",
        path: "/select",
        component: Sendenemy
    },
    // {
    //     name: "Game",
    //     path: "/game",
    //     component: Game
    // },
    {
        name: "junkenGame",
        path: "/game",
        component: JunkenGame
    },
    {
        name: "WinRsedult",
        path: "/win",
        component: Win
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;