<template>
    <div class="main">
        <div :class="{overlay: !isTitle}" class="h-full">
       
            <div class="h-1/2"></div>
            <div class="mx-auto w-1/4">
                <v-text-field
                    v-if="!isTitle"
                    class="nameBox"
                    label="Your name"
                    v-model="textInput"
                />
                <v-layout class="my-4">
                    <v-btn
                        v-if="!isTitle"
                        class="butten mx-auto"
                        @click="start"
                    >Start</v-btn>                
                </v-layout>
                <v-layout>
                    <v-btn
                        v-if="isTitle"
                        class="butten mx-auto bg-sky-500"
                        @click="isTitle = false; changeColor()"
                    >Let's Play</v-btn>
                </v-layout>
            </div>
        </div>
    </div>  
</template>


<script setup lang="ts">
import { ref } from 'vue';

const colorRgba = ref<string>("rgba(255,0, 255, 1)");
const textInput = ref<String>("");
const isTitle = ref<boolean>(true);

function start(){
    if(textInput.value == ""){
        alert("you must input name");
    }else if((textInput.value).length > 6){
        alert("文字数が多すぎます");}
    else{
        window.location.href = `http://localhost:3000/select?name=${textInput.value}`;
    }
}


function changeColor(){
    if (isTitle){
        colorRgba.value = "rgba(255, 0, 0, 0)"
    }else{
        colorRgba.value = "rgba(0, 0, 0, 0.5)"
    }
}

</script>

<style scoped>
.main {
    background-image: url("@/imgs/hand_game.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    background-size: contain;
    background-position: center;
    height: 1000px;
}
.nameBox{
    background-color: black;
    border: 3px solid #ccc;
    border-radius:10px;



}
.overlay{
    background-color: rgba(0,0,0,0.85);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
}
.butten{
    border: 5px solid #ffffff;
    border-radius:10px;
    background: rgb(0, 0, 255);


}
</style>




 <!-- class="bg-sky-500" -->




