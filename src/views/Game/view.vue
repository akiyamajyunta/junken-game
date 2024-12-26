<template>
    <div class="text-center ">
        <h1 class="text-2xl">{{ result }}</h1>
    </div>
    <ScoreBoard :results="results"/>

    <div class="flex justify-around" height="200">
        <CharCard class="mt-32"/>
        <CharCard class="mt-16" :image="getHandIcon(enemyHand)"/>
        <CharCard :image="getEnemyIcon(enemyId)"/>
    </div>

    <div class="flex justify-around" height="200">
        <CharCard class="mt-32" image="src/imgs/playr_icon.png"/>
        <CharCard class="mt-16" :image="getHandIcon(playerHand)"/>
        <CharCard/>
    </div>
    
    <div class="flex justify-center" @click="pon(enemyId)">
        <JunkenHands v-model="playerHand"/>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import CharCard from '../../components/CharactarCard';
import ScoreBoard from '../../components/ScoreBoard';
import JunkenHands from '../../components/JunkenHands';

const route = useRoute();
const playerName = route.query.name as string;
const enemyId = Number(route.query.enemyId as string);

import { getHandIcon, getEnemyIcon } from './icons';
import { playerHand, enemyHand, result, results, pon } from './junken';

</script>