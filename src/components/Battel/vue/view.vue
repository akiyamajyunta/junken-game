<template>
    <div :style="{position:'relative',left: displayPositionX +'%' ,top:displayPositionY+'%' ,transition: 'top 0.3s ease , left 0.3s ease'}" class="flex justify-center items-center">  
        <v-card  color="green" height="80%" width="80%">
                <battelResult/>
                    <enGage/>
                    <result/>
                    <div class="flex justify-around" height="200">
                        <div class="item">
                            <abilityIcon/>
                        </div>
                            <enHandIcon /><!---敵のハンドアイコン-->
                        <v-cal :style="{position:'relative'}" >
                            <enemyIcon :enemyId="enemyId" /> 
                        </v-cal>
                    </div>
                        <div class="flex justify-around mt-4" height="200">
                            <v-cal :style="{position:'relative'}" >
                                <myIcon :name="name"/>
                            </v-cal>
                                <myHandIcon/><!--自分の手札-->
                            <div class="item"></div><!--位置調整用-->
                        </div>
                      
                            <div class="actionSwitch">
                                <abilityButton v-model="abilitySelection"  @click="abillity"/> 
                                <v-cal>
                                    <v-row
                                        justify="center"
                                        class="switch mt-8"
                                        @click="pon(enemyId)"
                                    >  
                                        <junkenHand v-model="mySelection" />
                                    </v-row>
                              <OverdriveBUtton  @click="usingSkill(enemyId)"/>
                                </v-cal>
                            </div>
                            <div >
                                <myGage />
                                <battelLog :log="log"/>
                            </div> 
                       
        </v-card>
    </div>
  
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { pon } from  '../ts/pon';
import { abillity } from '../ts/abillity';
import { usingSkill } from '../ts/abillity';
import { mySelection,abilitySelection,} from '../ts/gameBasicsLogic'
import myGage from './log/myGage.vue';
import enGage from './log/enGage.vue';
import result from './log/result.vue';
import myIcon from './Icon/myIcon.vue';
import { displayPositionX,displayPositionY } from '../ts/move';
import battelLog from './log/battelLog.vue';
import enHandIcon from './Icon/enHandIcon.vue';
import myHandIcon from './Icon/myHandIcon.vue';
import abilityIcon from './Icon/abilityIcon.vue';
import battelResult from './log/battelResult.vue';
import junkenHand from './Butteon/junkenHand.vue';
import enemyIcon from './Icon/enemyIcon.vue';
import abilityButton from './Butteon/abilityButton.vue';
import OverdriveBUtton from './Butteon/OverdriveButton .vue';
import { log } from '../ts/log';
import { sendEnemyname } from '../ts/name';

const route = useRoute();
const name = String(route.query.name as string);
const enemyId = Number(route.query.enemyId as string);
        log.value = String(sendEnemyname(enemyId)+"が現れた")
</script>

<style scoped>
.item {
    width: 100px;
    height: 150px;
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

*{outline: solid 3px rgba(0, 232, 93, 0);}
</style>