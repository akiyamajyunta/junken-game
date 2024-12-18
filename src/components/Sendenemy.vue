<template>
<v-card color="blue" height="100%">
    <v-card class="text-center rounded-0">
        <a>{{ result }}</a>
    </v-card>   
    <v-card class="text-center rounded-0">
        <a>{{name}}</a>
    </v-card>

    <div class="enemySelect">
        <div class="flex justify-center">
            <v-card :style="{ border: '10px solid white', borderRadius: '8px' }"
                class="enemy"
                 @mouseover="dogHover"
                :href="buildUrl(0, textInput)"
                image="@/imgs/inu.png"
            />
            <v-card :style="{ border: '10px solid white', borderRadius: '8px' }"
                class="enemy"
                @mouseover="zundaHover"
                :href="buildUrl(1, textInput)"
                image="@/imgs/zunda_mochi.png"
            />
        </div>
        <div class="flex justify-center">
            <v-card :style="{ border: '10px solid white', borderRadius: '8px' }"
                class="enemy"
                @mouseover="ganjiHover"
                :href="buildUrl(2, textInput)"
                image="@/imgs/gandhi.png"
            />
            <v-card :style="{ border: '10px solid white', borderRadius: '8px' }"
                class="enemy"
                @mouseover="godHover"
                :href="buildUrl(3, textInput)"
                image="@/imgs/character_cthulhu_azathoth.png"
            />
        </div>
    </div>   
</v-card>           
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const textInput = route.query.name as string;

let result = ref<string>("");
let name = ref<string>("");

function buildUrl(enemyId: number, name: string) {
    return `http://localhost:3000/game?enemyId=${enemyId}&name=${name}`;
}

function dogHover(){
    result.value = "ワン！ワン！...グググ..うううう...バゥ";
    name.value ="-犬-" 
}    
function zundaHover(){
    result.value = "僕と一緒にあそぶのだ";
    name.value ="-ずんだやん-" 
}
function ganjiHover(){
    result.value = "暴力野郎は私の世界最強格闘技[ヨガ]で殲滅だ！"
    name.value ="-ガンジー-" 
}

function godHover(){
     result.value = "தீர்ப்பு நேரத்தில் உனக்கு மரணம்"
     name.value ="-神-" 
}
console.log(textInput)
</script>

<style>
.enemy {
    width: 200px;
    height: 200px;
    margin: 20px;
}
</style>
