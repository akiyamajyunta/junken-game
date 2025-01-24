<template>
    <v-row  justify="center" class="switch block mt-8"  width="15px" >
        <v-btn color="primary" @click="model=0">ATK </v-btn>
        <v-btn color="primary" @click="model=1">DEF</v-btn> 
    </v-row>
</template>

<script setup lang="ts">
const model = defineModel<number>({required: true});
</script>

<style lang="css" scoped>


</style>