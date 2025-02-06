<template>
    <div class="flex justify-center h-100">   
        <div class="buttonSpace flex justify-center">
            <v-btn class="button" @click="model=0">✊ </v-btn>
            <v-btn class="button" @click="model=1">✌</v-btn>
            <v-btn class="button" @click="model=2">✋</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
const model = defineModel<number>({required: true});
</script>




<style scoped>
.buttonSpace{
        position: relative;
        width: 100%;
        height: 80px;
        top: 60%;
}
.button{
        width: 20%;
        height: 70%;
        font-size: 30px;
        margin: 10px;
        border-radius: 20px;
        border: 3px solid white;
        background-color: black;
        z-index: 1000;
}
</style>