<template>
    <div class="main flex justify-center">
        <div>
            <v-card class="textBox flex justify-center" color="black">
                <v-text-field
                    v-model="name"
                    color="white"
                    label="input your name"
                    :rules="[required]"
                />
            </v-card>

            <v-btn class="switch" color="primary" @click="start">game start</v-btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>("");

function start() {
    window.location.href = `http://localhost:3000/select?name=${name.value}`;
}

function required(value: string) {
    return !!value || 'Field is required'
};

</script>

<style>
.main {
    background-image: url("@/imgs/title.png");
    position: relative;
    background-size: contain;
    background-position: center;
    height: 100%;

}
.textBox{
    position:absolute;
    margin-bottom:0%;
}

.switch{
    position:absolute;
    margin-top:350%;
}
</style>