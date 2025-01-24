<template>
    <div id="result-container">
        <p>{{"勝利数:" + resultsHistry.win}}</p>
        <p>{{"敗北数:" + resultsHistry.lose}}</p>
        <p>{{"引き分け数:" + resultsHistry.draw}}</p>
        <p>{{"ターン数:" + resultsHistry.phase}}</p>
    </div>
</template>

<script setup lang="ts">

import {resultsHistry}  from '../../ts/record'





</script>

<style lang="css" scoped>
#result-container{
    width: 150px;
    border: 3px solid white;
    border-radius: 8px;
    background: rgb(0, 0, 255);
}
</style>