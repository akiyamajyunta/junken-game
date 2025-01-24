<template>
    <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
        <v-img :src="me[0]" cover/>
    </v-card>
    <v-card :style="{border: '3px solid white', borderRadius: '8px' ,background: 'rgb(0, 0, 255)'}" class="text-center">
        <p>{{name}}</p>
    </v-card>
    <div :style="{top:myMoving.topPosition+'%' ,
    position: 'absolute',
    zIndex:'1000',
    fontSize:myMoving.fontSize+'px', 
    transition: 'top 0.3s ease',
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%'
}">
<p class="text-color">{{myMoving.dmgResult}}</p>
</div>


</template>

<script setup lang="ts">
import { me } from '@/scripts/imgs';
import { myMoving } from '../../ts/move';

const props = defineProps<{name: string}>();
const name = props.name

//const name = "山田太郎"
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