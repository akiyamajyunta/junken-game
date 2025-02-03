<template>
    <div :style="{left: displayPosition.x +'%' ,top: displayPosition.y+'%'}" class="movingScreen">  
        <GameRevenge :enemyId="enemyId"/>
        <v-card  color="black" height="80%" width="80%">
            <div class="positionSet"></div>
                <upperLog/>
            <div class="positionSet"></div>
                <Gage :life="enStatus.getNormedHp()"/>
            <div class="flex justify-around" height="200">
                <div class="item">
                    <icon :Icon="actionIcon[myStatus.stance]"/>
                        <div class="positionSet"></div>
                    <nameLog :name="getSkill(getSkillId())['name']"/>
                </div>
                    <icon :Icon="hands[enSelection]"/>
                <v-cal :style="{position:'relative'}" >
                    <Icon :Icon="enemyImages[enemyId]"/>
                        <MovingDmg :dmg="myStatus.viewTakeDmg()" v-if="endmgDisplay" />
                    <div class="positionSet"></div>
                    <nameLog :name="enemyName[enemyId]"/>
                </v-cal>
            </div>
            <div class="flex justify-around mt-4" height="200">
                <v-cal :style="{position:'relative'}" >
                    <div>
                        <icon :Icon="me[0]"/>
                        <skillExplanation/>
                    </div>
                    <MovingDmg :dmg="enStatus.viewTakeDmg()" v-if="mydmgDisplay"/>
                        <div class="positionSet"></div>
                    <nameLog :name="name"/>
                </v-cal>
                    <icon :Icon="hands[mySelectionPhotoId]"/>
                <div class="item">
                    <v-cal>
                        <abilityButton v-model="myStatus"/>
                        <div class="abilityGage">
                                <img :src="keys[0]" alt="kye Image" class="kyesImgs" v-if=" myStatus.abilityPointStop"/>
                            <Gage :life="myStatus.abilityPoint"/>
                        </div>
                            <overdriveButton />
                    </v-cal>
                </div><!--位置調整用-->
            </div>
            <Gage :life="myStatus.getNormedHp()"/>
            <div class="actionSwitch">
                <v-cal>
                    <v-row
                        justify="center"
                        class="switch mt-8"
                        @click="pon(enemyId)"
                    >  
                        <junkenHand v-model="mySelection" />
                    </v-row>
                </v-cal>
            </div>
            <div>
                <underLog :underlog="underLogs.news"/>
            </div> 
        </v-card>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import Gage from '../commons/Gage.vue';
import MovingDmg from '../commons/MoveDmg.vue';
import GameRevenge from '../commons/GameRevenge.vue';
import skillExplanation from '../commons/skillExplanation.vue';

import Icon from '../commons/Icon.vue';
import junkenHand from './Butteon/junkenHand.vue';
import abilityButton from './Butteon/abilityButton.vue';
import overdriveButton from './Butteon/overdriveButton .vue';
import underLog from '../commons/underLog.vue';
import nameLog from '../commons/nameLog.vue';
import upperLog from '../commons/upperLog.vue';
import { mySelectionPhotoId } from './gameMaineLosic';
import { pon } from  '../ts/pon';

import { displayPosition  } from '../ts/move';
import { enemyImages, hands, actionIcon, me, keys} from '@/scripts/imgs';

import { getSkillId } from '../ts/skill';

import { mydmgDisplay,endmgDisplay, underLogs } from './gameMaineLosic';
import { getSkill } from '../ts/skill';

import { enemyName } from '../ts/log';
import {
    enSelection,
    mySelection,
    myStatus,
    enStatus,
} from './gameMaineLosic';
//import { upperLog } from '../ts/log';

const route = useRoute();
const name = String(route.query.name as string);
const enemyId = Number(route.query.enemyId as string);
underLogs.enemyId = enemyId

</script>

<style scoped>
.movingScreen{
position: relative;
transition: top 0.3s ease, left 0.3s ease;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
background-color: rgb(255, 255, 255);
}
.positionSet{
    height: 30px;
}
.item {
    width: 200px;
    height: 300px;
    top:10px;
}
.switch{
position: relative;
top :-50%;
width: 100%;
}
.text-color{
    font-family:  Century;
    color:rgb(255, 255, 255);
    -webkit-text-stroke: 3px black;
}
.actionSwitch{
padding-bottom:30px ;
}
.abilityGage{
    width: 300%;
    position: relative;
    top:30px;
    margin-left: -100%; 
    margin-right: -100%; 
    transform-origin: center; 
    justify-content: center;
    background-color: rgba(9, 9, 255, 0);
}
.kyesImgs{
    position: absolute;
    width: 10%;
    top: -60%;
    left: 45%;
    z-index: 100;
}
*{outline: solid 3px rgba(0, 255, 106, 0);}
</style>