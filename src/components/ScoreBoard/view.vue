<template>
    <div class="mx-8 my-2">
        <p>Win: {{ results.win }}</p>
        <p>Lose: {{ results.lose }}</p>
        <p>Draw: {{ results.draw }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    results: {
        win: number,
        lose: number,
        draw: number
    }
}>();

</script>