<template>
    <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)',color:battelColor,fontSize: '30px' }" 
            class="text-center rounded-0">
                <a>{{battelReslut}}</a>
    </v-card>

</template>

<script setup lang="ts">
import { battelColor } from "../../ts/move";
import  {battelReslut}  from "../../ts/pon"
</script>

<style scoped>

</style>