<template>
    <div class="setPosition">
        <v-card class="item">
            <a class="word">{{ props.lowLogs }}</a>
        </v-card> 
    </div>

</template>


<script setup lang="ts">


const props = defineProps<{lowLogs: string}>();



</script>


<style scoped>
.setPosition{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    }

.item {
    width: 90%;
    height: 80px;
    border: 5px solid white;
    border-radius: 8px;
    background: black;
}
.word{
    height: 100%;
    display: flex;
    font-size: 30px;
}
</style>