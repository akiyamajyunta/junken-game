<template>
    <div class="flex justify-center">
        <v-card class="openExplanation" @mouseover="IconHover">
        </v-card>
        <v-card class="Explanation" v-if="situation"  @mouseleave="Iconleave">
            <div class="grid mt-2 ml-2">
                <p class="word flex justify-center text-body-2">-状況確認-</p>
                <p class="line justify-center"></p>
                <p class="word">{{"・" + stance[myStatus.stance].name}}</p> <!--構えを記入-->
                <p class="word">{{"・" + stance[myStatus.stance].explanation }}</p><!--構えによりかかるバフとデバフ -->
                <p class="word" v-if="myStatus.buff.limit > 0" >{{"・" + myStatus.buff.limit + "ターン" + myStatus.buff.explanation}}</p> <!-- スキルによりかかってるバフとデバフ -->
                <p class="word flex justify-center text-body-2">-使えるスキル-</p>
                <p class="line justify-center"></p>
                <p class="word" v-if="getSkillId() !== 0">{{"・" + getSkill(getSkillId()).name}}</p><!--現在使えるスキルを表示、使えなければ表示しない-->
                <p class="word">{{"・" + getSkill(getSkillId()).explanation}}</p><!--そのスキルの効果-->
            </div>
        </v-card>
    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getSkillId, getSkill, stance } from '../ts/skill';
import { myStatus } from '../vue/gameMaineConstant';

const situation = ref<boolean>(false)

function IconHover(){
    situation.value = true
}
function Iconleave(){
    situation.value = false

}
</script>

<style scoped>

.openExplanation{
    position: absolute;
    top:15%;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 70%;   
    z-index: 1000; 
}
.Explanation{
    position: absolute;
    top:5%;
    left:90%;
    background-color: rgb(0, 0, 0);
    width: 300%;
    height: 100%;    
    overflow: visible; 
    border-Radius: 15px; 
    border: 3px solid rgb(255, 255, 255);
    z-index: 1200;
}
.Explanation::before{
    content: "";
    position: absolute;
    top: 8%;
    left:-32%;
    padding-left: 10%;
    background-color: rgba(255, 0, 0, 0);
    width: 40%;
    height: 75%;
    z-index: 5;    
}
.line{
    width: 100%;
    height: 1px;
    background-color: rgb(255, 255, 255);
    display: block;
}
.word{
    height: 100%;
    font-size: 10px;
}
.word2{
    font-size: 50px;
}


</style>