<template>
    <div class="setPosition">   
        <v-card class="backGage">
            <v-card :style="{ width:life+'%'}"  class="gage"></v-card>
        </v-card>
    </div>
</template>

<script setup lang="ts">

defineProps<{life: number}>();

</script>




<style scoped>
.setPosition{
width: 100%;
display: flex;
justify-content: center;
}
.backGage{
height: 30px;
border: 3px solid rgb(255, 255, 255);
background :rgb(0, 0, 0);
width: 30%;
border-Radius: 15px; 
}
.gage{
transition: width 0.5s ease;
height: 100%;
border-Radius: 15px; 
background-color:  rgb(255, 109, 25);
}




</style>