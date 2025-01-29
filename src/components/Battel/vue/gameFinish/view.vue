<template>
    <div class="gameFinish" :style="{height:100+'%'}" v-if="gameoverSurface">
        <div class="setPosition">
            <a class="gameover">{{dieOrkill}}</a>
        </div>
        <v-btn @click="clicked" class="revengeSelectionMake">aa</v-btn>
        <div class="setPosition" v-if="revengeOrEnd" >
            <v-btn class="button"@click="gamerevenge">再戦する</v-btn>
            <v-btn class="button"@click="gameEnd">終わる</v-btn>
        </div>
    </div>
</template>



<script setup lang="ts">
import { gameoverSurface ,dieOrkill,revengeGameSet} from './gameFinish';
import { ref } from 'vue';
const revengeOrEnd =ref<boolean>(false);

function gamerevenge(){
    revengeGameSet()
//`http://localhost:3000/battel?enemyId=${enemyId}&name=${name}`;
}
function gameEnd(){
    window.location.href = `http://localhost:3000/`;

}
function clicked(){
    revengeOrEnd.value= true
}//画面をクリックで再戦、終わるを選べるようにしたい

</script>





<style scoped>


.gameFinish{
    position: absolute;
    width: 100%;
    height:100%;
    background-color: rgba(255, 255, 255, 0.484);
    z-index: 1000;
    }
.setPosition{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(165, 42, 42, 0);
    justify-content: center;
    }
.gameover{
    transition: all 0.5s 1s ease-in-out;
    text-align: center;
    display: flex;
    align-items: center;
    color:red;
    font-size: 100px;
}    
.button{
    text-align: center;
    display: flex;
    align-items: center;
    top:60%;
    width: 20%;
    height: 7%;
    font-size: 50px;
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