<template>
    <v-card
        class="item"
        width="100"
        height="150"
    >
        <v-img class="mt-4" :src="props.image" cover/>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{image?: string}>();
</script>

<style lang="css" scoped>
.item {
    border-width: 3px;
    border-style: solid;
    border-color: rgb(255 255 255);
    border-radius: 8px;
}
</style>