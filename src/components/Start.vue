<template>
        <div class="main flex justify-center">  
            <v-card :style="{'background':'rgba(255,0,0,0.5)'}" width="100%" 
                    class="curtain flex justify-center align-center">
                <div class="flex justify-center flex-column items-center" >
                    <v-btn :style="{display:'Transmittance_newgame', 
                            'background-color': 'rgba(255, 0, 0, 100)',
                            zIndex:100,
                            width:'30%',
                            position:'relative',
                            margin:'400px'}" 
                            color="primary"
                            class="flex justify-center" 
                            @click="New_game">Let's_play()
                    </v-btn>
                    <v-cal :style="{display:'grid'}" class="name_space flex justify-center items-center" >
                        <v-card class="textBox" color="blue">
                            <input type="text" v-model="textInput" title="your name"
                            :style="{ width: '1500px', height: '50px' }" color="black">
                        </v-card>
                        <div :style="{width:'100%'}" class="flex justify-center items-center">
                            <v-btn class="switch flex justify-center items-center" color="primary" @click="Start">
                                game start 
                            </v-btn>
                        </div>
                    </v-cal>     
                </div> 
            </v-card>  
        </div>
</template>
<!-- display:none; -->

<script setup lang="ts">
import { ref } from 'vue';

const Transmittance_start = ref<string>("none")
const Transmittance_newgame = ref<string>("grid")

const textInput = ref<String>("");

function New_game(){
    alert("aaa")
    Transmittance_start.value = "grid"
    Transmittance_newgame.value = "none"
}

function Start(){
    if(textInput.value == ""){
        alert("you must input name");
    }else if((textInput.value).length > 6){
        alert("文字数が多すぎます");}
    else{
        window.location.href = `http://localhost:3000/select?name=${textInput.value}`;
    }
}



</script>

<style>
.main {
    background-image: url("@/imgs/hand_game.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    background-size: contain;
    background-position: center;
    height: 1000px;

}

.curtain{
position:absolute;
width: 100px;
}
.name_space{
position: relative;
margin-top:-600px;
width:50%;
display: grid;
justify-content: center;
}
.textBox{
    position:absolute;
    margin-bottom:0%;
}
.switch{
    position:absolute;
    margin-top:50%;
    width: 50%;
}
</style>









