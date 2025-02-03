<template>
    <div :style="{top: MovingDmg.topPosition+'%',fontSize: MovingDmg.fontSize+'px',}" class="fontPosition">
        <p class="text-color">{{props.dmg}} </p>
    </div>
</template>

<script setup lang="ts">
import { MovingDmg } from '../ts/move';

const props = defineProps<{dmg: number}>();
</script>

<style scoped>
.item {
    width: 100px;
    height: 150px;
}
.fontPosition{
position: absolute;
transition: top 0.3s ease;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
z-index: 1000;
}
.text-color{
    font-family:Century;
    color:rgb(255, 255, 255);
}
.color{
background-color: aqua;
width: 100px;
height: 500px;
}
</style>