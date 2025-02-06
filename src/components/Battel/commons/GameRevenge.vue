<template>
    <div class="gameFinish" :style="{height:100+'%'}" v-if="gameOverSurface">
        <div class="setPosition justify-center">
            <a class="gameOver">{{dieOrKill}}</a>
        </div>
        <v-btn @click="clicked" class="revengeSelectionMake"></v-btn>
        <div class="setPosition" v-if="revengeOrEnd" >
            <v-btn class="button"@click="revengeGameSet()">再戦する</v-btn>
            <v-btn class="button"@click="gameEnd">終わる</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    revengeGameSet,
    revengeOrEnd,
    dieOrKill,
    gameOverSurface
} from '../ts/gameFinish';

function gameEnd(){
    window.location.href = `http://localhost:3000/`;
}

function clicked(){
    revengeOrEnd.value= true;
}

</script>

<style scoped>
.gameFinish{
    position: absolute;
    width: 100%;
    height:100%;
    background-color: rgba(255, 255, 255, 0.484);
    z-index: 2000;
}
.setPosition{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(165, 42, 42, 0);
}
.gameOver{
    text-align: center;
    display: flex;
    align-items: center;
    color:rgb(255, 0, 0);
    font-size: 80px;
}    
.button{
    text-align: center;
    display: flex;
    align-items: center;
    top:60%;
    width: 20%;
    height: 10%;
    font-size: 30px;
    margin: 10px;
    border-radius: 20px;
    border: 5px solid white;
    background-color: black;
}
.revengeSelectionMake{
    background-color: rgba(255, 255, 255, 0.345);
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>