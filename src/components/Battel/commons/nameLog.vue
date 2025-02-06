<template>
    <div class="flex justify-center mt-2">
        <div class="nameSpace">
            <p class=" word-Position flex justify-center">{{name}}</p>
        </div> 
    </div>
</template>


<script setup lang="ts">
defineProps<{name: string}>();
</script>

<style scoped>
.nameSpace{
    width: 100%;
    aspect-ratio: 7 / 2;
    border: 2px solid white;
    border-radius: 8px;
    background: rgb(0, 0, 0);
}
.word-Position{
    height: 100%;
    align-items: center;
    font-size: 10px;
}
</style>