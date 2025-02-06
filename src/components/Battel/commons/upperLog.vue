<template>
    <div class="flex justify-center">
        <div class="result-container">
            <p>{{"勝利数:" + resultsHistory.win}}</p>
            <p>{{"敗北数:" + resultsHistory.lose}}</p>
            <p>{{"引き分け数:" + resultsHistory.draw}}</p>
        </div>
            <div class="space"></div>
        <div :style="{color:battleColor}" class="log-container">
                    <a class="word-Position">{{upperLogs.news}}</a>
        </div>
            <div class="space"></div>
        <div class="phase-container">
            <p class="word-Position">{{"phase:" + resultsHistory.phase}}</p> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { battleColor, resultsHistory, upperLogs } from "../vue/gameMaineConstant";
</script>

<style lang="css" scoped>
.result-container{
    width: 20%;
    padding-bottom: 1%;
    border: 3px solid rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    font-size: 13px;
}
.phase-container{
    width: 20%;
    border: 3px solid white;
    background-color: rgb(0, 0, 0);
}
.log-container{
    width: 40%;
    border-Radius: 8px;
    font-size: 30px;
    border: 3px solid white;
    background-color: rgb(0, 0, 0);
}
.word-Position{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
}
.space{
    width: 1%;
}
</style>