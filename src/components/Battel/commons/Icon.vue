<template>
        <div class="Icons mt-6">
            <v-img :src="Icon" cover class="picturePosition  mt-3"/>
        </div>
</template>

<script setup lang="ts">
    const props = defineProps<{Icon: string[0]}>();
</script>





<style scoped>

.Icons {
    margin-top: 0%;
    width: 90%;
    height: 90%;
    border: 3px solid white;
    background-color: rgb(0, 0, 0);
    display: flex;
}
.picturePosition{
    background-color: black;
    width: 30%;
    height: 70%;
}
</style>
