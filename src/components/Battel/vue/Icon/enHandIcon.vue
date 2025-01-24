<template>
    <v-card :style="{ border: '3px solid black', borderRadius: '8px',}" color="white" class="item mt-16">
        <v-img :src="hands[enSelection]" cover/>
    </v-card>
</template>


<script setup lang="ts">
    // const props = defineProps<{Icon: number}>();
    import { hands } from '@/scripts/imgs';
    import { enSelection } from '../../ts/charaStususSelection';
</script>