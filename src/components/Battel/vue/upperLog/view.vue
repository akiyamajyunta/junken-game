<template>
<div class="logs">
    <div class="setPosition">
        <div class="result-container">
            <p>{{"勝利数:" + resultsHistory.win}}</p>
            <p>{{"敗北数:" + resultsHistory.lose}}</p>
            <p>{{"引き分け数:" + resultsHistory.draw}}</p>
        </div>
        <div class="item"></div>
        <v-card :style="{color:battleColor}" class="log-container">
                    <a class="word-Position">{{upperLogs.news}}</a>
        </v-card>
        <div class="item"></div>
        <div class="phase-container">
        <p class="word-Position">{{"phase:" + resultsHistory.phase}}</p> 
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {  battleColor  } from "../../ts/move";
import { upperLogs } from "./log";
import {resultsHistory}  from '../../ts/record'
</script>

<style lang="css" scoped>
.logs{
    width: 100%;
}
.setPosition{
    width: 90%;
    height: 100px;
    display: flex;
    margin-left: 5%;
    }
.result-container{
    width: 30%;
    height: 160%;
    border-radius: 8px;
    border: 5px solid white;
    background-color: rgb(0, 0, 0);
    display: grid;
    font-size: 35px;
}
.phase-container{
    width: 30%;
    border-radius: 8px;
    border: 5px solid white;
    background-color: rgb(0, 0, 0);
}
.log-container{
    width: 40%;
    border-Radius: 8px;
    font-size: 30px;
    border: 5px solid white;
    background-color: rgb(0, 0, 0);
}
.word-Position{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
.item{
    width: 1%;
}
</style>