<template>
    <v-card class="w-100 h-20 mt-10 bg-black" >
        <div class="setButton mt-4">
            <div class="explanation mt-n4 mx-auto">
                かまえ
            </div>
            <v-row class="justify-center h-10 mt-1">
                <v-btn class="Button"
                    :style="{background:colorAtkRgba}"
                    @click="toAtkStance();"
                    >ATK</v-btn>
                <v-btn class="Button"
                    :style="{background:colorDefRgba}" 
                    @click="toDefStance();"
                    >DEF</v-btn>
            </v-row>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Status } from '../../ts/type';
import { underLogs,myStatus } from '../gameMaineConstant';


const modelStatus = defineModel<Status>({required: true});
const colorAtkRgba = ref<string>(("rgba(255,0, 0)"))
const colorDefRgba = ref<string>(("rgba(0,0, 0)"))



function toAtkStance() {
    modelStatus.value.atkStance();
    underLogs.takeStand()
    changeColor()
}

function toDefStance() {
    modelStatus.value.defStance();
    underLogs.takeStand()
    changeColor()
}

function  changeColor(){
    if(myStatus.value.stance == 0){
    colorAtkRgba.value = "rgba(255, 0, 0)"
        colorDefRgba.value = "rgba(0, 0, 0)"
    }else if (myStatus.value.stance == 1){
        colorAtkRgba.value = "rgba(0, 0, 0)"
        colorDefRgba.value = "rgba(255, 0, 0)"
    }
}


</script>

<style scoped>
.setButton{
    background-color: rgb(0, 0, 0);
    position: relative;
    border: 2px solid white;
    border-radius: 10px;
    width: 100%;
    height: 70%;
}
.explanation{
    background-color: rgb(0, 0, 0);
    width: 50%;
    text-align: center;
    height: 50%;
    position: relative;
}
.Button{
    position: relative;
    display: flex;
    top:-20%;
    margin: 2%;
    font-size: 10px;
    border-radius: 10px;
    border: 2px solid white;
    z-index: 1000;
}
</style>




