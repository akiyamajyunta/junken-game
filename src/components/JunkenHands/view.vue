<template>
    <v-btn class="mx-2" @click="model=0">グー</v-btn>
    <v-btn class="mx-2" @click="model=1">チョキ</v-btn>
    <v-btn class="mx-2" @click="model=2">パー</v-btn>
</template>

<script setup lang="ts">
const model = defineModel<number>({required: true});
</script>