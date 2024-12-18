<template>
    <v-card class="text-center rounded-0">
    <a>{{ result }}</a>
    </v-card>
    <v-card width="150">
        <v-card>
            <a>{{"勝利数:"+ win }}</a>
        </v-card>
        <v-card>
            <a>{{ "負数:" + lose }}</a>
        </v-card>
        <v-card>
            <a>{{ "引き分け数:" + drown }}</a>
        </v-card>
    </v-card >
        <v-card width="100" height="150" class="enemyicon">
            <div v-if="enemyIcon == 0 ">
                <v-img src="@/imgs/inu.png" width="100" height="100"></v-img>
            </div>
            <div v-if="enemyIcon == 1 ">
                <v-img src="@/imgs/zunda_mochi.png" width="100" height="100"></v-img>
            </div>
            <div v-if="enemyIcon == 2 ">
                <v-img src="@/imgs/gandhi.png" width="100" height="100"></v-img>
            </div>
            <div v-if="enemyIcon == 3 ">
                <v-img src="@/imgs/character_cthulhu_azathoth.png" width="100" height="100"></v-img>
            </div>
        </v-card>
    <div class="Aria">
        <v-card width="100" height="150" >
            <div v-if="enemyResult == 0 ">
                <v-img src="@/imgs/janken_gu.png" width="100" height="100" ></v-img>
            </div>
            <div v-if="enemyResult == 1 ">
                <v-img src="@/imgs/janken_choki.png" width="100" height="100" ></v-img>
            </div>
            <div v-if="enemyResult == 2 ">
                <v-img src="@/imgs/janken_pa.png" width="100" height="100" ></v-img>
            </div>
        </v-card>
        <v-card width="100" height="150" >
            <div v-if="mySend == 0 ">
                <v-img src="@/imgs/janken_gu.png" width="100" height="100" ></v-img>
            </div>
            <div v-if="mySend == 1 ">
                <v-img src="@/imgs/janken_choki.png" width="100" height="100" ></v-img>
            </div>
            <div v-if="mySend == 2 ">
                <v-img src="@/imgs/janken_pa.png" width="100" height="100" ></v-img>
            </div>
        </v-card>
    </div>
    <v-row justify="center" class="switch" @click="enemySend">
        <v-btn color="primary" @click="mySend = 0">グー </v-btn>
        <v-btn color="primary" @click="mySend = 1">チョキ</v-btn>
        <v-btn color="primary" @click="mySend = 2">パー</v-btn>
    </v-row>
    <v-card width="100" height="150" class="myicon">
        <v-img src="@/imgs/kid_seikaku_kachiki_boy.png" width="100" height="100"></v-img>
    </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const enemyId = Number(route.query.enemyId as string);

const mySend = ref<number>(0);
const result = ref<string>("最初はグー");
const enemyResult  = ref<number>(0);
const enemyIcon = ref<number>(enemyId);

const win = ref(0);
const lose = ref(0);
const drown = ref(0);

function enemySend () {
    const enemy = Math.floor(Math.random() * 3);
    enemyResult.value = enemy;
    console.log("tekiwa: ", enemy);
    console.log("mySend: ", mySend.value);

    if (
        (mySend.value == 0 && enemy == 0) ||
        (mySend.value == 1 && enemy == 1) ||
        (mySend.value == 2 && enemy == 2) ){
        result.value = "あいこ";
        drown.value += 1;
    } else if (
        (mySend.value == 0 && enemy == 2) ||
        (mySend.value == 1 && enemy == 0) ||
        (mySend.value == 2 && enemy == 1) ){
        result.value   = "まけ";
        lose.value += 1;
    } else {
        result.value  = "かち";
        win.value += 1;
    };           
}

</script>

<style>
.switch{
    position: relative;
    top:0%;
}

.enemyicon{
    position: relative;
    top:5%;
    left:70%;
}

.myicon{
    position: relative;
    top:-30%;
    left:5%;
}

.Aria{
    position: relative;
    top:-10%;
    display: grid;
    justify-content: center;
}
</style>