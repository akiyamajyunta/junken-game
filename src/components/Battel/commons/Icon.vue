<template>
        <v-card class="item mt-16">
            <v-img :src="Icon" cover class="picturePosition"/>
        </v-card>
</template>

<script setup lang="ts">
    const props = defineProps<{Icon: string[0]}>();
</script>





<style scoped>

.item {
    width: 250px;
    height: 300px;
    border: 5px solid white;
    background-color: rgb(0, 0, 0);
    display: flex;
}
.picturePosition{
    justify-content: center;
    align-items: center;
    margin-top: 30%;
    height: 65%;
}
</style>
display: flex;
justify-content: center;
align-items: center;