<template>
<v-app>
<div class="flex justify-center">
    <div class="vd" >
        <a>{{ endingResult}}</a>
    </div>
</div>
</v-app>

</template>



<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const endingResult = String(route.query.endingResult as string);

</script>

<style>
.vd{
position: relative;
font-size: 100px;
z-index: 100;


}


</style>