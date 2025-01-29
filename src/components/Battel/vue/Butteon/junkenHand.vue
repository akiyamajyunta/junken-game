<template>
        <div class="setPosition">   
                <div class="item">
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
.setPosition{
        z-index: 10;
        width: 100%;
        display: flex;
        justify-content: center;
        }
.item {
        display: flex;
        justify-content: center;
        background-color: rgba(0, 255, 255, 0);
}
.button{
        display: flex;
        width: 100px;
        height: 100px;
        font-size: 50px;
        margin: 10px;
        border-radius: 20px;
        border: 5px solid white;
        background-color: black;


}
</style>