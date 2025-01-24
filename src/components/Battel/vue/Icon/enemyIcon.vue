<template>
    <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
        <v-img :src="enemyImages[enemyId]" cover/>
    </v-card>
    <v-card :style="{border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" class="text-center">
        <p>{{name}}</p>
    </v-card>
    <div :style="{top:enMoving.topPosition+'%' ,
                    position: 'absolute',
                    zIndex:'1000',
                    fontSize:enMoving.fontSize+'px', 
                    transition: 'top 0.3s ease',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '100%'
    }">
        <p class="text-color">{{enMoving.dmgResult}}</p>
    </div>
</template>


<script setup lang="ts">
 //const props = defineProps<{Icon: number}>();

import { enemyImages } from '@/scripts/imgs';
import { enMoving } from '../../ts/move';
import { sendEnemyname } from '../../ts/name';

const props = defineProps<{enemyId: number}>();

const enemyId = props.enemyId
const name = sendEnemyname(enemyId)

</script>



<style scoped>
.item {
    width: 100px;
    height: 150px;

}

.text-color{
    font-family:  Century;
    color:rgb(255, 255, 255);
    -webkit-text-stroke: 3px black;
}
</style>