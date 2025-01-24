<template>
    <v-card :style="{width:100 +'%',  transition: 'width 0.5s ease', height:'10px', border:'1px solid white'}" color="black">
        <v-card :style="{width:((gage.enLife/getEnStatus.maxHp)*100)+'%',  transition: 'width 0.5s ease', height:'10px' }" color="red"></v-card>
 
    </v-card>

</template>

<script setup lang="ts">

import { getEnStatus } from '../../ts/stasus';
import { gage } from '../../ts/record';
</script>