<template>
    <div class="setPosition">
        <div class="main">
            <div :style="{left: displayPosition.x +'%' ,top: displayPosition.y+'%'}" class="movingScreen">  
                <v-card class="displayCard">
                    <GameRevenge :enemyId="enemyId"/>
                    <upperLog/>
                    <Gage :life="enStatus.getNormedHp()" class="relative top-[8%]"/> 
                    <div class="flex justify-around relative">
                        <div>
                            <div class="Icon flex justify-around">
                                <icon :Icon="actionIcon[myStatus.stance]" />
                            </div>
                            <nameLog :name="getSkill(getSkillId())['name']" class="relative top-[10%]"/>
                        </div>
                            <div class="handIcon flex justify-around">
                                <icon :Icon="hands[enSelection]" class="relative top-[45%]"/>
                            </div>
                        <v-cal :style="{position:'relative'}">
                            <div class=" Icon flex justify-around">
                                <Icon :Icon="enemyImages[enemyId]"/>
                                <MovingDmg :dmg="myStatus.viewTakeDmg()" v-if="endmgDisplay" />
                            </div>
                            <nameLog :name="enemyName[enemyId]" class="relative top-[10%]"/>
                        </v-cal>
                    </div>
                    <div class="flex justify-around relative top-[5%]" ><!--下段-->
                        <v-cal :style="{position:'relative'}" >
                            <div>
                                <div class="Icon flex justify-around">
                                    <icon :Icon="me[0]"/>
                                    <MovingDmg :dmg="enStatus.viewTakeDmg()" v-if="mydmgDisplay"/>
                                </div>
                                <skillExplanation/>
                            </div>
                            <nameLog :name="name" class="relative top-[10%]"/>
                        </v-cal>
                        <div class="handIcon flex justify-around -mt-5">
                            <icon :Icon="hands[SendHands(mySelection)]" class="relative -top-[30%]"/>
                        </div>
                        <div class="Icon flex justify-around">
                            <div class="AbilitySpace -mt-10">
                                <abilityButton v-model="myStatus"/>
                                <div class="abilityGage">
                                    <img :src="keys[0]" alt="kye Image" class="kyesImgs" v-if=" myStatus.abilityPointStop"/>
                                    <Gage :life="myStatus.abilityPoint"/>
                                </div>
                                <overdriveButton/>   
                            </div>
                        </div>
                    </div>               
                    <Gage :life="myStatus.getNormedHp()" class="relative bottom-[5%]"/>
                    <div class="flex justify-center relative bottom-[10%]">
                        <v-row
                            justify="center"
                            class="mt-1"
                            @click="pon(enemyId)"
                        >  
                            <junkenHand v-model="mySelection" />
                        </v-row>
                    </div>
                    <underLog :underlog="underLogs.news" class="relative bottom-[15%]"/>
                </v-card>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Gage from '../commons/Gage.vue';
import MovingDmg from '../commons/MoveDmg.vue';
import GameRevenge from '../commons/GameRevenge.vue';
import skillExplanation from '../commons/skillExplanation.vue';
import Icon from '../commons/Icon.vue';
import junkenHand from './Button/junkenHand.vue';
import abilityButton from './Button/abilityButton.vue';
import overdriveButton from './Button/overdriveButton .vue';
import underLog from '../commons/underLog.vue';
import nameLog from '../commons/nameLog.vue';
import upperLog from '../commons/upperLog.vue';


import { pon } from  '../ts/pon';

import { displayPosition  } from '../ts/move';
import { enemyImages, hands, actionIcon, me, keys} from '@/scripts/imgs';

import { getSkillId, getSkill } from '../ts/skill';

import { enemyName } from '../ts/log';
import {
    mydmgDisplay,
    endmgDisplay, 
    underLogs,
    enSelection,
    mySelection,
    myStatus,
    enStatus,
} from './gameMaineConstant';

import { SendHands } from '../ts/logic';

const route = useRoute();
const name = String(route.query.name as string);
const enemyId = Number(route.query.enemyId as string);
underLogs.enemyId = enemyId

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
    height:90%; 
    aspect-ratio: 3/ 2;
    display: flex;
}
.Icon{
    width: 100px;
    height: 130px;
    position: relative;  
}
.handIcon{
    width: 70px;
    height: 100px
}
.AbilitySpace{
    width: 150px;
    height: 150px;
    position: absolute;
}
.movingScreen{
    position: relative;
    width: 100%;
    transition: top 0.3s ease, left 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
}
.displayCard{
    width: 100%;
    height: 99%;
    background-color: black;
}
.positionSet{
    height: 10px;
}
.abilityGage{
    width: 300%;
    position: relative;
    margin-left: -100%; 
    margin-right: -100%; 
    transform-origin: center; 
    justify-content: center;
}
.kyesImgs{
    position: absolute;
    width: 8%;
    top: -40%;
    left: 46%;
    z-index: 100;
}
*{outline: solid 3px rgba(0, 255, 106, 0);}
</style>