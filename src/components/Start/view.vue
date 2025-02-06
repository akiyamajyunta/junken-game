<template>
    <div class="setPosition">
        <div class="main {overlay: !isTitle}">
            <v-container>
                <v-layout class="setText"> 
                    <v-text-field
                        v-if="!isTitle"
                        class="textBox mx-auto"
                        label="あなたのおなまえは？"
                        v-model="textInput"
                    />
                    <v-btn
                        v-if="!isTitle"
                        class="startButton mx-auto"
                        @click="start"
                        >Start
                    </v-btn>                
                </v-layout>
                <v-layout>
                    <v-btn
                        variant="text"
                        v-if="isTitle"
                        class="button mx-auto"
                        @click="isTitle = false; changeColor()"
                        >はじめる
                    </v-btn>
                </v-layout>
            </v-container>
        </div>
    </div>  
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { openImgs } from '@/scripts/imgs';

const colorRgba = ref<string>("rgba(255,0, 255, 1)");
const textInput = ref<String>("");
const isTitle = ref<boolean>(true);

function start(){
    if(textInput.value == ""){
        alert("なまえをいれてください");
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
    background-color: rgb(255, 255, 255);
    justify-content: center;
    }
.main{ 
    background-image: url("@/imgs/opening.png");
    background-size: contain;
    background-repeat: no-repeat;
    height:90%; 
    aspect-ratio: 3/ 2;
    margin-top:3%;
    display: flex;
    align-items: center;
    background-color: rgb(0, 0, 0);
}

.overlay{
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
    width: 30%;
    margin-top:40%;
    background: rgb(0, 0, 0);
}
.startButton{
    border: 3px solid #ffffff;
    border-radius:10px;
    display: flex;
    width: 30%; 
    margin-top: 10%;
    background: rgb(0, 0, 0);
}
.textBox{
    width: 50%;
    background-color: rgb(0, 0, 0);
    border: 3px solid #ffffff;
}
.setText{
    display: grid;
}



</style>