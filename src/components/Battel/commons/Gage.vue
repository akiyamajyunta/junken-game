<template>
    <div class="flex justify-center">   
        <v-card class="backGage">
            <v-card :style="{ width:life+'%'}"  class="gage"></v-card>
        </v-card>
    </div>
</template>

<script setup lang="ts">
defineProps<{life: number}>();

</script>
<style scoped>
.backGage{
height: 20px;
background :rgb(0, 0, 0);
width: 30%;
border-Radius: 15px; 
border: 3px solid rgb(255, 255, 255);
}
.gage{
transition: width 0.5s ease;
height: 100%;
border-Radius: 15px; 
background-color:  rgb(255, 109, 25);
}
</style>