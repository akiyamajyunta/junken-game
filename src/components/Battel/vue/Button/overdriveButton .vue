<template>
    <div class="buttonPosition mx-auto  mt-3 pt-5 pb-3">
            <v-btn class="button my-n3 mx-auto" @click="abillityPointChargeChange()">{{btnText}}</v-btn>
            <v-btn class="button mx-auto" @click="useSkill()">Skill</v-btn>
    </div>
</template>   
<script setup lang="ts">
import { useSkill } from '../../ts/pon';
import { myStatus,btnText } from '../gameMaineConstant';


function abillityPointChargeChange(){
    if (btnText.value == "Gage Stop"){ 
        btnText.value = "Gage open"
        myStatus.value.abilityPointStop = true 
    } else {
        btnText.value = "Gage Stop"
        myStatus.value.abilityPointStop = false
    };
}

</script>

<style scoped>
.buttonPosition{
    border: 3px solid white;
    background-color: rgb(0, 0, 0);
    border-radius: 10px;
    width: 80%;
}
.button{
    width: 70%;
    display: flex;
    font-size: 10px;
    margin-top: 20%;
    border-radius: 10px;
    border: 3px solid white;
    background-color: rgb(0, 0, 0);
    z-index: 1000;
}
</style>