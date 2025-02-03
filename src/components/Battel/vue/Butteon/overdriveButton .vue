<template>
    <div class="setPosition">
    <div>
        <v-row justify="center" class="switch mt-8" width="100">
            <v-btn class="Stopbutton" @click="abillityPointCargeChange()">{{btnText}} </v-btn>
        </v-row> 
        <v-icon>key-outline</v-icon> 
        <v-row justify="center" class="switch mt-8" width="100">
            <v-btn class="SkillButton" @click="useSkill()">Skill</v-btn>
            <!-- <img src="keys[0]"> -->
      
        </v-row> 
    </div>
</div>

</template>   
<script setup lang="ts">
import { ref } from 'vue';
import { mdiAccount } from '@mdi/js'
import { keys,hands } from '@/scripts/imgs';


import { useSkill } from '../../ts/pon';
import { myStatus,btnText } from '../gameMaineLosic';




function abillityPointCargeChange(){
    if (btnText.value == "Stop"){ 
        btnText.value = "GO"
        myStatus.value.abilityPointStop = true 
    } else {
        btnText.value = "Stop"
        myStatus.value.abilityPointStop = false
    };
}

</script>

<style scoped>
.setPosition{
    width: 100%;
    display: flex;
    justify-content: center;
    }
.Stopbutton{
    display: flex;
    width: 100%;
    height: 100px;
    font-size: 50px;
    margin: 10px;
    border-radius: 20px;
    border: 5px solid white;
    background-color: rgb(0, 0, 0);
    z-index: 100;
}
.SkillButton{
    display: flex;
    width: 100%;
    height: 100px;
    font-size: 50px;
    margin: 10px;
    border-radius: 20px;
    border: 5px solid white;
    background-color: rgb(0, 0, 0);
    z-index: 100;
}

</style>