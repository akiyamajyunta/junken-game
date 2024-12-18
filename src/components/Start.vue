<template>
    <div class="main flex justify-center">
        <div>
            <v-card class="textBox flex justify-center" color="blue">
                <input type="text" v-model="textInput" title="your name":style="{ width: '150px', height: '20px' }" color="black"/>
            </v-card>
            <v-btn class="switch" color="primary" @click="Start">game start </v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const textInput = ref<String>("");
console.log(textInput);

function Start(){
    if(textInput.value == ""){
        alert("you must input name");
    } 
    else{
        window.location.href = `http://localhost:3000/select?name=${textInput.value}`;
    }
}
</script>

<style>
.main {
    background-image: url("@/imgs/hand_game.png");
    position: relative;
    background-size: contain;
    background-position: center;
    height: 100%;

}
.textBox{
    position:absolute;
    margin-bottom:0%;
}
.switch{
    position:absolute;
    margin-top:350%;
}
</style>