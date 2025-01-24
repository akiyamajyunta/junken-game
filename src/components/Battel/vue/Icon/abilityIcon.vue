<template>
    <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
        <v-img :src="actionIcon[abilitySelection]" cover/><!--攻撃or防御-->
    </v-card>
    <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
        <v-card :style="{width: gage.ability+'%',  transition: 'width 0.5s ease', height:'10px' }" color="red"></v-card>
    </v-card>
    <v-card :style="{border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" class="text-center">
        <p>{{ultimateSkillname(abilitySelection, gage.ability)}}</p>
    </v-card> 
</template>


<script setup lang="ts">
import { abilitySelection } from '../../ts/gameBasicsLogic'
import { actionIcon } from '@/scripts/imgs';
import { gage } from '../../ts/record';
import { ultimateSkillname } from '../../ts/name';
</script>

<style scoped>
.item {
    width: 100px;
    height: 150px;
}
</style>