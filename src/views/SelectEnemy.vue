<template>
    <div class="text-center rounded-0">
        <p>{{HoveredEnemy.name}}</p>
        <br>
        <p>{{HoveredEnemy.disc}}</p>
    </div>

    <div class="enemySelect">
        <div class="flex justify-center">
            <v-card
                class="enemy"
                @mouseover="dogHover"
                :href="buildUrl(0, playerName)"
                image="@/imgs/character_dog.png"
            />
            <v-card
                class="enemy"
                @mouseover="zundaHover"
                :href="buildUrl(1, playerName)"
                image="@/imgs/character_zunda.png"
            />
        </div>
        <div class="flex justify-center">
            <v-card
                class="enemy"
                @mouseover="ganjiHover"
                :href="buildUrl(2, playerName)"
                image="@/imgs/character_gandhi.png"
            />
            <v-card
                class="enemy"
                @mouseover="godHover"
                :href="buildUrl(3, playerName)"
                image="@/imgs/character_god.png"
            />
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const playerName = route.query.name as string;


const HoveredEnemy = ref<{
    name: string, disc: string
}>({name: "未選択", disc: "キャラクタは未選択です"});

function buildUrl(enemyId: number, name: string) {
    return `http://localhost:3000/game?enemyId=${enemyId}&name=${name}`;
}

function dogHover(){
    HoveredEnemy.value.name = "-犬-";
    HoveredEnemy.value.disc = "ワン！ワン！...グググ..うううう...バゥ";
}

function zundaHover(){
    HoveredEnemy.value.name = "-ずんだやん-";
    HoveredEnemy.value.disc = "僕と一緒にあそぶのだ";
}

function ganjiHover(){
    HoveredEnemy.value.name = "-ガンジー-";
    HoveredEnemy.value.disc = "暴力野郎は私の世界最強格闘技[ヨガ]で殲滅だ！";
}

function godHover(){
    HoveredEnemy.value.name = "-神-" ;
    HoveredEnemy.value.disc = "தீர்ப்பு நேரத்தில் உனக்கு மரணம்";
}

</script>


<style scoped>
.enemy {
    width: 200px;
    height: 200px;
    margin: 20px;
    border-width: 10px;
    border-style: solid;
    border-color: rgb(255 255 255);
    border-radius: 8px;
}
</style>