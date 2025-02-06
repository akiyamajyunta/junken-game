<template>
    <div class="flex justify-center h-100">
        <v-card class="item">
            <a class="word">{{ props.underlog }}</a>
        </v-card> 
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{underlog:string}>();



</script>

<style scoped>
.item {
    position: relative;
    width: 80%;
    height: 80px;
    border: 3px solid white;
    border-radius: 8px;
    background: black;
    top:20%;
}
.word{
    height: 100%;
    display: flex;
    font-size: 20px;
}
</style>