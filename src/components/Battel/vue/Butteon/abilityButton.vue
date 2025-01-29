<template>
    <div class="uu">
        <div class="wordSetPosition">
            <a class="explanation">かまえ</a>
        </div>
        <div class="setPosition">
            <v-row  justify="center" width="15px">
                <v-card class="equipment">
                    <div class="setPositionSub">
                        <v-btn :style="{background:colorAtkRgba}" class="button" 
                            @click="model= 0 ; changeColor();">ATK 
                        </v-btn>
                        <v-btn :style="{background:colorDefRgba}" class="button" 
                            @click="model=1 ; changeColor();">DEF</v-btn> 
                    </div>
                </v-card>
            </v-row>

        </div>
    </div>
</template>
@click="isTitle = false; changeColor()"
<script setup lang="ts">
import { ref } from 'vue';
import { abilitySelection } from '../gameMaineLosic';

const model = defineModel<number>({required: true});

const colorAtkRgba = ref<string>(("rgba(255,0, 0)"))
const colorDefRgba = ref<string>(("rgba(0,0, 0)"))

    function changeColor(){
    if (abilitySelection.value == 0){
        colorAtkRgba.value = "rgba(255, 0, 0)"
        colorDefRgba.value = "rgba(0, 0, 0)"
    }else if (abilitySelection.value == 1){
        colorAtkRgba.value = "rgba(0, 0, 0)"
        colorDefRgba.value = "rgba(255, 0, 0)"
    }
}



</script>

<style lang="css" scoped>


</style>


<style scoped>
.uu{
    margin-top: 100px;
    justify-content: center;
    z-index: 100;
}
.setPosition{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 150px;
}
.setPositionSub{
    margin-top: 10%;
    padding-top:10px ;
    width: 100%;
    display: flex;
    justify-content: center;
}
.equipment{
    display: flex;
    background-color: rgb(4, 4, 4);
    margin: 10px;
    border-radius: 20px;
    border: 5px solid white;
}

.explanation{
    position: relative;
    top:50%;
    display: flex; 
    background-color: rgb(0, 0, 0);
    width: 80%;
    text-align: center;
    justify-content: center;
    z-index: 100;
    font-size: 30px;
}
.wordSetPosition{
    width: 100%;
    display: flex;
    justify-content: center;
    height: 30px;
    background-color: rgba(250, 235, 215, 0);
}
.item {
        display: flex;
        justify-content: center;
}
.button{
        display: flex;
        margin: 0%;
        width: 45%;
        height: 90%;
        font-size: 30px;
        border-radius: 20px;
        border: 5px solid white;
        background-color: black;
       
}
</style>