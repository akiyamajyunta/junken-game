<template>
    <div class="setPosition">
        <div class="main {overlay: !isTitle}">
                   <v-layout> 
                    <v-text-field
                        v-if="!isTitle"
                        class="nameBox"
                        label="Your name"
                        v-model="textInput"
                    />
                        <v-btn
                            v-if="!isTitle"
                            class="startButton"
                            @click="start"
                        >Start</v-btn>                
                    </v-layout>
                    <v-layout class="w-100">
                        <v-btn
                            variant="text"
                            v-if="isTitle"
                            class="button"
                            @click="isTitle = false; changeColor()"
                        >はじめる</v-btn>
                    </v-layout>
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
.setPosition{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(252, 114, 114, 0.31);
    justify-content: center;
    }
.main{ 
    height:80%; 
    width:80%;
    margin-top:3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
}
.nameBox{
    background-color: black;
    border: 3px solid #ccc;
    border-radius:10px;
}
.overlay{
    background-color: rgba(255, 0, 0, 0.392);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
}
.button{
    border: 3px solid #ffffff;
    border-radius:10px;
    display: flex;
    justify-content: center;
    width: 30%;
    background: rgb(0, 0, 0);
}
.startButton{
    border: 5px solid #ffffff;
    border-radius:10px;
    display: flex;
    width: 10%;
    background: rgb(255, 0, 0);
}


</style>