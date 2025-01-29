<template>
    <div class="setPosition">
        <div class="position-Box"></div>
        <v-card class="item">
            <p class="word-Position">{{name}}</p>
        </v-card> 
    </div>
</template>


<script setup lang="ts">



defineProps<{name: string}>();
</script>

<style scoped>
.setPosition{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    }

.item {
    margin-top: 5%;
    width: 100%;
    height: 80%;
    border: 5px solid white;
    border-radius: 8px;
    background: black;
}
.word-Position{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
</style>