<template>
    <div class="positionSetTopOrBttom"></div>
    <div :style="{left: displayPositionX +'%' ,top:displayPositionY+'%'}" class="movingScreen">  
        <gameFinish/>
        <v-card  color="black" height="80%" width="80%">
            <div class="positionSetTopOrBttom"></div>
                <upperLog/>
                <div class="positionSetTopOrBttom"></div>
                    <lifeGage :life="gage.enLife"/>
                    <gage :life="10"/>
                    <div class="flex justify-around" height="200">
                        <div class="item">
                            <pictures :Icon="actionIcon[abilitySelection]"/>
                            <div class="positionSetTopOrBttom"></div>
                            <nameLog :name="skill.name"/>
                        </div>
                            <pictures :Icon="hands[enSelection]"/>
                        <v-cal :style="{position:'relative'}" >
                            <pictures :Icon="enemyImages[enemyId]"/>
                            <movingDmg :dmg="myAttack"/>
                            <div class="positionSetTopOrBttom"></div>
                            <nameLog :name="enemyName[enemyId]"/>
                        </v-cal>
                    </div>
                        <div class="flex justify-around mt-4" height="200">
                            <v-cal :style="{position:'relative'}" >
                                <pictures :Icon="me[0]"/>
                                <movingDmg :dmg="enAttack"/>
                                <div class="positionSetTopOrBttom"></div>
                                <nameLog :name="name"/>
                            </v-cal>
                                <pictures :Icon="hands[mySelection]"/>
                            <div class="item">
                                <v-cal>
                                    <abilityButton v-model="abilitySelection" @click="ability"/> 
                                    <div class="abilityGage">
                                        <lifeGage :life="gage.ability"/>
                                    </div>    
                                        <overdriveButton  @click="usingSkill(enemyId)"/>
                                </v-cal>
                            </div><!--位置調整用-->
                        </div>
                        <lifeGage :life="gage.myLfe"/>
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
                        <div >
                            <underLog :lowLogs="lowLogs.news"/>
                        </div> 
                        <div class="positionSetTopOrBttom"></div>
        </v-card>
    </div>
  
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { pon } from  '../ts/pon';
import { ability } from '../ts/abillity';
import { usingSkill } from '../ts/abillity';
import { mySelection,abilitySelection,} from '../ts/gameBasicsLogic'
import { displayPositionX,displayPositionY } from './movingDmg/movingDmg';
import junkenHand from './Butteon/junkenHand.vue';
import abilityButton from './Butteon/abilityButton.vue';
import overdriveButton from './Butteon/overdriveButton .vue';
import lifeGage from './gage'
import pictures from './Icon'
import { gage } from '../ts/record';
import { enemyImages ,hands,actionIcon,me} from '@/scripts/imgs';
import { enSelection } from '../ts/charaSelection';
import movingDmg from './movingDmg'
import { myAttack,enAttack } from '../ts/status';
import upperLog from './upperLog'
import nameLog from './nameLog'
import { enemyName } from './nameLog/name';
import underLog from './underLog'
import { skill } from './nameLog/name';
import gameFinish from './gameFinish';
import s from './underLog'

const route = useRoute();
const name = String(route.query.name as string);
const enemyId = Number(route.query.enemyId as string);
const lowLogs  = new s(enemyId);


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
.positionSetTopOrBttom{
    height: 30px;
    background-color: rgba(255, 255, 255, 0);
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
*{outline: solid 3px rgba(0, 232, 93, 0);}
</style>