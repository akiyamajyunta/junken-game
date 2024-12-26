<template>
    <div class="text-center ">
        <h1>{{ result }}</h1>
    </div>
    <ScoreBoard :results="results"/>

    <div class="flex justify-around" height="200">
        <CharCard class="mt-32"/>
        <CharCard class="mt-16"/>
        <CharCard :image="getEnemyImage()"/>
    </div>

    <div class="flex justify-around" height="200">
        <CharCard class="mt-32" image="src/imgs/playr_icon.png"/>
        <CharCard class="mt-16"/>
        <CharCard/>
    </div>
    
    <div class="flex justify-center" height="200">
        <JunkenHands v-model="playerHand"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import CharCard from '../components/CharactarCard';
import ScoreBoard from '../components/ScoreBoard';
import JunkenHands from '../components/JunkenHands';

const route = useRoute();
const playerName = route.query.name as string;
const enemyId = Number(route.query.enemyId as string);

const playerHand = ref<number>(-1);

const result = ref<string>("じゃんけん...");
const results = ref<{
    win: 0, lose: 0, draw: 0
}>({win: 0, lose: 0, draw: 0});

function getEnemyImage() {
    const images = [
        "../imgs/character_dog.png",
        "../imgs/character_zunda.png",
        "../imgs/character_gandhi.png",
        "../imgs/character_god.png",
    ];

    const url = new URL(images[enemyId], import.meta.url).href;
    console.log("image url: ", url);
    return url;
}

</script>

<style>
.item {
    width: 100px;
    height: 150px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(255 255 255);
    border-radius: 8px;
}
</style>