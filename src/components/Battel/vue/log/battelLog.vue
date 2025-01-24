<template>
    <v-card :style="{border: '3px solid white', borderRadius: '8px',background: 'rgb(0, 0, 255)'}" height="80">
        <a>{{log}}</a>
    </v-card> 
</template>


<script setup lang="ts">

const props = defineProps<{log: string}>();



</script>