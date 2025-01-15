<template>
    <div class="mx-8 my-2 text-2xl">
        <p>Win: {{ results.win }}</p>
        <p>Lose: {{ results.lose }}</p>
        <p>Draw: {{ results.draw }}</p>
    </div>
</template>

<script setup lang="ts">
import { ResultHistory } from '@/scripts/types';

defineProps<{results: ResultHistory}>();

</script>